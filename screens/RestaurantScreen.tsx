import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { ParamList } from '../models/types'
import { useLayoutEffect } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<ParamList, 'RestaurantParams'>>()
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = route

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{
            uri: imgUrl,
          }}
          className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          //@ts-ignore
          className='absolute top-2 left-5 p-2 bg-gray-100'
        >
          <ArrowLeftIcon size={20} color='#0cb' />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen
