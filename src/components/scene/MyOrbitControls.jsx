import { OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useRef } from 'react'
import { MathUtils } from 'three'

export default function MyOrbitControls() {
  const { camera } = useThree();
  const orbitControlsRef = useRef()

  useFrame(() => {
    const distanceToOrigin = orbitControlsRef.current.target.distanceTo(new Vector3(0, -2, 0))
    if (distanceToOrigin > 100) {
      const newPanSpeed = 2000 / distanceToOrigin ** 2
      orbitControlsRef.current.panSpeed = newPanSpeed
    } else {
      orbitControlsRef.current.panSpeed = 1
    }

    orbitControlsRef.current.target.y = MathUtils.clamp(orbitControlsRef.current.target.y, 2, Infinity)
  })

  return (
    <OrbitControls
      ref={orbitControlsRef}
      minPolarAngle={0}
      maxPolarAngle={Math.PI - Math.PI / 1.5}
      minDistance={50}
      maxDistance={200}
      enablePan={true}
      panSpeed={1}
    />
  )
}