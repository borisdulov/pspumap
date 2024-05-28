import { useGLTF } from '@react-three/drei'
import { VerticalIcon } from './VerticalIcon'
import PanoIcons from '../panoIcons/PanoIcons'
import { Text } from '@react-three/drei'

export function VerticalIcons({ currentFloor }) {
  const { nodes } = useGLTF('/pspu.glb')

  const firstFloorIcons = []
  // Перебираем все объекты в модели
  Object.values(nodes).map((node, index) => {
    // Если название объекта начинается с f_v
    if (node.name.startsWith('first_vertical')) {
      // Добавляем иконку с его координатами в массив
      firstFloorIcons.push(
        VerticalIcon(
          [node.position.x, node.position.y + 2.5, node.position.z],
          node.name.split('_')[2],
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

useGLTF.preload('/pspu.glb')