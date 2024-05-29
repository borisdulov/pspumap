import React, { useRef } from 'react'
import { Plane, Billboard, Text, Text3D } from '@react-three/drei'

export function TextIcon(position, rotation, text, key) {
  return (
      <Text
        fontSize={2}
        color={'white'}
        position={position}
        fontWeight={800}
        outlineColor={'black'}
        outlineWidth={0.5}
        key={key}
        rotation={rotation}>
        {text}
      </Text>
  )
}

