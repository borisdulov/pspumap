import React from 'react'
import { Plane, Billboard } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PanoIcon(position, switchPano, key) {
  const texture = useTexture('/pin.png');

  return (
    <Billboard position={position} key={key}>
      <Plane
      args={[7, 7]}
      onClick={() => switchPano()}>
        <meshBasicMaterial
          map={texture}
          transparent={true}
          depthTest={false}/>
      </Plane>
    </Billboard>
  )
}