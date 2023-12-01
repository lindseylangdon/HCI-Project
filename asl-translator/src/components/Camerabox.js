import React from "react";
import CameraLabel from "./CameraLabel";
import Restart from "./RestartButton";
import PlayButton from "./Play";
import PauseButton from "./Pause";

function CameraBox({ videoRef, isPlaying, handlePlayPause, handleRefresh }) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="bg-white rounded-xl mb-2 sm:w-3/4 md:px-10 w-full lg:px-10">
        <div className="mb-1 pt-2">
          <CameraLabel />
        </div>
        <video ref={videoRef} className="rounded-xl w-full"></video>
        <p className="pb-8"></p>
      </div>
      <div className="flex flex-row">
        <Restart onClick={handleRefresh} />
        {isPlaying ? (
          <PauseButton onClick={handlePlayPause} className="ml-2" />
        ) : (
          <PlayButton onClick={handlePlayPause} className="ml-2" />
        )}
      </div>
    </div>
  );
}

export default CameraBox;