import { VerticalIcon } from "../verticalIcons/VerticalIcon";
import { PanoIcon } from "./PanoIcon";
import { useGLTF } from '@react-three/drei'

const PanoIcons = ({ currentFloor, openPano }) => {
  const { nodes } = useGLTF('/pspu.glb')

  const firstFloorIcons = []
  Object.values(nodes).map((node, index) => {
    if (node.name.startsWith('fp')) {
      const panoName = node.name.split('_')[1];
      firstFloorIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    }
  })

  return (
    <group dispose={null}>
      {
        currentFloor === 1
          ? firstFloorIcons
          : null
      }
    </group>
  )
}

export default PanoIcons;