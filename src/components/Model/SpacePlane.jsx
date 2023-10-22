/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useContext, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import WindowSizeContext from "@/libs/contexts/windowSizeContext";

export default function SpacePlane({ initialPosition, ...props }) {
  const windowSize = useContext(WindowSizeContext);

  const ref = useRef();
  const [pointerX, setPointerX] = useState(0);
  const [pointerHDir, setPointerHDir] = useState(null);
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
  );

  const farRight = windowSize.width / 100;
  const farLeft = -farRight;
  const farTop = windowSize.height / 90;
  const farBottom = -(windowSize.height - 225) / 166;

  const getXPosition = (posX, delta) => {
    if (posX + delta >= farRight) return farRight;
    if (posX + delta <= farLeft) return farLeft;

    return posX + delta;
  };

  const getYPosition = (posY, delta) => {
    if (posY + delta >= farTop) return farTop;
    if (posY + delta <= farBottom) return farBottom;

    return posY + delta;
  };

  const getYRotation = (ref) => {
    if (pointerHDir === "right") return 2;
    if (pointerHDir === "left") return -2;

    return ref.current.rotation.y;
  };

  useFrame((state) => {
    // @Phase(0): Initial Position
    const isInitialTime = state.clock.elapsedTime <= 1;
    if (isInitialTime) {
      ref.current.position.x = farRight;
      ref.current.position.y = -7;
      ref.current.position.z = -windowSize.width / 160;
    }

    if (!isInitialTime) {
      easing.damp3(ref.current.position, [
        getXPosition(ref.current.position.x, state.pointer.x * 3),
        getYPosition(ref.current.position.y, state.pointer.y * 0.5),
        ref.current.position.z,
      ]);
    }

    setPointerX(state.pointer.x);
    if (state.pointer.x > pointerX) setPointerHDir("right");
    else if (state.pointer.x < pointerX) setPointerHDir("left");
    else setPointerX(null);

    easing.dampE(ref.current.rotation, [
      ref.current.rotation.x,
      getYRotation(ref),
      ref.current.rotation.z,
    ]);
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        shadow-mapSize={[1024, 1024]}
        intensity={5}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
      <mesh geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials.Mat1} />
      <mesh geometry={nodes.Cube005_2.geometry} material={materials.Mat2} />
      <mesh
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      <mesh geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh geometry={nodes.Cube005_5.geometry} material={materials.Mat3} />
      <mesh geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
);
