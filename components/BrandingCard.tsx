import Image from 'next/image';
import React, { useState } from 'react';

const BrandingCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[60vh] relative overflow-hidden 2xl:h-[60vh]"
    >
      {/* first image */}
      <div className={`absolute transition-all duration-500 ${hovered ? 'top-4 -left-[5dvw]' : 'top-4 -left-[2dvw]'} w-[12dvw] h-[16dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/firstC.svg"
              : "/svg/services/branding/firstNC.svg"
          }
          alt="Service1"
          layout="fill"
        />
      </div>
      {/* second image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-top-[6dvh] right-[6dvw]' : 'top-2 right-[6dvw]'} w-[12dvw] h-[14dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/secondC.svg"
              : "/svg/services/branding/secondNC.svg"
          }
          alt="Service2"
          layout="fill"
        />
      </div>
      {/* third image */}
      <div className={`absolute transition-all duration-500 z-20 ${hovered ? '-top-[6dvh] right-[6dvw]' : 'top-0 right-[6dvw]'} w-[12dvw] h-[16dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/thirdC.svg"
              : "/svg/services/branding/thirdNC.svg"
          }
          alt="Service3"
          layout="fill"
        />
      </div>
      {/* fourth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? '-top-[4dvh] -right-[1.5dvw]' : 'top-0 -right-[1dvw]'} w-[10dvw] h-[19dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/fourC.svg"
              : "/svg/services/branding/fourNC.svg"
          }
          alt="Service4"
          layout="fill"
        />
      </div>
      {/* fifth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? 'bottom-[26dvh] -left-[3dvw]' : 'bottom-[28dvh] -left-[1dvw]'} w-[10dvw] h-[16dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/fiveC.svg"
              : "/svg/services/branding/fiveNC.svg"
          }
          alt="Service5"
          layout="fill"
        />
      </div>
      {/* sixth image */}
      <div className={`absolute transition-all duration-500 ${hovered ? 'bottom-[26dvh] left-[3dvw]' : 'bottom-[33dvh] left-[2dvw]'} w-[10dvw] h-[14dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/sixC.svg"
              : "/svg/services/branding/sixNC.svg"
          }
          alt="Service6"
          layout="fill"
        />
      </div>
      {/* seventh image */}
      {!hovered && <div className={`absolute transition-all duration-500 ${hovered ? 'bottom-[36dvh] right-[7dvw]' : 'bottom-[30dvh] right-[7dvw]'} w-[10dvw] h-[10dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/sevenC.svg"
              : "/svg/services/branding/sevenNC.svg"
          }
          alt="Service7"
          layout="fill"
        />
      </div>}
      {/* eighth image */}
      <div className={`absolute transition-all duration-500 z-30 ${hovered ? 'bottom-36 right-12' : 'bottom-[30dvh] right-[3dvw]'} w-[10dvw] h-[22dvh]`}>
        <Image
          src={
            hovered
              ? "/svg/services/branding/eightC.svg"
              : "/svg/services/branding/eightNC.svg"
          }
          alt="Service8"
          layout="fill"
        />
      </div>
      <div
        className={`absolute transition-all duration-500 transform ${hovered ? ' opacity-100' : ' opacity-0'} bg-opacity-75 w-full h-[30vh] flex items-center justify-center`}
      >
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl font-semibold font-poppins">BRANDING</h2>
      </div>
    </div>
  );
};

export default BrandingCard;