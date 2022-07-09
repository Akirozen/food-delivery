import { View, Text, Image, TouchableOpacity } from 'react-native'

interface Props {
  id: string
  imgUrl: string
  title: string
}

const CategoryCard = ({ id, imgUrl, title }: Props) => {
  return (
    <TouchableOpacity
      // @ts-ignore
      className='relative mr-2'
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-20 w-20'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
