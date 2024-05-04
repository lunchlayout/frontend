import { IInputProps } from "./input.props"
import styles from "./input.module.scss"

export default function Input(
    {
        type="text", 
        placeholder, 
        customType="primary", 
        value,
        onChange,
        disabled = false,
        hasOutline = true,
        required = false,
        className = ''
    }: IInputProps) {

        return (
            <input 
                type={type} 
                className={[styles.default, styles[customType], (hasOutline ? styles.outline : ''), className].join(' ')} 
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
        )
}