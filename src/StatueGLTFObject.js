import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

function Marker(props) {
  const { children, position } = props;
  return (
    <Html style={{ color: "white" }} position={position}>
      {children}
    </Html>
  );
}

export default function StatueGLTFObject(props) {
  const { position, modelUrl, scale, rotation } = props;
  const modelRef = useRef();
  const gltf = useGLTF(modelUrl);

  return (
    <primitive
      ref={modelRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      object={gltf.scene}
      scale={scale ? scale : [1, 1, 1]}
    ></primitive>
  );
  //   dive into the lowest level => that's why in the parent level, we use modelUrl = {}
}

// why using ref?
