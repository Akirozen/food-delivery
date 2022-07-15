import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IRestaurant, RootStackParamList } from '../models/types'

const RestaurantCard = ({
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
}: IRestaurant) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', {
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
      }}
      //@ts-ignore
      className='bg-white mr-3 shadow'
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1 pt-2'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> · {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1 pt-2'>
          <LocationMarkerIcon color='grey' size={22} opacity={0.4} />
          <Text className='text-green-500'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
