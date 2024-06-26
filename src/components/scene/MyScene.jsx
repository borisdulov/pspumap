import { Canvas } from '@react-three/fiber'
import MyOrbitControls from './MyOrbitControls'
import { Suspense } from 'react'
import { BackgroundModel } from './models/BackgroundModel'
import { MainBuilding } from './models/MainBuilding'
import Sections from './Sections'
import { Icons } from './icons/Icons'
import { Text } from "@react-three/drei";

export default function MyScene({ currentFloor, openPano }) {
  return (
    <div className="scene">
      <Canvas className='main-canvas' orthographic camera={{ zoom: 50, position: [-1, 2, -1] }}>
        <MyOrbitControls />
        <fog attach='fog' args={['#ffffff', 50, 100]} />
        <ambientLight intensity={2}/>
        <directionalLight intensity={10} position={[-100, 200, 100]} />
        <Suspense>
          <group scale={0.1} position={[0, 2, 3]}>
            <BackgroundModel />
            <MainBuilding currentFloor={currentFloor} />
            <Icons currentFloor={currentFloor} openPano={openPano}/>
            <Sections currentFloor={currentFloor}/>
            <Text
              color={"grey"}
              position={[0, 20, 183]}
              scale={5}
              rotation={[Math.PI, Math.PI, Math.PI]}>
              Created by Dulov Boris
            </Text>
            <Text
              color={"grey"}
              position={[0, 10, 184]}
              scale={3}
              rotation={[Math.PI, Math.PI, Math.PI]}>
              With help of Kanov Roman, Rangulov Niyaz, Maskov Ilya, Ejov Maksim
            </Text>
            <Text
              color={"grey"}
              position={[49, 7, 9]}
              scale={3}
              rotation={[Math.PI/2, Math.PI, 0]}>
              Click on red pin📍icons to open panoramas
            </Text>
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
