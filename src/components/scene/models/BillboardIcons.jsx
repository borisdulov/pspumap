import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Plane, Billboard, Text } from '@react-three/drei'

function VerticalIcon(position, text, key) {
  return (
    <Billboard position={position} key={key}>
      <Text fontSize={2} color="white" position={[0, 6, 0]} fontWeight={700} outlineColor={'grey'} outlineWidth={0.3} >{text[0]}</Text>
      <Text fontSize={2} color="white" position={[0, 4, 0]} fontWeight={700} outlineColor={'grey'} outlineWidth={0.3} >{text[1]}</Text>
      <Text fontSize={2} color="white" position={[0, 2, 0]} fontWeight={700} outlineColor={'grey'} outlineWidth={0.3} >{text[2]}</Text>
      <Text fontSize={2} color="white" position={[0, 0, 0]} fontWeight={700} outlineColor={'grey'} outlineWidth={0.3} >{text[3]}</Text>
    </Billboard>  
  )
}

export function BillboardIcons({ floorToDraw }) {
  const { nodes } = useGLTF('/pspu.glb')

  const firstFloorIcons = []
  // Object.values(nodes).forEach((node) => {
  //   if (node.name.startsWith('first_vertical')) {
  //     console.log(node.name, node.position, node.scale);
  //     firstFloorIcons.push(VerticalIcon(node.position, 'test'))
  // }});
  Object.values(nodes).map((node, index) => {
    if (node.name.startsWith('first_vertical')) {
      firstFloorIcons.push(
        VerticalIcon(
          [node.position.x, node.position.y + 5, node.position.z], 
          node.name.split('_')[2], 
          index))
    }
  })

  return (
    <group dispose={null}>
      {
        floorToDraw === 1 
          ? firstFloorIcons
          : null
      }  
    </group>
  )
}

useGLTF.preload('/pspu.glb')