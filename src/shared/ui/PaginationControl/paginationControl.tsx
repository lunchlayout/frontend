import { ButtonController } from "@shared/ui"
import styles from "./paginationControl.module.scss"
import { IPaginationControlProps } from "./paginationControl.props"

export default function PaginationControl(
    {
        currentPage,
        pageCnt,
        onLeftClick,
        onRightClick,
        className = ''
    }: IPaginationControlProps) {

        return (
            <div className={[styles.default, className].join(' ')}>
                <ButtonController 
                    disabled={currentPage < 2} 
                    direction="left"
                    onClick={onLeftClick}
                />
                <span>{`${currentPage}/${pageCnt}`}</span>
                <ButtonController 
                    disabled={currentPage >= pageCnt} 
                    direction="right"
                    onClick={onRightClick}
                />    
            </div>  
        )
}