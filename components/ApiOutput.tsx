import React from "react";

const ApiOutput = ({ apiOutput }: { apiOutput: string }) => {
  if (!apiOutput) {
    return null;
  }

  return (
    <div className="items-center justify-start flex flex-no-shrink flex-col gap-2.5 h-auto max-w-[1200px] overflow-hidden relative w-full">
      <div className="items-center justify-center flex flex-no-shrink flex-col gap-4 h-auto overflow-hidden p-0 relative w-full">
        <div className="text-start text-[#ffffff] text-4xl font-black leading-7 no-underline pt-24 pb-10">
          <h3>💡 First Principles Rationale</h3>
        </div>
      </div>
      <div className="flex flex-col justify-start flex-no-shrink">
        <p className="text-center whitespace-pre-line text-white text-opacity-50">
          {apiOutput}
        </p>
      </div>
    </div>
  );
};

export default ApiOutput;
