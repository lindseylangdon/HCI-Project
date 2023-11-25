import React from "react";
import ASLLabel from "./ASLLabel";

function ASLBox() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="bg-white rounded-xl mb-2 sm:p-2 mb-3 md:p-3 mb-5 w-3/4 lg:p-4 mb-6">
        <div className="mb-4">
          <ASLLabel />
        </div>
        <p className="text-xl text-gray-700 mb-5 pl-3">Translation...</p>
      </div>
    </div>
  );
}

export default ASLBox;