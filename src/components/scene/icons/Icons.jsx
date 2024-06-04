import { useGLTF } from '@react-three/drei'
import { TextIcon } from './TextIcon'
import { PanoIcon } from './PanoIcon'
import { ImageIcon } from './ImageIcon'

export function Icons({ currentFloor, openPano }) {
  const { nodes } = useGLTF('/pspu.glb')

  const floorIcons = {
    firstFloor: [],
    secondFloor: [],
    thirdFloor: [],
    fourthFloor: [],
    underground: [],
  };

  Object.values(nodes).forEach((node, index) => {
    const floor = getFloorFromNodeName(node.name);

    if (node.name[1] === 't') {
      floorIcons[floor].push(
        TextIcon(
          [node.position.x, node.position.y, node.position.z],
          [node.rotation.x, node.rotation.y, node.rotation.z],
          node.name,
          index
        )
      );
    } else if (node.name[1] === 'p') {
      const panoName = node.name.split('_')[1];
      floorIcons[floor].push(
        PanoIcon(
          [node.position.x, node.position.y + 5, node.position.z],
          () => openPano(panoName),
          index
        )
      );
    } else {
      console.log(node.name)
      try {
        floorIcons[floor].push(
          ImageIcon(
            [node.position.x, node.position.y, node.position.z],
            '/' + node.name[1] + '.png',
            index
          )
        );
      } catch (error) {
        return;
      }
    }
  });

  function getFloorFromNodeName(name) {
    switch (true) {
      case name.startsWith('g'):
        return 'firstFloor';
      case name.startsWith('s'):
        return 'secondFloor';
      case name.startsWith('t'):
        return 'thirdFloor';
      case name.startsWith('f'):
        return 'fourthFloor';
      case name.startsWith('u'):
        return 'underground';
      default:
        return 'underground';
    }
  }

  return (
    <group dispose={null}>
      {currentFloor === 1 ? floorIcons.firstFloor : null}
      {currentFloor === 2 ? floorIcons.secondFloor : null}
      {currentFloor === 3 ? floorIcons.thirdFloor : null}
      {currentFloor === 4 ? floorIcons.fourthFloor : null}
      {currentFloor === 0 ? floorIcons.underground : null}
    </group>
  )
}

useGLTF.preload('/pspu.glb')