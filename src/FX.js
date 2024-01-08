import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

export default function FX() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} height={400} />
      <ChromaticAberration offset={[0.001, 0.001]} />
    </EffectComposer>
  );
}
