import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useRef } from 'react'
import { MathUtils } from 'three'

export default function MyOrbitControls() {
  const orbitControlsRef = useRef()

  useFrame(() => {
    const distanceToOrigin = orbitControlsRef.current.target.distanceTo(new Vector3(0, -2, 0))

    const newPanSpeed = 20 / distanceToOrigin ** 2
    orbitControlsRef.current.panSpeed = newPanSpeed

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
      minZoom={30}
      maxZoom={500}
    />
  )
}