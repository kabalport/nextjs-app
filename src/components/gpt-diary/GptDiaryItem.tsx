import styles from './gptDiary.module.css';



export default async function GptDiaryItem({data}) {

    return (
            <div className={styles.diaryContainer}>
                <div className={styles.resultTitle}>
                    {data.title}
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>요약</div>
                    <div className={styles.cardContent}>{data.summary}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>감성일기장</div>
                    <div className={styles.cardContent}>{data.emotional_content}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>내가 느낀 감정</div>
                    <div className={styles.cardContent}>{data.emotional_result}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>심리 분석</div>
                    <div className={styles.cardContent}>{data.analysis}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>GPT 조언</div>
                    <div className={styles.cardContent}>
                        <ul className={styles.actionList}>
                            {data.action_list.map((action, index) => (
                                <li key={index} className={styles.actionListItem}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    )
}
