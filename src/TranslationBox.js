import React from "react";
import ASLBox from "./ASLBox"
import CameraBox from "./Camerabox";

function TranslationBox(){
    return (
		<div>
			<div className="container mx-auto grid gap-8 md:grid-cols-2">
				<CameraBox></CameraBox>
				<ASLBox></ASLBox>
			</div>
		</div>
	);
}

export default TranslationBox;