import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Background() {
  const glb = useLoader(GLTFLoader, '/background.glb');
  
  return <primitive object={glb.scene}/>
}