import Image from "next/image";
import React, { useState } from "react";

const ProductionCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full relative overflow-hidden "
    >
      {/* first image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-top-[2dvh] -left-[2dvw]' : 'top-0 left-0'} w-[9dvw] h-[9dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/firstC.svg"
              : "/svg/services/production/firstNC.svg"
          }
          alt="Service1"
          fill={true}
        />
      </div>
      {/* second image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-top-[6dvh] right-[1dvw]' : '-top-[1dvh] right-[1dvw]'} w-[16dvw] h-[14dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/secondC.svg"
              : "/svg/services/production/secondNC.svg"
          }
          alt="Service2"
          fill={true}
        />
      </div>
      {/* third image */}
      <div className={`absolute transition-all duration-500 ${hovered ? 'top-[8dvh] -right-[2dvw]' : 'top-0 -right-[2dvw]'} w-[9dvw] h-[9dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/thirdC.svg"
              : "/svg/services/production/thirdNC.svg"
          }
          alt="Service3"
          fill={true}
        />
      </div>
      {/* fourth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? 'top-20 -left-16' : 'top-[12dvh] -left-[1dvw]'} w-[9dvw] h-[9dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/fourC.svg"
              : "/svg/services/production/fourNC.svg"
          }
          alt="Service4"
          fill={true}
        />
      </div>
      {/* fifth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-top-[4dvh] -right-[5dvw]' : 'top-[9dvh] -right-[5dvw]'} w-[19dvw] h-[19dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/fiveC.svg"
              : "/svg/services/production/fiveNC.svg"
          }
          alt="Service5"
          fill={true}
        />
      </div>
      {/* sixth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-bottom-[2dvh] -left-[4dvw]' : 'bottom-0 -left-[2dvw]'} w-[14dvw] h-[16dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/sixC.svg"
              : "/svg/services/production/sixNC.svg"
          }
          alt="Service6"
          fill={true}
        />
      </div>
      {/* seventh image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-bottom-[2dvh] -right-[8dvw]' : 'bottom-0 -right-[6dvw]'} w-[18dvw] h-[18dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/production/sevenC.svg"
              : "/svg/services/production/sevenNC.svg"
          }
          alt="Service7"
          fill={true}
        />
      </div>
      <div
        className={`absolute transition-all duration-500 transform ${hovered ? ' opacity-100' : ' opacity-0'} bg-opacity-75 w-full h-full flex items-center justify-center`}
      >
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl font-semibold font-poppins">PRODUCTION</h2>
      </div>
    </div>
  );
};

export default ProductionCard;