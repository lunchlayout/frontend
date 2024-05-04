import { SearchPanel } from "@shared/ui"
import { ISearchDishesPanelProps } from "./searchDishesPanel.props"
import { FormEvent, useState } from "react"
import { selectors, actions } from "@entities/Cafe";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Query } from "@features/context";
import { ICafeParams } from "@app/types";
import { debounce } from "@shared/lib";



export default function SearchDishesPanel({className = ''}: ISearchDishesPanelProps) {

    const currentPage = useSelector(selectors.currentPage);
    const {cafeId} = useParams<keyof ICafeParams>() as ICafeParams;
    
    const [query, setQuery] = useState('');

    const searchDishes = debounce(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        actions.getCafeById({cafeId, query, page: currentPage});
    }, 300) 

    return (
        <Query.Context.Provider value={{
            value: query,
            handleChange: e => setQuery(e.target.value)
        }}>
            <SearchPanel
                disabled={!currentPage}
                onSubmit={searchDishes}
                className={[className].join(' ')} 
                placeholder="Найти блюдо"
            />
        </Query.Context.Provider>
    )
}