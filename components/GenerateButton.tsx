import React, { useState } from 'react';

const GenerateButton = ({userInput}: {userInput: string}) => {
    const [apiOutput, setApiOutput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const callGenerateEndpoint = async () => {
        setIsGenerating(true);

        console.log("Calling OpenAI...");
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userInput }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            const { output } = data;
            console.log("OpenAI replied...", output);
    
            setApiOutput(output);
            setIsGenerating(false);
        }
    };

    return (
        <a
            className="inline-flex items-center justify-center rounded-full bg-red-500 p-4 gap-2 text-white cursor-pointer"
            onClick={callGenerateEndpoint}
        >
            <p className="m-0">Generate</p>
        </a>
    );
};

export default GenerateButton;
