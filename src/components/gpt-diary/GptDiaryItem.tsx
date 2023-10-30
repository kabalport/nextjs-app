import styles from './gptDiary.module.css';

type DataProps = {
    title: string;
    summary: string;
    emotional_content: string;
    emotional_result: string;
    analysis: string;
    action_list: string[];
}

type GptDiaryItemProps = {
    data: DataProps;
}


export default async function GptDiaryItem() {

    return (
            <></>
    )
}
