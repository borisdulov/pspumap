import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

import MyOrbitControls from './components/MyOrbitControls'
import Experience from './components/Experience'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <div className='App'>
      
      <Canvas className='Canvas'>
        <MyOrbitControls />
        <PerspectiveCamera makeDefault position={[-100, 100, -100]} fov={50} />

        <fog attach='fog' args={['#ffffff', 300, 600]} />

        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>

      <TopBar />
      
    </div>
  )
}