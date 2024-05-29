import React from 'react'
import { Plane, Billboard} from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function ImageIcon(position, imagePath, key) {
  const texture = useTexture(imagePath);

  return (
      <Billboard position={position} key={key}>
        <Plane
        args={[3, 3]}>
          <meshBasicMaterial
            map={texture}
            transparent={true}/>
        </Plane>
      </Billboard>
  )
}