"use client";

const { useCallback, useState, useLayoutEffect } = require("react");

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleChangeWindowSize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    handleChangeWindowSize();
    window.addEventListener("resize", handleChangeWindowSize);

    return () => window.removeEventListener("resize", handleChangeWindowSize);
  }, [handleChangeWindowSize]);

  return windowSize;
};

export default useWindowSize;
