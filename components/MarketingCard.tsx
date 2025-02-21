import Image from 'next/image';
import React, { useState } from 'react'

const MarketingCard = () => {
  const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-[60vh] relative overflow-hidden 2xl:h-[60vh] "
      >
        {/* first image */}
        <div className={`absolute transition-all duration-500 ${hovered ? '-top-[4dvh] left-4' : '-top-[1dvh] -left-[1dvw]'} w-[12dvw] h-[14dvh]`}>
          <Image
            src={
              hovered
                ? "/svg/services/marketing/firstC.svg"
                : "/svg/services/marketing/firstNC.svg"
            }
            alt="Service1"
            layout="fill"
          />
        </div>
        {/* second image */}
        <div className={`absolute transition-all duration-500 ${hovered ? '-top-[1dvh] -right-[4dvw]' : '-top-[1dvh] -right-[3dvw]'} w-[12dvw] h-[12dvh]`}>
          <Image
            src={
              hovered
                ? "/svg/services/marketing/secondC.svg"
                : "/svg/services/marketing/secondNC.svg"
            }
            alt="Service2"
            layout="fill"
          />
        </div>
        {/* third image */}
        <div className={`absolute transition-all duration-500 ${hovered ? 'top-[6dvh] -left-[4dvw]' : 'top-[12dvh] -left-[4dvw]'} w-[12dvw] h-[12dvh]`}>
          <Image
            src={
              hovered
                ? "/svg/services/marketing/thirdC.svg"
                : "/svg/services/marketing/thirdNC.svg"
            }
            alt="Service4"
            layout="fill"
          />
        </div>
        {/* fourth image */}
        <div className={`absolute transition-all duration-500  ${hovered ? 'bottom-[20dvh] right-[2dvw] w-[12dvw] h-[18dvh]' : 'bottom-[24dvh] -right-[5dvw] w-[24dvw] h-[22dvh] 3xl:-right-[4.5dvw] 4xl:-right-[4dvw]'}`}>
          <Image
            src={
              hovered
                ? "/svg/services/marketing/fourC.svg"
                : "/svg/services/marketing/fourNC.svg"
            }
            alt="Service5"
            layout="fill"
          />
        </div>
        
        <div
          className={`absolute transition-all duration-500 transform ${hovered ? ' opacity-100' : ' opacity-0'} bg-opacity-75 w-full h-[40vh] flex items-center justify-center -translate-x-4`}
        >
          <h2 className="text-2xl lg:text-xl 4xl:text-3xl font-semibold font-poppins">MARKETING</h2>
        </div>
      </div>
    );
}

export default MarketingCard;