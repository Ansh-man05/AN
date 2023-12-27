import React, { useRef, useEffect } from 'react';
import * as dat from 'dat.gui';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import './datguiStyles.css'; 

// Import paths to your 3D assets
import skyScene1Path from '../assets/3d/free_-_skybox_space_nebula.glb';
import skyScene2Path from '../assets/3d/free_-_skybox_anime_sky.glb';
import skyScene3Path from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
  const skyScene1 = useGLTF(skyScene1Path);
  const skyScene2 = useGLTF(skyScene2Path);
  const skyScene3 = useGLTF(skyScene3Path);

  const skyRef = useRef();
  const guiRef = useRef(null);

  useEffect(() => {
    const gui = new dat.GUI();
    const guiControls = {
      Background: 'Background 1',
    };

    const backgroundOptions = ['Background 1', 'Background 2', 'Background 3'];
    const backgroundControl = gui.add(guiControls, 'Background', backgroundOptions);

    const changeBackground = () => {
      switch (guiControls.Background) {
        case 'Background 1':
          skyRef.current.children[0].visible = true;
          skyRef.current.children[1].visible = false;
          skyRef.current.children[2].visible = false;
          break;
        case 'Background 2':
          skyRef.current.children[0].visible = false;
          skyRef.current.children[1].visible = true;
          skyRef.current.children[2].visible = false;
          break;
        case 'Background 3':
          skyRef.current.children[0].visible = false;
          skyRef.current.children[1].visible = false;
          skyRef.current.children[2].visible = true;
          break;
        default:
          break;
      }
    };

    backgroundControl.onChange(() => {
      changeBackground();
    });

    guiRef.current = gui;

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, []);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <group ref={skyRef} scale={[0.1, 0.1, 0.1]}>
      <primitive object={skyScene1.scene} visible={true} />
      <primitive object={skyScene2.scene} visible={false} />
      <primitive object={skyScene3.scene} visible={false} />
    </group>
  );
};

export default Sky;
