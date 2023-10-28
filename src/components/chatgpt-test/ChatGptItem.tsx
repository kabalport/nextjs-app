import {getGpt} from "@/utils/chatgpt-test/getGpt";


export default async function ChatGptItem() {
    const {choices} = await getGpt();
    return (
        <div>
            <h1>test</h1>
            {choices.map((res, index) => (
                <h1 key={index}>{res.message.content}</h1>
            ))}
        </div>
    )
}
