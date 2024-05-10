import { OrbitControls } from '@react-three/drei'

export default function MyOrbitControls() {
    return (
        <OrbitControls
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 1.9}
            minDistance={50}
            maxDistance={200}
            enablePan={false}
        />
    )
}