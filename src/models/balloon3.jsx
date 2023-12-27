import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Heart from "../assets/3d/heart_air_balloon3.glb";

const HeartModel = () => {
  const heartRef = useRef();
  const [positionY, setPositionY] = useState(-32); // Initial Y-position set to 5

  // Load the heart model
  const { scene } = useGLTF(Heart);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY((prevPosition) => prevPosition + 0.003); // Adjust the increment for desired speed
    }, 10); // Interval time in milliseconds (adjust for desired smoothness)

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={heartRef} position={[-25,  positionY, -25]} scale={[0.20, 0.25, 0.25]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default HeartModel;
