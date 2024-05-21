import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function BackgroundModel() {
  const { nodes } = useGLTF('/pspu.glb')

  useEffect(() => {
    document.body.style.backgroundImage = 'none';
  })

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.background_buildings.geometry}
        material={new MeshStandardMaterial()}
        position={nodes.background_buildings.position}
        rotation={nodes.background_buildings.rotation} />
      <mesh
        geometry={nodes.background_roads.geometry}
        material={new MeshStandardMaterial({color: 'grey'})}
        position={nodes.background_roads.position}
        rotation={nodes.background_roads.rotation} />
    </group>
  )
}

useGLTF.preload('/pspu.glb')
