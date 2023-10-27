import Header from "@/components/learn-english/header";
import styles from './style.module.css';
import {getChatGpt} from "@/utils/learn-english/getChatGpt";



export default async function Detail() {
    const data  = await getChatGpt()

    return (
        <>
            <h1>{data}</h1>
           <Header />
            <div className={styles.wrapper}>
                <h2>test</h2>
            </div>
        </>
    )
}
