import React, {useRef, useEffect} from "react";
import CameraLabel from "./CameraLabel"

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
			<div className="flex-1">
				<div className="bg-white rounded-xl mb-2 sm:px-0 md:px-3 lg:px-10">
					<div className="mb-1 pt-2">
						<CameraLabel></CameraLabel>
					</div>
                        <video ref={videoRef} className="rounded-xl"></video>
                        <p className="pb-8"></p>
				</div>
			</div>
		</div>
	);
}

export default CameraBox;