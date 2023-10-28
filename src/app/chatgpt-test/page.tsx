import Header from "@/components/chatgpt-test/header";
import styles from './style.module.css';
import ChatGptItem from "@/components/chatgpt-test/ChatGptItem";

export default async function Detail() {
    return (
        <>
           <Header />
            <div className={styles.wrapper}>
                <ChatGptItem />
            </div>
        </>
    )
}
