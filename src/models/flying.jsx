import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Heart from "../assets/3d/love_heart_tree_for_valentines_day.glb";

const HeartModel = () => {
  const heartRef = useRef();

  // Load the heart model
  const { scene, animations } = useGLTF(Heart);

  // Get access to the animations for the heart


  // Play the "Take 001" animation when the component mounts
  
  return (
    <mesh ref={heartRef} position={[0, -2, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default HeartModel;
