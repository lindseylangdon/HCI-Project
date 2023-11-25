import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";

function SideBarButton() {
  const [buttonSize, setButtonSize] = useState(45);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth >= 640 ? 40 : 30; //Adjust the threshold as needed
      setButtonSize(newSize);
      console.log("New size:", newSize);
    };

    handleResize(); //Set initial size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <button variant="surface">
        <AlignJustify strokeWidth={2} size={buttonSize} fill="white" className="sm:ml-2 md:ml-4 lg:ml-8" />
      </button>
    </div>
  );
}

export default SideBarButton;
