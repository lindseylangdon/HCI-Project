import React, {useRef, useEffect} from "react";

function CameraBox(){
    const videoRef = useRef(null); 

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({video: {width: 1920, height: 1080}
			})
			.then(stream => {
				let video = videoRef.current;
				video.srcObject = stream;

				video.play();
			})
			.catch(err => {
				console.error(err.name + ": " + err.message);
			})
	}

	useEffect(() => {
		getVideo();
	}, [videoRef])

    return (
		<div className="flex justify-center container mx-auto py-4 bg-white rounded-xl">
			<video ref={videoRef} className="rounded-xl"></video>
		</div>
	);
}

export default CameraBox;