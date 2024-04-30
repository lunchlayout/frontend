import { ITextAreaProps } from "./textarea.props"
import styles from "./textarea.module.scss"
import { ChangeEvent } from "react";

export default function TextArea(
    {
        placeholder,
        value,
        onChange,
        hasOutline = true,
        required = false
    }: ITextAreaProps) {
        function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
            onChange && onChange(e);
            const textArea = e.target;
            if (textArea.clientHeight < 160) {
                textArea.style.height = textArea.scrollHeight + 'px';
            }
        }
        return (
            <textarea 
                className={[styles.default, (hasOutline ? styles.outline : '')].join(' ')} 
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                required={required}
            />
        )
}