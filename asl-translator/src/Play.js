import React from "react";
import {Play} from 'lucide-react'

function PlayButton({onClick}){
    return(
        <div>
            <button variant="surface" onClick={onClick}>
                <Play strokeWidth={3} size={55} fill="white" className="bg-white rounded-2xl px-3 mb-6 float-right hover:bg-gray-400"/>
            </button>
        </div> 
    );
}

export default PlayButton;