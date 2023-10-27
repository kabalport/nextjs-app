import Header from "@/components/learn-english/header";
import styles from './style.module.css';

import ChatGptItem from "@/components/learn-english/ChatGptItem";



export default async function Detail() {


    return (
        <>
            <ChatGptItem/>
           <Header />
            <div className={styles.wrapper}>
                <h2>test</h2>
            </div>
        </>
    )
}
