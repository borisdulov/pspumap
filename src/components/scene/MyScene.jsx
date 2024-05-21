import { Canvas } from '@react-three/fiber'
import MyOrbitControls from './MyOrbitControls'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { BackgroundModel } from './models/BackgroundModel'
import { MainBuilding } from './models/MainBuilding'
import { BillboardIcons } from './models/BillboardIcons'

export default function MyScene({ floorToDraw }) {
  return (
    <div className="scene">
      <Canvas className='main-canvas'>
        <MyOrbitControls />
        <PerspectiveCamera makeDefault position={[-100, 100, -100]} fov={50} />
        <fog attach='fog' args={['#ffffff', 300, 600]} />
        <ambientLight intensity={1}/>
        <directionalLight intensity={10} position={[-100, 200, 100]} />
        <Suspense>
          <BackgroundModel />
          <MainBuilding floorToDraw={floorToDraw} />
          <BillboardIcons floorToDraw={floorToDraw} />
        </Suspense>
      </Canvas>
    </div>
  )
}