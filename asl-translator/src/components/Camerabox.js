import React, { useRef, useEffect, useState } from "react";
import CameraLabel from "./CameraLabel";
import Restart from "./RestartButton";
import PlayButton from "./Play";
import PauseButton from "./Pause";

function CameraBox({ videoRef }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const getVideo = () => {
      setIsRefreshing(true);
    
      navigator.mediaDevices
        .getUserMedia({ video: { width: 1920, height: 1080 } })
        .then((stream) => {
          let video = videoRef.current;
          
          //Set the stream as the video source
          video.srcObject = stream;
    
          //Wait for the 'loadedmetadata' event before attempting to play to avoid play() request was interrupted
          video.addEventListener('loadedmetadata', () => {
            video.play().then(() => {
              setIsPlaying(true);
              setIsRefreshing(false);
            });
          });
        })
        .catch((err) => {
          console.error(err.name + ": " + err.message);
          setIsRefreshing(false);
        });
    };  
  
    useEffect(() => {
      getVideo();
    }, [videoRef]);
  
    const handlePlayPause = () => {
      let video = videoRef.current;
  
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
  
      setIsPlaying(!isPlaying);
    };
  
    const handleRefresh = () => {
      setIsPlaying(false);
      getVideo();
    };
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