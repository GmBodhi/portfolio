import { Canvas, useFrame } from "@react-three/fiber";
import { Color, Group, Mesh, OrthographicCamera } from "three";
import { useEffect, useRef } from "react";
import "./back.css";
import { PresentationControls } from "@react-three/drei";

export default function Background() {
  return (
    <div className="canvas">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

function name() {}

function Scene() {
  const controlElement = useRef<Group>(null!);
  useEffect(() => {});
  useFrame(({ clock }) => {
    // meshRef.current!.rotation.y = clock.getElapsedTime();
  });

  return (
    <>
      <group ref={controlElement}>
        {/* <ambientLight intensity={0.01} /> */}
        <directionalLight position={[0, 0, 5]} />
        {/* <mesh rotation={[0.7, 1, 0]} position={[0, -2, 0]} ref={}>
          <boxGeometry args={[1, 5, 1]} />
          <meshStandardMaterial />
        </mesh> */}
        <Box pos={[1, -5, -5]} size={[3, 15, 3]} />
        <Box pos={[1, 0, -1]} size={[1, 5, 1]} />
        <Box pos={[-2, 0, -2]} size={[1, 5, 1]} />
      </group>
    </>
  );
}

function Box({
  color,
  pos,
  size,
}: {
  color?: Color;
  pos: [number, number, number];
  size: [number, number, number];
}) {
  const meshRef = useRef<Mesh>(null!);
  const delta = Math.random();
  useFrame(
    ({ clock }) =>
      (meshRef.current!.position.y =
        Math.sin(clock.getElapsedTime()) * 0.1 - (delta * 15 + 2))
  );
  return (
    <>
      <mesh rotation={[0.7, 1, 0]} position={pos} ref={meshRef}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
