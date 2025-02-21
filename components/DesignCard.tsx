import Image from "next/image";
import React, { useState } from "react";

const DesignCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full relative overflow-hidden "
    >
      <div className={`absolute transition-all z-10 duration-500 ${hovered ? '-top-12 left-0' : '-top-2 left-0'} w-[13dvw] h-[30dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/design/firstC.svg"
              : "/svg/services/design/firstNC.svg"
          }
          alt="Service1"
          fill={true}
        />
      </div>
      <div className={`absolute transition-all z-0 duration-500 ${hovered ? 'top-[8dvh] -right-[6dvw]' : 'top-[7dvh] -right-[1.5dvw]'} w-[13dvw] h-[30dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/design/secondC.svg"
              : "/svg/services/design/secondNC.svg"
          }
          alt="Service2"
          fill={true}
        />
      </div>
      <div className={`absolute transition-all duration-500 ${hovered ? '-bottom-[8dvh] -left-[2dvw]' : '-bottom-[4dvh] left-0'} w-[15dvw] h-[30dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/design/thirdC.svg"
              : "/svg/services/design/thirdNC.svg"
          }
          alt="Service3"
          fill={true}
        />
      </div>
      <div
        className={`absolute transition-all duration-500 transform ${hovered ? ' opacity-100' : ' opacity-0'} bg-opacity-75 w-full h-full flex items-center justify-center`}
      >
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl font-semibold  font-poppins">DESIGN</h2>
      </div>
    </div>
  );
};

export default DesignCard;