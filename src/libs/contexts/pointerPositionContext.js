"use client";

const { createContext } = require("react");

const PointerPositionContext = createContext({
  pointer: {
    x: 0,
    y: 0,
  },
  direction: {
    h: null,
    v: null,
  },
});

export default PointerPositionContext;
