import { View, Text } from 'react-native'
import React from 'react'

const DishRow = ({ dish }: any) => {
  return (
    <View>
      <Text className='my-2 font-bold'>{dish.title}</Text>
    </View>
  )
}

export default DishRow
