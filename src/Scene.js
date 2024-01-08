import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Stars,
  OrbitControls,
  Sparkles,
  Backdrop,
} from "@react-three/drei";

import AnimatedCamera from "./AnimatedCamera";
import StatueGLTFObject from "./StatueGLTFObject";

import FX from "./FX";

export default function Scene() {
  return (
    <div className="canvas_wrapper">
      <Canvas>
        <FX />

        {/* camera */}
        <AnimatedCamera />
        {/* <OrbitControls autoRotate /> */}
        {/* <OrbitControls /> */}

        {/* light */}
        <ambientLight intensity={120} />
        <pointLight position={[1, 1, 1]} intensity={5} />
        <pointLight position={[0, 8, 0]} intensity={15} />

        {/* bg */}
        <Environment
          preset="lobby"
          resolution={256}
          background={false}
          blur={1}
        />

        <color attach="background" args={["rgb(250, 243, 254)"]} />
        {/* <color attach="background" args={["rgb(0,0,0)"]} /> */}

        {/* <Stars count={4000} /> */}
        {/* <Sparkles count={3000} scale={50} size={5} color={["rgb(0, 0, 0)"]} /> */}

        {/* <gridHelper /> */}

        <Suspense fallback={null}>
          <StatueGLTFObject
            // position={[3, -3, -1]}
            position={[0, -3, 0]}
            modelUrl={"flower.glb"}
            scale={[0.3, 0.3, 0.3]}
            rotation={[0, Math.PI / 4 + (2 * Math.PI) / 10, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
