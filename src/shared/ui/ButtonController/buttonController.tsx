import { IButtonControllerProps } from "./buttonController.props"
import styles from "./buttonController.module.scss"
import Button from '../Button'
export default function ButtonController({direction = "right", onClick}: IButtonControllerProps) {
    return (
        <Button type="simple" onClick={onClick} className={styles.button}>
            <svg className={[styles.arrow, styles[direction]].join(' ')} viewBox="0 0 18 23" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.13924 0.185549C5.03315 0.184512 5.90017 0.482288 6.59447 1.0288L16.2265 8.74638C16.6043
                 9.03825 16.9093 9.40904 17.119 9.83116C17.3286 10.2533 17.4375 10.7159 17.4375 11.1845C17.4375
                  11.6531 17.3286 12.1157 17.119 12.5378C16.9093 12.9599 16.6043 13.3307 16.2265 13.6226L6.59447
                   21.3402C6.0146 21.7911 5.31587 22.0749 4.57791 22.1592C3.83995 22.2434 3.09244 22.1248 2.42057
                    21.8168C1.83666 21.567 1.33916 21.1593 0.987515 20.6424C0.635867 20.1256 0.444928 19.5214
                    0.4375 18.9021L0.4375 3.4669C0.444928 2.84756 0.635867 2.24338 0.987515 1.72653C1.33916 1.20968
                     1.83666 0.802003 2.42057 0.552181C2.96047 0.313875 3.54614 0.188937 4.13924 0.185549Z"/>
            </svg>
        </Button>
    )
}