import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

import MyOrbitControls from './components/MyOrbitControls'
import Experience from './components/Experience'

export default function App() {
  return (
    <div className='App'>
      <Canvas>
        <MyOrbitControls />
        <PerspectiveCamera makeDefault position={[-100, 100, -100]} fov={50} />

        <ambientLight intensity={2}/>
        <directionalLight intensity={3} position={[0, 100, 100]} />

        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  )
}