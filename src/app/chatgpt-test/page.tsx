import Header from "@/components/chatgpt-test/header";
import styles from './style.module.css';
import ChatGptItem from "@/components/chatgpt-test/ChatGptItem";
import {getGpt} from "@/utils/chatgpt-test/getGpt";



export default async function ChatGptTestPage() {

    const {choices} = await getGpt();

    return (
        <>
           <Header />
            <h1>{choices[0].message.content}</h1>
            <div className={styles.wrapper}>
                <ChatGptItem />
            </div>
        </>
    )
}
