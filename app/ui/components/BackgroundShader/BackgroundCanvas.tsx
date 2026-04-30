'use client'
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame, ThreeElement } from '@react-three/fiber';
import { ShaderMaterial } from 'three';
import { type FC } from 'react';
import { useRef } from 'react';
 
import vertexShader from './vertex.vert';
import fragmentShader from './fragment.frag';
 
type Uniforms = {
  uTime: number
}
 
const DEFAULT_UNIFORMS: Uniforms = {
  uTime: 0
}
 
const MyShaderMaterial = shaderMaterial(
  DEFAULT_UNIFORMS,
  vertexShader,
  fragmentShader
);
 
extend({ MyShaderMaterial });
 
declare module '@react-three/fiber' {
  interface ThreeElements {
    myShaderMaterial: ThreeElement<typeof MyShaderMaterial>
  }
}
 

const MyShaderComponent: FC = () => {
  const shaderMaterial = useRef<ShaderMaterial & Uniforms>(null)
 
  useFrame(({ clock }) => {
    if (!shaderMaterial.current) return
    shaderMaterial.current.uTime = clock.elapsedTime
  })
 
  return (
    <mesh>
      <planeGeometry args={[1, 1, 1, 1]} />
      <myShaderMaterial
        attach="material" // Not needed but added for reference
        ref={shaderMaterial}
        key={MyShaderMaterial.key}
        uTime={0}
      />
    </mesh>
  )
}

export default MyShaderComponent;