export interface Response {
    id: string
    object: string
    created: number
    model: string
    choices: Choice[]
    usage: Usage
}

interface Choice {
    index: number
    message: Message
    finish_reason: string
}

interface Message {
    role: string
    content: string
}

interface Usage {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
}


export const getGpt = async (): Promise<Response> => {
    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
