import { IDishStoryProps } from "./dishStory.props"
import styles from "./dishStory.module.scss"
import { Image } from "@shared/ui"


export default function DishStory(
    {   
        description,
        img,
        className = ''
    }: IDishStoryProps) {

        return (

            <article className={[styles.default, className].join(' ')}>
                <Image width={160} height={90} className={styles.image} src={img}/>
                <p className={styles.text}>{description}</p>
            </article>
        )
}