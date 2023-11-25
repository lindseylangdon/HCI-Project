import React from "react";
import HelpButton from "./HelpButton";
import Dictionary from "./Dictionary";
import ReadMore from "./ReadMore";

function Footer(){
    return(
        <div>
            <footer className="w-full h-24 bg-white sticky top-[100vh] border">
                <div className="flex flex-row justify-around sm:flex-1 space-x-0">
                    <HelpButton></HelpButton>
                    <Dictionary></Dictionary>
                    <ReadMore></ReadMore>
                </div>
            </footer>
        </div>
    );
}

export default Footer;