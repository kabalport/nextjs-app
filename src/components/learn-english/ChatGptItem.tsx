
import {getChatGpt} from "@/utils/learn-english/getChatGpt";


export default async function ChatGptItem() {
    const {choices}  = await getChatGpt()
    console.log(choices[0].message.content)
    return (
        <>
            <h1>{choices[0].message.content}</h1>

            <h1>test</h1>
        </>
    )
}
