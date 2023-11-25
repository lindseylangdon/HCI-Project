import React, { useState } from "react";
import SideBarButton from "./SideBarButton";
import { Link } from "react-router-dom";
import CloseButton from "./CloseButton";
import { SideBarData } from "./SideBarData";

function Header() {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar);

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="navbar">
          <Link to="#" className="text-white">
            <SideBarButton onClick={showSideBar} />
          </Link>
        </div>
        <nav className={`fixed left-0 top-0 h-full ${sidebar ? 'w-64' : 'w-0'} bg-dark-mustard bg-opacity-80 transition-all duration-300 ease-in-out overflow-hidden`}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="text-white">
                <CloseButton onClick={showSideBar} />
              </Link>
            </li>
            {SideBarData.map((item, index) => (
              <li key={index} className={`py-2 ${item.className}`}>
                <Link to={item.path} className="text-white flex items-center ml-4 transition duration-300 hover:underline hover:text-yellow-400">
                  {item.icon}
                  <span className="ml-2 text-xl">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
