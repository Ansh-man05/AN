import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Heart from "../assets/3d/heart_air_balloon4.glb";

const HeartModel = () => {
  const heartRef = useRef();
  const [positionY, setPositionY] = useState(-20); // Initial Y-position set to 5

  // Load the heart model
  const { scene } = useGLTF(Heart);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY((prevPosition) => prevPosition + 0.003); // Adjust the increment for desired speed
    }, 10); // Interval time in milliseconds (adjust for desired smoothness)

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={heartRef} position={[3,  positionY, 4]} scale={[0.15, 0.15, 0.15]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default HeartModel;
