"use client";
import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { ChangeEvent, useState } from "react";
import GenerateButton from "@/components/GenerateButton";
import PromptBox from "@/components/PromptBox";
import ApiOutput from "@/components/ApiOutput";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const resetUserInput = () => setUserInput("");

  const onUserChangedText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="flex flex-nowrap justify-center items-start bg-black gap-2.5 h-screen overflow-auto p-0 relative">
      <Head>
        <title> Mental Model Assistant</title>
      </Head>
      <div className="flex justify-center items-start items-center flex-initial flex-col gap-16 overflow-auto p-12 relative w-auto">
        <div className="flex-col gap-3 ">
          <div className="w-full font-bold text-7xl leading-snug text-center m-0">
            <h1>🧠 🕸️ Mental Model Assistant</h1>
          </div>
          <div className="text-xl font-normal leading-normal text-white text-opacity-75">
            &quot;You’ve got to have models in your head. And you’ve got to
            array your experience both vicarious and direct on this latticework
            of models.&quot; - Charlie Munger
          </div>
        </div>
        <div className="flex flex-col items-center justify-end flex-shrink-0 gap-4 min-h-[min-content] p-0 min-w-full">
          <div className="flex items-center justify-center w-full space-x-10">
            <PromptBox
              userInput={userInput}
              onUserChangedText={onUserChangedText}
            />
            <GenerateButton
              userInput={userInput}
              setApiOutput={setApiOutput}
              resetUserInput={resetUserInput}
            />
          </div>
          <ApiOutput apiOutput={apiOutput} />
        </div>
      </div>
    </div>
  );
};

export default Home;
