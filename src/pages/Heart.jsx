import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Heart from "../models/pumpingHeart";
import Sky from "../models/sky2";
import Heartinfo  from "../components/Heartinfo";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className='w-full h-screen relative'>
      {/* Display Heartinfo component always */}
      <div className='absolute top-20 left-0 right-45 z-10 flex items-left justify-center'>
                    
  <Heartinfo />
</div>

      {/* 3D Scene */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 0, 5], near: 0.1, far: 20000 }}
        onCreated={({ gl, camera }) => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 0.35;
          controls.enableZoom = true;
          controls.enablePan = true;
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={4} />
          <pointLight position={[5, -2, 3]} intensity={5} />
          <spotLight
            position={[5, -2, 5]}
            angle={Math.PI/2}
            penumbra={1}
            intensity={3}
          />
          
          <Sky isRotating={isRotating} />
          <Heart />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
