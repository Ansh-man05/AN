import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Heart from "../assets/3d/pumping_heart_model.glb";

const HeartModel = () => {
  const heartRef = useRef();

  // Load the heart model
  const { scene, animations } = useGLTF(Heart);

  // Get access to the animations for the heart
  const { actions } = useAnimations(animations, heartRef);

  // Play the "Take 001" animation when the component mounts
  React.useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return (
    <mesh ref={heartRef} position={[5, -2, 0]} scale={[0.03, 0.03, 0.03]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default HeartModel;
