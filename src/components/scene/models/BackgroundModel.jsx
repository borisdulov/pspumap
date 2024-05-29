import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial, MeshStandardMaterial } from 'three'

export function BackgroundModel() {
  const { nodes } = useGLTF('/background.glb')

  useEffect(() => {
    document.body.style.backgroundImage = 'none';
  })

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.buildings.geometry}
        material={new MeshStandardMaterial()}/>
      <mesh
        geometry={nodes.roads.geometry}
        material={new MeshStandardMaterial({color: 'grey'})}/>
    </group>
  )
}

useGLTF.preload('/pspu.glb')
