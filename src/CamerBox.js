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
		<div className="flex-1 items-center justify-center container mx-auto">
			<div className="flex bg-white rounded-xl max-w-3xl sm:p-2 md:p-3 lg:py-4">
				<video ref={videoRef} className="rounded-xl aspect-w-16 aspect-h-9"></video>
			</div>
		</div>
	);
}

export default CameraBox;