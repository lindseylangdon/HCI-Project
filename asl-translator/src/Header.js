import React from "react";
import SideBarButton from "./SideBarButton";

function Header(){
    return(
        <div>
            <div className="flex flex-row items-center">
                <SideBarButton/>
                <p className="container mx-auto text-center font-bold py-8 sm:text-2xl md:text-3xl lg:text-3xl">American Sign Language-to-English Translator</p>
            </div>
            <div>
                <hr className="border-t border-dark-mustard"></hr>
                <br></br>
            </div>
        </div>
    );
}

export default Header;