import React from "react";
import ASLLabel from './ASLLabel'

function ASLBox(){
    return (
        <div className="flex-1">
            <div className="bg-white rounded-xl max-w-3xl sm:p-2 mb-3 md:p-3 mb-5 lg:p-4 mb-6">
                <div className="mb-4">
                    <ASLLabel></ASLLabel>
                </div>
                <p class="text-xl text-gray-700 mb-5 pl-3">
                    Translation...
                </p>
            </div>
        </div>
	);
}

export default ASLBox;