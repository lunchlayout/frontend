import { PaginationControl } from "@shared/ui"
import { IDishesPaginationControlProps } from "./dishesPaginationControl.props"
import { useSelector } from "react-redux"
import { actions, selectors } from "@entities/Cafe"
import { useAppDispatch } from "@app/index"

export default function DishesPaginationControl({className = ''}: IDishesPaginationControlProps) {

    const currentPage = useSelector(selectors.currentPage);
    const pageCnt = useSelector(selectors.pageCnt);
    const dispatch = useAppDispatch();
    
    function nextPage() {
        dispatch(actions.setCurrentPage(currentPage + 1))
    }
    function prevPage() {
        dispatch(actions.setCurrentPage(currentPage - 1))
    }

    return (
        <PaginationControl 
            currentPage={currentPage} 
            pageCnt={pageCnt} 
            onLeftClick={prevPage} 
            onRightClick={nextPage}
            className={className}
        />  
    )
}