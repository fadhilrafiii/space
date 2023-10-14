"use client";

import { useLayoutEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState("UP");

  useLayoutEffect(() => {
    const onScroll = (e) => {
      const window = e?.currentTarget;

      setScrollDirection(
        scroll.y > window.scrollY || window.scrollY === 0 ? "UP" : "DOWN"
      );

      setScroll({ x: window?.scrollX || 0, y: window?.scrollY || 0 });
    };

    window.addEventListener("scroll", onScroll);
    setScroll({ x: window?.scrollX || 0, y: window?.scrollY || 0 });

    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll.y]);

  return {
    scrollX: scroll.x,
    scrollY: scroll.y,
    scrollDirection,
  };
};

export default useScroll;
