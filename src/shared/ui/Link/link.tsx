import { ILinkProps } from "./link.props"
import styles from "./link.module.scss"

export default function BackLink({type="simple", to, children}: ILinkProps) {
    return (
        <a href={to} className={[styles.default, styles[type]].join(' ')}>{children}</a>
    )
}