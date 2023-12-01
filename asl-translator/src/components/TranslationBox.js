import React, { useRef, useEffect, useState } from "react";
import ASLBox from "./ASLBox";
import CameraBox from "./Camerabox";

function TranslationBox() {
    const videoRef = useRef(null);
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
    <div className="container mx-auto flex justify-center">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <CameraBox
            videoRef={videoRef}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onRefresh={handleRefresh}
        />
        <ASLBox 
            videoRef={videoRef}
        />
      </div>
    </div>
  );
}

export default TranslationBox;