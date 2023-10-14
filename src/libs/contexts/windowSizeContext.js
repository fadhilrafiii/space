"use client";

const { createContext } = require("react");

const WindowSizeContext = createContext({
  width: 0,
  height: 0,
});

export default WindowSizeContext;
