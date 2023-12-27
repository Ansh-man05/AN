import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Heart from "../assets/3d/heart_air_balloon1.glb";

const HeartModel = () => {
  const heartRef = useRef();
  const [positionY, setPositionY] = useState(-36); // Initial Y-position set to 5

  // Load the heart model
  const { scene } = useGLTF(Heart);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY((prevPosition) => prevPosition + 0.002); // Adjust the increment for desired speed
    }, 10); // Interval time in milliseconds (adjust for desired smoothness)

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={heartRef} position={[6,  positionY, -15]} scale={[0.15, 0.15, 0.15]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default HeartModel;
