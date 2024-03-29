import { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { IDishes, ParamList } from '../models/types'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import {
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import { setRestaurant } from '../redux/slices/restaurantSlice'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    )
  }, [dispatch])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <>
      <BasketIcon />
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
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500-500'>
                  <Text className='text-green-500'>{rating}</Text> · {genre}
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500-500'>
                  <Text className='text-gray-500'>Nearby · {address}</Text>
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2'>{short_description}</Text>
          </View>
          <TouchableOpacity
            //@ts-ignore
            className='flex-row items-center space-x-2 p-4 border-y border-gray-300'
          >
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#0cb' />
          </TouchableOpacity>
        </View>

        <View className='pb-36'>
          <Text className='px-4 pt-6 mb-3 font-bold'>Menu</Text>
          {/* Dishes  */}
          {dishes.map((dish: IDishes) => (
            <DishRow key={dish.id} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
