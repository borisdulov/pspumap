import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshNormalMaterial } from 'three'

export function MainBuilding({ currentFloor }) {
  const { nodes } = useGLTF('/pspu.glb');

  return (
    <group dispose={null}>
      {
        currentFloor === 1
          ? <>
              <mesh
                geometry={nodes.first_walls.geometry}
                material={new MeshNormalMaterial()}
                position={nodes.first_walls.position}
                rotation={nodes.first_walls.rotation}
                scale={nodes.first_walls.scale} />
              <mesh
                geometry={nodes.first_walls_A.geometry}
                material={new MeshNormalMaterial()}
                position={nodes.first_walls_A.position}
                rotation={nodes.first_walls_A.rotation}
                scale={nodes.first_walls_A.scale} />
            </>
          : null
      }
    </group>
  )
}

useGLTF.preload('/pspu.glb')
