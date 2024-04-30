import { IButtonProps } from "./button.props"
import styles from "./button.module.scss"

export default function Button({type="simple", children, onClick, className = ''}: IButtonProps) {
    return (
        <button type="button" className={[styles.default, styles[type], className].join(' ')} onClick={onClick}>{children}</button>
    )
}