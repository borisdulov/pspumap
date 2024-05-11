import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshToonMaterial } from 'three'
import { color } from 'three/examples/jsm/nodes/Nodes.js'

export function BackgroundModel(props) {
  const { nodes, materials } = useGLTF('/background.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Walls_Applyed.geometry} material={new MeshNormalMaterial()} position={[16.031, 0, 29.193]} rotation={[Math.PI, -0.481, Math.PI]} scale={27.452} />
      <mesh geometry={nodes.maposm_buildings.geometry} material={materials['white']} position={[29.111, 0, 19.905]} />
      <mesh geometry={nodes.maposm_roads_service.geometry} material={materials['grey']} position={[29.111, 0.3, 19.905]} />
      {/* <mesh geometry={nodes.Walls_Scheme.geometry} material={materials['AO.004']} position={[16.031, -13.198, 29.193]} rotation={[Math.PI, -0.481, Math.PI]} scale={27.452} /> */}
    </group>
  )
}

useGLTF.preload('/background.glb')
