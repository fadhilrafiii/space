// "use client";

// const { useCallback, useState, useLayoutEffect } = require("react");

// const usePointerPosition = () => {
//   const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
//   const [direction, setDirection] = useState({ h: null, v: null });

//   const handleChangePointerPosition = useCallback(
//     (e) => {
//       setPointerPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//       if (e.clientX - pointerPosition.x > 0.5) {
//         if (e.clientY - pointerPosition.y > 0.5)
//           setDirection({ v: "bottom", h: "right" });
//         else setDirection({ v: "top", h: "right" });
//       } else if (e.clientX - pointerPosition.x < -0.5) {
//         if (e.clientY - pointerPosition.y > 0.5)
//           setDirection({ v: "bottom", h: "left" });
//         else setDirection({ v: "top", h: "left" });
//       }
//     },
//     [pointerPosition.x, pointerPosition.y]
//   );

//   useLayoutEffect(() => {
//     window.addEventListener("mousemove", handleChangePointerPosition);

//     return () =>
//       window.removeEventListener("mousemove", handleChangePointerPosition);
//   }, [handleChangePointerPosition]);

//   return { pointer: pointerPosition, direction };
// };

// export default usePointerPosition;
