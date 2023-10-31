'use client'
import styles2 from './getDiaryInput.module.css';
import {useState} from "react";
import {getDiary} from "@/utils/gpt-diary/getDiary";
import styles from './gptDiary.module.css';
import GetDiaryDetail from "@/components/gpt-diary/getDiaryDetail";


type DiaryItemProps = {
    data: {
        title: string;
        thumbnail: string;
        summary: string;
        emotional_content: string;
        emotional_result: string;
        analysis: string;
        action_list: string[];
    }
}



export default function GetDiaryInput({data}:DiaryItemProps) {
    // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달
    const [userInput, setUserInput] = useState("");
    const [diaryData , setDiaryData] = useState(data); // Add a state for the message

    // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
    const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const handleClick = async () => {
        if (!userInput) {
            alert('일과를 적어주세요.')
            return;
        }
        console.log("GPT에 전달될 회고록 내용:", userInput);

        try {
            const response = await getDiary(`${userInput}`);
            if (response.choices && response.choices.length > 0) {
                const diaryInfo = JSON.parse(response.choices[0].message.content);
                setDiaryData(diaryInfo);
            }
        } catch (error: any) {
            console.log('에러:', error.message);
            return;
        } finally {
            console.log('final');
        }
        setUserInput("");

    };




    return (
        <div>
            <div className={styles2.title}>오늘의 일</div>
            <textarea
                value={userInput}
                onChange={handleUserInput}
                placeholder="오늘 일어난 일들을 간단히 적어주세요."
                className={styles2.textArea}
            ></textarea>
            <div className={styles2.buttonContainer}>
                <button  onClick={handleClick}>
                    GPT 회고록을 작성해줘!
                </button>
            </div>
            <GetDiaryDetail data={diaryData} /> {/* 추가된 부분 */}
        </div>
    )
}
