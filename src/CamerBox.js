import React, {useRef, useEffect} from "react";
import Restart from "./RestartButton";
import CameraLabel from "./CameraLabel";

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
		<div>
			<div className="flex-1 container mx-auto">
				<div className="bg-white rounded-xl max-w-3xl sm:px-6 mb-3 md:px-7 mb-5 lg:px-10 mb-6">
					<div className="mb-1 pt-2">
						<CameraLabel></CameraLabel>
					</div>
					<video ref={videoRef} className="rounded-xl"></video>
					<p className="pb-8"></p>
				</div>
				<div className="bg-white inline-block rounded-full p-1.5">
					<Restart></Restart>
				</div>
			</div>
		</div>
	);
}

export default CameraBox;