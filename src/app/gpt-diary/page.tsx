import GptDiaryItem from "@/components/gpt-diary/GptDiaryItem";
import styles from './style.module.css';

export default async function GptDiaryPage() {
    return (
        <>
            <div className={styles.appContainer}>
                <div className={styles.appTitle}>
                    심리상담사 GPT, AI 회고록
                </div>
                <GptDiaryItem />
            </div>
        </>
    )
}
