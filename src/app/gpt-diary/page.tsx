import GetDiaryInput from "@/components/gpt-diary/getDiaryInput";
import GptDiaryTitle from "@/components/gpt-diary/gptDiaryTitle";
import GetDiaryDetail from "@/components/gpt-diary/getDiaryDetail";
import GptDiaryItem from "@/components/gpt-diary/GptDiaryItem";



export default async function GptDiaryPage() {
    return (
            <div>
                <GptDiaryTitle />
                <GptDiaryItem />
            </div>
    )
}
