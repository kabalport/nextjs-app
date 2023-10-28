import {getGpt} from "@/utils/chatgpt-test/getGpt";


export default async function ChatGptItem() {
    const {choices} = await getGpt();
    return (
        <div>
            <h1>test</h1>
                <h1>{choices.map((res) => (
                    <h1>{res.message.content}</h1>
                ))}
                </h1>
        </div>
    )
}
