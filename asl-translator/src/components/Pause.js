import React from "react";
import { Pause } from "lucide-react";

function PauseButton({onClick}){
    return(
        <div>
            <button variant="surface" onClick={onClick}>
                <Pause strokeWidth={2.5} size={55} fill="white" className="bg-white rounded-2xl px-3 mb-6 float-right hover:bg-gray-400"/>
            </button>
        </div> 
    );
}

export default PauseButton;