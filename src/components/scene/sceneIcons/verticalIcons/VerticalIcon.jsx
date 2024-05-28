import React, { useRef } from 'react'
import { Plane, Billboard, Text, Text3D } from '@react-three/drei'

export function VerticalIcon(position, text, key) {
  return (
      <Text
      fontSize={2}
      color={'white'}
      position={position}
      fontWeight={800}
      outlineColor={'black'}
      outlineWidth={0.5}
      key={key}
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        {text}
      </Text>
  )
}

