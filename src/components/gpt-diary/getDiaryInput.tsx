'use client'
import styles from './getDiaryInput.module.css';
import {useState} from "react";
import {getDiary} from "@/utils/gpt-diary/getDiary";

export default function GetDiaryInput() {
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState([]); // Add a state for the message

    // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달


    // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
    const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const handleClick = async () => {
        if (!userInput) {
            console.log('일과를 적어주세요');
            return;
        }
        console.log("GPT에 전달될 회고록 내용:", userInput);
        try {
            const response = await getDiary(`${userInput}`);
            if (response.choices && response.choices.length > 0) {
                // 여기에서 choices 배열 내부의 message.content 값을 추출하여 상태에 저장합니다.
                const diaryMessages = response.choices.map(choice => choice.message.content);
                setMessage(diaryMessages);
            }
        } catch (error: any) {
            console.log('에러:', error.message);
            return;
        } finally {
            console.log('final');
        }
    };


    return (
        <div>
            <div className={styles.title}>오늘의 일</div>
            <textarea
                value={userInput}
                onChange={handleUserInput}
                placeholder="오늘 일어난 일들을 간단히 적어주세요."
                className={styles.textArea}
            ></textarea>
            <div className={styles.buttonContainer}>
                <button  onClick={handleClick}>
                    GPT 회고록을 작성해줘!
                </button>
            </div>
            <h1>{message}</h1>
        </div>
    )
}
