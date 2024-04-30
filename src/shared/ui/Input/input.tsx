import { IInputProps } from "./input.props"
import styles from "./input.module.scss"

export default function Input(
    {
        type="text", 
        placeholder, 
        customType="primary", 
        value,
        onChange,
        hasOutline = true,
        required = false
    }: IInputProps) {

        return (
            <input 
                type={type} 
                className={[styles.default, styles[customType], (hasOutline ? styles.outline : '')].join(' ')} 
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                required={required}
            />
        )
}