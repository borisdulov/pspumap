import { useGLTF } from '@react-three/drei'
import { TextIcon } from './TextIcon'
import { PanoIcon } from './PanoIcon'
import { ImageIcon } from './ImageIcon'

export function TextIcons({ currentFloor, openPano }) {
  const { nodes } = useGLTF('/pspu.glb')

  const firstFloorIcons = []
  Object.values(nodes).map((node, index) => {
    // первый этаж, иконка с текстом
    if (node.name.startsWith('gt')) {
      firstFloorIcons.push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name.split('_')[1],
          index))
    // первый этаж, иконка панорамы
    } else if (node.name.startsWith('gp')) {
      const panoName = node.name.split('_')[1];
      firstFloorIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    // раздевалка
    } else if (node.name.startsWith('gh')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/hanger.png",
          index))
    // первый этаж, лестница
    } else if (node.name.startsWith('gs')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/stairs.png",
          index))
    // первый этаж, буффет
    } else if (node.name.startsWith('gb')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/buffet.png",
          index))
    // первый этаж, медпункт
    } else if (node.name.startsWith('gm')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/medic.png",
          index))
    // первый этаж, медпункт
    } else if (node.name.startsWith('gw')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/water.png",
          index))
  }})

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

useGLTF.preload('/pspu.glb')