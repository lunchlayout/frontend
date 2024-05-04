import { Store } from "@app/index";
import SearchDishesPanel from "./searchDishesPanel";
import { Provider } from "react-redux";


export default function MockProvider() {

    return (
        <Provider store={Store}>
            <SearchDishesPanel/>
        </Provider>
    )
}