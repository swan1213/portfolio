/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeroScroller.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { m } from "framer-motion";

const HeroScroller = () => {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href="#about">
        <div className="w-[35-px] h-[64px] rounded-3xl border-4 border-[#38378d] flex justify-center items-start p-2">
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#38378d] mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default HeroScroller;
