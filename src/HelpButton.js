import React from "react";

function HelpButton(){
    return(
        <div>
            <button className="ml-4 mt-4" onClick={()=>document.getElementById('my_modal_1').showModal()}>Help</button>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Help Guide</h3>
                <p className="py-4">click close :p</p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
}

export default HelpButton;