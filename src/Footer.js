import React from "react";
import HelpButton from "./HelpButton";

function Footer(){
    return(
        <div>
            <footer className="w-full h-24 bg-white sticky top-[100vh]">
                <HelpButton></HelpButton>
            </footer>
        </div>
    );
}

export default Footer;