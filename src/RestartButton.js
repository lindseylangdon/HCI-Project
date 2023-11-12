import React from "react";
import {RotateCcw} from 'lucide-react'

function Restart(){
    return(
        <div>
            <div className="flex-1 container mx-auto">
                <RotateCcw strokeWidth={3} size={55} fill="white" className="bg-white rounded-2xl px-3 mb-6"/>
            </div>
        </div> 
    );
}

export default Restart;