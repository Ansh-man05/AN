import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader  from "../components/Loader";
import Homeinfo  from "../components/Homeinfo";
import Island  from "../models/island";
import Sky  from "../models/Sky";
import Butterfly from "../models/butterfly";
import Balloon from "../models/balloon"
import Balloon1 from "../models/balloon1"
import Balloon2 from "../models/balloon2"
import Balloon3 from "../models/balloon3"
import Balloon4 from "../models/balloon4"
import Balloon5 from "../models/balloon5"
import Balloon6 from "../models/balloon6"



import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

    const Home = () => {

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
  


  const adjustIslandForScreenSize = () => {
    let screenScale=null;
    let screenPosition=[0, -6.5, -43.4];
    let rotation=[0.1, 4.7077, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      
    } 
    return [screenScale, screenPosition, rotation];
  } 
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
 

  return (
    
    
      
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <Homeinfo currentStage={currentStage} />}
    </div>
    
    
      
        <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        
        camera={{ position: [0, 0, 5], near: 0.1, far: 20000 }}
        // Attach the OrbitControls to enable camera movement
        onCreated={({ gl, camera }) => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.enableDamping = true; // Enable smooth camera movement
          controls.dampingFactor = 0.35; // Adjust damping factor for smoothness
          controls.enableZoom = true; // Enable zooming with the mouse scroll
          controls.enablePan = true; // Enable panning
        }}
        >
        <Suspense fallback={<Loader />}>
       
          <ambientLight intensity={2} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={Math.PI/2}
            penumbra={1}
            intensity={3}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
        
        <Balloon1 /> 
        <Sky isRotating={isRotating} />
        <Island
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        position={islandPosition}
        rotation={[0.1, 4.7077, 0]}
        scale={islandScale}
          />
          <Butterfly />
        <Balloon /> 
        <Balloon2 /> 
        <Balloon3 /> 
        <Balloon4 />
        <Balloon5 /> 
        <Balloon6 /> 
        
        </Suspense>
        </Canvas>
          <div className='absolute top-1/2 right-5 z-20 text-white text-xs'>
    We both know I'm not the best at design.<br /> Feel free to choose as you wish!
  </div>
        

      </section>
  );
}

export default Home;
