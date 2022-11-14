import Background from "./back";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div className="canvas">
        <Canvas camera={{ position: [0, 0, 200] }}>
          <Background />
        </Canvas>
      </div>
    </>
  );
}
