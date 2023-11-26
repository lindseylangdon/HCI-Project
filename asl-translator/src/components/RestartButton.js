import React from "react";
import {RotateCcw} from 'lucide-react'

function Restart({onClick}){
    return(
        <div>
            <button variant="surface" onClick={onClick}>
                <RotateCcw strokeWidth={3} size={55} fill="white" className="bg-white rounded-2xl px-3 mb-6 mr-3 hover:bg-gray-200"/>
            </button>
        </div> 
    );
}

export default Restart;