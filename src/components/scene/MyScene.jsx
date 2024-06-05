import { Canvas } from '@react-three/fiber'
import MyOrbitControls from './MyOrbitControls'
import { Suspense } from 'react'
import { BackgroundModel } from './models/BackgroundModel'
import { MainBuilding } from './models/MainBuilding'
import Sections from './Sections'
import { Icons } from './icons/Icons'

export default function MyScene({ currentFloor, openPano }) {
  return (
    <div className="scene">
      <Canvas className='main-canvas' orthographic camera={{ zoom: 50, position: [-1, 2, -1] }}>
        <MyOrbitControls />
        <fog attach='fog' args={['#ffffff', 50, 100]} />
        <ambientLight intensity={2}/>
        <directionalLight intensity={10} position={[-100, 200, 100]} />
        <Suspense>
          <group scale={0.1} position={[0, 2, 0]}>
            <BackgroundModel />
            <MainBuilding currentFloor={currentFloor} />
            <Icons currentFloor={currentFloor} openPano={openPano}/>
            <Sections currentFloor={currentFloor}/>
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}