import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Flor(props) {
  const { nodes, materials } = useGLTF('./flor.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.07, 0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Pistil} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['OUTLINE_-_PURPLE']} />
      </group>
      <group position={[-0.15, 0.17, 0.03]} rotation={[0, 0, Math.PI]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.Pedal2} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['OUTLINE_-_PURPLE']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['OUTLINE_-_WHITE']} />
      </group>
      <group position={[0.07, 0.2, -0.2]} rotation={[-2.13, -0.71, -2.68]} scale={0.58}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.Pedal2} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['OUTLINE_-_PURPLE']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['OUTLINE_-_WHITE']} />
      </group>
      <group position={[-0.01, 0.18, 0.09]} rotation={[0.17, 0.8, 2.88]} scale={0.36}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Pedal} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['OUTLINE_-_PURPLE']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['OUTLINE_-_WHITE']} />
      </group>
      <group position={[0.03, 0.2, -0.02]} scale={0.62}>
        <mesh geometry={nodes.Object_19.geometry} material={materials.Pedal} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['OUTLINE_-_PURPLE']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['OUTLINE_-_WHITE']} />
      </group>
      <group rotation={[-Math.PI, -0.63, -Math.PI]} scale={0.86}>
        <mesh geometry={nodes.Object_23.geometry} material={materials.Leaf} />
        <mesh geometry={nodes.Object_24.geometry} material={materials['OUTLINE_-_WHITE']} />
        <mesh geometry={nodes.Object_25.geometry} material={materials['OUTLINE_-_BLACK']} />
      </group>
      <group position={[0, 0.07, 0.02]}>
        <mesh geometry={nodes.Object_27.geometry} material={materials.Pedal} />
        <mesh geometry={nodes.Object_28.geometry} material={materials['OUTLINE_-_BLACK']} />
        <mesh geometry={nodes.Object_29.geometry} material={materials['OUTLINE_-_WHITE']} />
        <mesh geometry={nodes.Object_30.geometry} material={materials['OUTLINE_-_PURPLE']} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Pedal2} />
      </group>
    </group>
  )
}

useGLTF.preload('/flor.gltf')
