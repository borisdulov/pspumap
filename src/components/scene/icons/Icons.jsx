import { useGLTF } from '@react-three/drei'
import { TextIcon } from './TextIcon'
import { PanoIcon } from './PanoIcon'
import { ImageIcon } from './ImageIcon'

export function TextIcons({ currentFloor, openPano }) {
  const { nodes } = useGLTF('/pspu.glb')

  const firstFloorIcons = []
  const secondFloorIcons = []
  const thirdFloorIcons = []
  const fourthFloorIcons = []
  const undergroundIcons = []
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
    // первый этаж, туалет
    } else if (node.name.startsWith('gw')) {
      firstFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/water.png",
          index))
    // второй этаж, иконка с текстом
    } else if (node.name.startsWith('st')) {
      secondFloorIcons.push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name.split('_')[1],
          index))
    // второй этаж, иконка панорамы
    } else if (node.name.startsWith('sp')) {
      const panoName = node.name.split('_')[1];
      secondFloorIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    // второй этаж, лестница
    } else if (node.name.startsWith('ss')) {
      secondFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/stairs.png",
          index))
    // второй этаж, буффет
    } else if (node.name.startsWith('sb')) {
      secondFloorIcons.push(
          ImageIcon(
            [node.position.x, node.position.y, node.position.z],
            "/buffet.png",
            index))
    // второй этаж, туалет
    } else if (node.name.startsWith('sw')) {
      secondFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/water.png",
          index))
    // третй этаж, иконка с текстом
    } else if (node.name.startsWith('tt')) {
      thirdFloorIcons.push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name.split('_')[1],
          index))
    // третий этаж, иконка панорамы
    } else if (node.name.startsWith('tp')) {
      const panoName = node.name.split('_')[1];
      thirdFloorIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    // третий этаж, лестница
    } else if (node.name.startsWith('ts')) {
      thirdFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/stairs.png",
          index))
    // третий этаж, буффет
    } else if (node.name.startsWith('tb')) {
      thirdFloorIcons.push(
          ImageIcon(
            [node.position.x, node.position.y, node.position.z],
            "/buffet.png",
            index))
    // третий этаж, туалет
    } else if (node.name.startsWith('tw')) {
      thirdFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/water.png",
          index))
    // четвертый этаж, иконка с текстом
    } else if (node.name.startsWith('ft')) {
      fourthFloorIcons.push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name.split('_')[1],
          index))
    // четвертый этаж, иконка панорамы
    } else if (node.name.startsWith('fp')) {
      const panoName = node.name.split('_')[1];
      fourthFloorIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    // четвертый этаж, лестница
    } else if (node.name.startsWith('fs')) {
      fourthFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/stairs.png",
          index))
    // четвертый этаж, буффет
    } else if (node.name.startsWith('fb')) {
      fourthFloorIcons.push(
          ImageIcon(
            [node.position.x, node.position.y, node.position.z],
            "/buffet.png",
            index))
    // четвертый этаж, туалет
    } else if (node.name.startsWith('fw')) {
      fourthFloorIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/water.png",
          index))
    // подвал, иконка с текстом
    } else if (node.name.startsWith('ut')) {
      undergroundIcons.push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name.split('_')[1],
          index))
    // подвал, иконка панорамы
    } else if (node.name.startsWith('up')) {
      const panoName = node.name.split('_')[1];
      undergroundIcons.push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index))
    // подвал, лестница
    } else if (node.name.startsWith('us')) {
      undergroundIcons.push(
        ImageIcon(
          [node.position.x, node.position.y, node.position.z],
          "/stairs.png",
          index))
    // подвал, буффет
    } else if (node.name.startsWith('ub')) {
      undergroundIcons.push(
          ImageIcon(
            [node.position.x, node.position.y, node.position.z],
            "/buffet.png",
            index))
    // подвал, туалет
    } else if (node.name.startsWith('uw')) {
      undergroundIcons.push(
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