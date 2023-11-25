import React, { useEffect } from "react";

const Modal = ({ open, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("overlay")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  if (!open) return null;
    
    return(
        <div className="overlay fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col">
                <button onClick={onClose} className="text-white text-2xl place-self-end">x</button>
                <div className="bg-white rounded pt-2 pb-10 px-10 md:pt-2 lg:pb-30 lg:px-40">
                    <h2 className="font-bold text-lg text-left mt-2">Help Guide</h2>
                    <ul className="py-4 list-disc">
                        <li>Press the play icon to start recording. Translations will generate in the ASL translation box.</li>
                        <li>You can press the pause icon at anytime to temporarily stop recording.</li>
                        <li>Pressing the restart button will clear the video recording and translation.</li>
                        <li>For best results, record in good lighting.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Modal;
