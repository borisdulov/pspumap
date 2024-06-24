import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshNormalMaterial, MeshStandardMaterial } from 'three'
import { color } from 'three/examples/jsm/nodes/Nodes.js';

export function MainBuilding({ currentFloor }) {
  const { nodes } = useGLTF('/pspu.glb');

  const underFloor = <>
    <mesh geometry={nodes.u_walls.geometry} material={new MeshNormalMaterial()}/>
    <mesh geometry={nodes.u_ground.geometry} material={new MeshStandardMaterial()}/></>

  const firstFloor = <>
    <mesh geometry={nodes.g_ground.geometry} material={new MeshStandardMaterial()}/>
    <mesh geometry={nodes.g_walls.geometry} material={new MeshNormalMaterial()}/>
{/*     <mesh geometry={nodes.g_back.geometry} material={new MeshStandardMaterial({color: 'black'})}/> */}
  </>

  const secondFloor = <>
    <mesh geometry={nodes.s_walls.geometry} material={new MeshNormalMaterial()}/>
    <mesh geometry={nodes.s_ground.geometry} material={new MeshStandardMaterial()}/>
{/*     <mesh geometry={nodes.s_back.geometry} material={new MeshStandardMaterial({color: 'black'})}/> */}
  </>

  const thirdFloor = <>
    <mesh geometry={nodes.t_walls.geometry} material={new MeshNormalMaterial()}/>
    <mesh geometry={nodes.t_ground.geometry} material={new MeshStandardMaterial()}/>
{/*     <mesh geometry={nodes.t_back.geometry} material={new MeshStandardMaterial({color: 'black'})}/> */}
  </>

  const fourthFloor = <>
    <mesh geometry={nodes.f_walls.geometry} material={new MeshNormalMaterial()}/>
    <mesh geometry={nodes.f_ground.geometry} material={new MeshStandardMaterial()}/></>

  return (
    <group dispose={null}>
      {currentFloor === 0 ? underFloor : null}
      {currentFloor === 1 ? firstFloor : null}
      {currentFloor === 2 ? secondFloor : null}
      {currentFloor === 3 ? thirdFloor : null}
      {currentFloor === 4 ? fourthFloor : null}
    </group>
  )
}

useGLTF.preload('/pspu.glb')
