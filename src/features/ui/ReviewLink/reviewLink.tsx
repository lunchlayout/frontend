import { Link } from "@shared/ui"
import styles from "./reviewLink.module.scss"

export default function ReviewLink() {
    return (
        <Link to="/reviews" type="primary" className={styles.reviewLink}>
            <svg className={styles.icon} aria-hidden="true" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8519 0C13.4196 0 13.0051 0.168571 12.6995 0.468629C12.3939 0.768687 12.2222 1.17565 12.2222
                 1.6V4.8C12.2222 5.22435 12.3939 5.63131 12.6995 5.93137C13.0051 6.23143 13.4196 6.4 13.8519 6.4V8.8L16.7852
                  6.4H20.3704C20.8026 6.4 21.2171 6.23143 21.5227 5.93137C21.8283 5.63131 22 5.22435 22 4.8V1.6C22 1.17565
                   21.8283 0.768687 21.5227 0.468629C21.2171 0.168571 20.8026 0 20.3704 0H13.8519ZM6.51852 4C5.65411 4 4.8251
                    4.33714 4.21387 4.93726C3.60264 5.53737 3.25926 6.35131 3.25926 7.2C3.25926 8.04869 3.60264 8.86263 4.21387
                     9.46274C4.8251 10.0629 5.65411 10.4 6.51852 10.4C7.38293 10.4 8.21193 10.0629 8.82316 9.46274C9.43439 8.86263
                      9.77778 8.04869 9.77778 7.2C9.77778 6.35131 9.43439 5.53737 8.82316 4.93726C8.21193 4.33714 7.38293 4 6.51852
                       4ZM10.5926 12H2.44444C1.79614 12 1.17438 12.2529 0.715961 12.7029C0.257539 13.153 0 13.7635 0 14.4C0 16.1856
                        0.748 17.616 1.97511 18.584C3.18267 19.536 4.80252 20 6.51852 20C8.23452 20 9.85437 19.536 11.0619
                         18.584C12.2874 17.616 13.037 16.1856 13.037 14.4C13.037 13.7635 12.7795 13.153 12.3211 12.7029C11.8627
                          12.2529 11.2409 12 10.5926 12Z"/>
            </svg>
        </Link>
    )
}