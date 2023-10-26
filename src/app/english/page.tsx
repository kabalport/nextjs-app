'use client'
import Header from "@/components/learn-english/header";
import styles from './style.module.css';
import YourSentences from "@/app/english/yourSentences";
import {useState} from "react";
import CorrectSentences from "@/app/english/correctSentences";


export default async function Detail() {
    const [after, setAfter] = useState('');
    const handleSubmitSentence = async (sentence) => {


        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ before: sentence }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw (
                    data.error ||
                    new Error(`request failed with status ${response.status}`)
                );
            }

            if (data.after.trim() == 'Not Found') {
                setAfter('올바른 표현을 찾을 수 없습니다.');
            } else {
                setAfter(data.after.trim());
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
           <Header />
            <div className={styles.wrapper}>
                <YourSentences onSubmit={handleSubmitSentence} />
                <CorrectSentences after={after} />
            </div>
        </>
    )
}
