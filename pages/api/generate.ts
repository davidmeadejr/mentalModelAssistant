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

        const completionResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `${basePromptPrefix}${req.body.userInput}`

            }],
            temperature: 0.7,
            max_tokens: 1000,
        });

        console.log('Response from OpenAI API: ', completionResponse);

        // Check if choices were returned
        if (!completionResponse.data.choices || completionResponse.data.choices.length === 0) {
            res.status(500).json({ message: 'No choices were returned by the API' });
            return;
        }

        const completionOutput = completionResponse.data.choices.pop();

        // Check if a message was returned
        if (!completionOutput || !completionOutput.message) {
            res.status(500).json({ message: 'No message was returned by the API' });
            return;
        }

        res.status(200).json({ output: completionOutput.message.content });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default generateAction
