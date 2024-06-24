import { Text } from '@react-three/drei'

export function TextIcon(position, rotation, text, key) {
  return (
      <Text
        fontSize={2}
        color={'white'}
        position={position}
        fontWeight={900}
        outlineColor={'black'}
        outlineWidth={0.5}
        key={key}
        rotation={rotation}>
        {text.replace(/_/g, '  ').slice(3)}
      </Text>
  )
}

