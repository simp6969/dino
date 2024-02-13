"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Play() {
  const [jump, setJump] = useState(0);
  useEffect(() => {
    if (document) {
      document.onkeydown = (e) => {
        if (e.key === " ") {
          setJump(1);
          setTimeout(() => {
            setJump(0);
          }, 200);
        }
      };
    }
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#2c2c2c]">
      <Image
        src="/dino.png"
        draggable="false"
        style={{
          position: "relative",
          bottom: jump * 200,
          transition: "all",
          transitionDuration: "500ms",
        }}
        height={100}
        width={100}
        alt="dino"
      />
    </div>
  );
}
