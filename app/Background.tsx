'use client'
import { Canvas } from "@react-three/fiber";
import MyShaderComponent from "./ui/components/BackgroundShader/BackgroundCanvas";

export default function Background() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <MyShaderComponent />
    </Canvas>
  );
}