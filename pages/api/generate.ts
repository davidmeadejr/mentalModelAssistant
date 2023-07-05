import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { basePromptPrefix } from "@/constants/basePromptPrefix";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!process.env.OPENAI_API_KEY) {
            res.status(500).json({ message: 'API key not found' });
            return;
        }

        console.log(`Request Body: `, req.body);

        // Start the timer
        console.time('OpenAI API Call');

        const completionResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `${basePromptPrefix}${req.body.userInput}`
            }],
            temperature: 0.7,
            max_tokens: 1000,
        });

        // End the timer
        console.timeEnd('OpenAI API Call');

        console.log('Response from OpenAI API: ', completionResponse);

        // ... rest of your code
    } catch (error: unknown) {
        // ... error handling code
    }
}

export default generateAction