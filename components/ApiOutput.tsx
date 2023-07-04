// For ApiOutput Component
import React from "react";

const ApiOutput = ({ apiOutput }: { apiOutput: string }) => {
  if (!apiOutput) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-start gap-2.5 h-auto max-w-[1200px] m-auto mt-5 p-5 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-black text-4xl font-black leading-7 no-underline pt-2 pb-5">
        💡 First Principles Approach
      </h3>

      <div className="flex flex-col justify-start bg-gray-100 rounded-md p-4 overflow-auto">
        <p className="text-left whitespace-pre-line text-gray-800">
          {apiOutput}
        </p>
      </div>
    </div>
  );
};

export default ApiOutput;
