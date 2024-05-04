import { ILinkProps } from "./link.props"
import styles from "./link.module.scss"

export default function Link({type="simple", to, children, className = ''}: ILinkProps) {
    return (
        <a href={to} className={[styles.default, styles[type], className].join(' ')}>{children}</a>
    )
}