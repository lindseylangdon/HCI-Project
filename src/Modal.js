import React from "react";

const Modal = ({open, onClose}) => {
    if (!open) return null;
    return(
        <div className="overlay fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center">
            <div className="flex flex-col">
                <button onClick={onClose} className="text-white text-2xl place-self-end">x</button>
                <div className="bg-white rounded md:pt-2 md:pb-10 md:pl-20 md:pr-20 lg:pt-2 lg:pb-30 lg:pl-40 lg:pr-40">
                    <h2 className="font-bold text-lg text-left">Help Guide</h2>
                    <ul className="py-4 list-disc">
                        <li>Press the play icon to start recording. Translations will generate in real time in the ASL translation box below.</li>
                        <li>You can press the pause icon at anytime to temporarily stop recording.</li>
                        <li>Pressing clear will restart the video recording and translation.</li>
                        <li>Press the report icon to report any bugs.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Modal;