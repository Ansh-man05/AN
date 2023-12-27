import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/butterfly.glb";

const Bird = () => {
  const birdRef = useRef();
  const destination = { x: 5, y: 2, z: -3 };
  const motion = useRef({ x: 0, y: 0, z: 0 });
  const rotationSpeed = useRef(0);

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["metarig|2"].play();
  }, []);

  const getNewMotion = (elapsedTime) => {
    return {
      x: Math.sin(elapsedTime * 0.8) * 2,
      y: Math.cos(elapsedTime * 1.2) * 1.5 + 2,
      z: Math.sin(elapsedTime * 1.5) * 2,
    };
  };

  const randomizeRotation = () => {
    const randomAngle = Math.random() * Math.PI * 2;
    rotationSpeed.current = randomAngle - birdRef.current.rotation.y;
  };

  useFrame(({ clock }) => {
    if (birdRef.current) {
      const elapsed = clock.elapsedTime;

      // Apply smooth movement to the bird's position
      const newMotion = getNewMotion(elapsed);
      motion.current.x += (newMotion.x - motion.current.x) * 0.05;
      motion.current.y += (newMotion.y - motion.current.y) * 0.05;
      motion.current.z += (newMotion.z - motion.current.z) * 0.05;

      // Apply the smoothed movement to the bird's position
      birdRef.current.position.x = motion.current.x;
      birdRef.current.position.y = motion.current.y;
      birdRef.current.position.z = motion.current.z;

      // Rotate the bird smoothly based on its direction
      birdRef.current.rotation.y += rotationSpeed.current * 0.0001;

      // Randomly adjust the rotation every 3 seconds (adjust timing as needed)
      if (elapsed % 6 < 0.01) {
        randomizeRotation();
      }
    }
  });

  return (
    <mesh ref={birdRef} position={[0, 0, 0]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
