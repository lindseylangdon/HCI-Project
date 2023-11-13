import React, {useState} from "react";
import Modal from "./Modal";
import {HelpCircle} from 'lucide-react'

function HelpButton(){
    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
            <div className="mx-5 pt-2">
                <button variant="surface" onClick={() => setOpenModal(true)}>
                    <HelpCircle strokeWidth={2} size={55} fill="white" className="rounded-ful p-1"/>
                </button>
            </div>
            
            <div>
                <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
            </div>
        </div>
    );
}

export default HelpButton;