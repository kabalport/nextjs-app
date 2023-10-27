const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY


export interface Response {
    id: string
    object: string
    created: number
    model: string
    choices: Choice[]
    usage: Usage
}

export interface Choice {
    index: number
    message: Message
    finish_reason: string
}

export interface Message {
    role: string
    content: string
}

export interface Usage {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
}



export const  getChatGpt = async (): Promise<Response> => {
    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant."
                    },
                    {
                        role: "user",
                        content: "Hello!"
                    }
                ]
            })
        });

        if (!res.ok) {
            throw new Error('chatgpt 정보를 가져올수 없습니다.')
        }

        const data = res.json();
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}