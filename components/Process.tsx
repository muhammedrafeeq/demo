import React, { useEffect } from "react";
const items = [
  { number: 1, text: "ORDER PLACEMENT", image: "/svg/process/process1.svg" },
  { number: 2, text: "ORDER REVIEW CALL", image: "/svg/process/process2.svg" },
  {
    number: 3,
    text: "BRIEF & STRATEGY DEVELOPMENT",
    image: "/svg/process/process3.svg"
  },
  {
    number: 4,
    text: "CLIENT REVIEW MEETINGS",
    image: "/svg/process/process4.svg"
  },
  { number: 5, text: "ASSET CREATION", image: "/svg/process/process5.svg" },
  {
    number: 6,
    text: "ITERATIONS & REFINEMENT",
    image: "/svg/process/process6.svg"
  },
  { number: 7, text: "ASSET DELIVERY", image: "/svg/process/process7.svg" }
];

const Process = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 500px)", () => {
      const sections = gsap.utils.toArray(".item1");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobileScroller",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: "+=6000"
        }
      });
      sections.forEach((section, index) => {
        tl.to(section as HTMLElement, {
          x: -200,
          duration: 0.5,
          ease: "power1.inOut",
          onStart: () => {
            gsap.set(section.querySelector(".text1"), {
              display: "flex",
              rotate: 0
            });
            gsap.set(section.querySelector(".number1"), {
              rotate: 0
            });
            if (index > 0) {
              const prevSection = sections[index - 1] as HTMLElement;
              gsap.set(prevSection.querySelector(".text1"), {
                display: "none"
              });
              gsap.set(prevSection.querySelector(".number1"), {
                rotate: 0,
                display: "none"
              });
            }
          },
          onComplete: () => {
            gsap.set(section.querySelector(".text1"), {
              display: "none"
            });
            gsap.set(section.querySelector(".number1"), {
              rotate: 45
            });
          }
        });
      });
    });
  }, []);
  return (
    <div className="mobileScroller h-[600vh]">
      <div className="p-2 flex flex-col h-screen relative">
        <div className="">
          <div className="flex overflow-x-auto space-x-10 px-3 ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item1 flex text-lg font-semibold font-poppins flow`}
              >
                <div className={`number1 `}>{item.number}</div>
                <div className="text1 w-48">. {item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
