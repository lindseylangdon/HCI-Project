import React from "react";
import ASLBox from "./ASLBox";
import CameraBox from "./Camerabox";

function TranslationBox() {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <CameraBox />
        <ASLBox />
      </div>
    </div>
  );
}

export default TranslationBox;