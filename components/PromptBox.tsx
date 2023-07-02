import React, { ChangeEvent } from "react";

type PromptBoxProps = {
  userInput: string;
  onUserChangedText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const PromptBox = ({ userInput, onUserChangedText }: PromptBoxProps) => (
  <textarea
    className="border border-opacity-10 rounded-xl bg-white bg-opacity-5 flex flex-col justify-start items-start flex-shrink-0 gap-2.5 h-36 overflow-auto p-5 relative max-w-5xl w-full transform-gpu overflow-auto focus:outline-none resize-none text-base font-normal leading-snug text-white text-opacity-75 no-underline"
    placeholder="Enter your problem or question here..."
    value={userInput}
    onChange={onUserChangedText}
  />
);

export default PromptBox;
