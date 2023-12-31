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



export const getDiary = async ( prompt: string ): Promise<Response> => {

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `## INFO ##
    you can add images to the reply by URL, Write the image in JSON field 
    Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
                },
                {
                    role: "system",
                    content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
                },
                {
                    role: "user",
                    content: `1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
      2. [summarize] : summarize events in order with one line sentence.
      3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
      4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
      6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed anduse a famous quote.
      7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
      8. [image] : Create an image by making the contents so far into one keyword.
      
      
      Translate into Korean and Use the output in the following JSON format:
      { 
          title: here is [title],
          thumbnail: here is [image],
          summary: here is [summarize]
          emotional_content: here is [emotional diary],
          emotional_result: here is [evaluates],
          analysis: here is [Psychological analysis],
          action_list: here is [3 action tips],
      }
      
      [events]:`,
                },
                {
                    role: "user",
                    content: `
        """
        ${prompt}
        """`,
                },
            ],
            temperature: 0.7,
            max_tokens: 1_000,
        })
    });

    if (!res.ok) {
        throw new Error('chatgpt 정보를 가져올수 없습니다.')
    }

    return res.json();
}
