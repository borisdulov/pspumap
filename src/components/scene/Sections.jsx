import { Text } from "@react-three/drei";
import { FrontSide } from "three";
import { MeshBasicMaterial } from 'three'

const Sections = ({ currentFloor }) => {
  if (currentFloor === 0) {
    return (
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[0, -5, -40]}
        scale={7}
        rotation={[0, Math.PI, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Underground
      </Text>
    )
  }
  return (
    <group dispose={null}>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[-9.5, -4, 0]}
        scale={7}
        rotation={[0, -Math.PI / 2, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section B
      </Text>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[7, -4, 0]}
        scale={7}
        rotation={[0, Math.PI / 2, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section B
      </Text>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[35, -3, -40]}
        scale={7}
        rotation={[0, Math.PI, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section A
      </Text>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[-35, -3, -40]}
        scale={7}
        rotation={[0, Math.PI, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section A
      </Text>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[35, -3, -25]}
        scale={7}
        rotation={[0, 0, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section A
      </Text>
      <Text
        size={10}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[-35, -3, -25]}
        scale={7}
        rotation={[0, 0, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section A
      </Text>
      <Text
        size={20}
        outlineColor={'gray'}
        outlineWidth={0.1}
        position={[-25, -4, 28]}
        scale={7}
        rotation={[0, Math.PI, 0]}
        material={new MeshBasicMaterial({
          side: FrontSide
        })}>
        Section V
      </Text>
    </group>
  );
}

export default Sections;