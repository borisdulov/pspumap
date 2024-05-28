import React, { useRef } from 'react'
import { Plane, Billboard, Text } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PanoIcon(position, switchPano, key) {
  const texture = useTexture('/pin.png');

  return (
    <>
      <Billboard position={position} key={key}>
        <Plane
        args={[5, 5]}
        rotation={[0, 0, 0]}
        onClick={() => switchPano()}>
          <meshBasicMaterial
            map={texture}
            transparent={true}/>
        </Plane>
      </Billboard>
    </>
  )
}