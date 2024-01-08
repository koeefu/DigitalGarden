import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";

export const CameraTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
});

export default function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    // Here we define the entire sequence of animations for the camera using GSAP
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -0.6,
        y: 3.1,
        z: 4.1,
      },
      "head"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        y: -0.8,
      },
      "head"
    );

    return () => CameraTimeline.kill();
  }, []);
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[1.5, 3, 10]}
      rotation={[0, 0, 0]}
    />
  );
}
