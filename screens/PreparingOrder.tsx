import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

const PreparingOrder = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#0cb] justify-center items-center'>
      <Animatable.Text
        animation='zoomInUp'
        className='text-white font-extrabold text-2xl'
      >
        Order Placed
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrder
