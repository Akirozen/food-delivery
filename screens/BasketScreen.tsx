import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../redux/slices/basketSlice'
import { selectRestaurant } from '../redux/slices/restaurantSlice'
import { PlaceOrder } from '../components/PlaceOrder'
import { BasketItem } from '../components/BasketItem'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const dispatch = useDispatch()

  const [itemsInBasket, setItemsInBasket] = useState([])

  useEffect(() => {
    let groupedItems = items.reduce((results: any, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setItemsInBasket(groupedItems)
    if (basketTotal === 0) {
      return navigation.goBack()
    }
  }, [items])

  console.log('itemsInBasket', basketTotal)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#0cb] bg-white shadow-sm'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>
              {restaurant?.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            //@ts-ignore
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon size={50} color='#0cb' />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: restaurant.imgUrl,
            }}
            className='h-7 w-7 bg-gray-300 rounded-full'
          />
          <Text className='flex-1'>Deliver in 30 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#0cb]'>Change</Text>
          </TouchableOpacity>
        </View>
        {/* Basket items */}
        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(itemsInBasket).map(([key, items]) => (
            <BasketItem
              key={key}
              items={items}
              dispatch={dispatch}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </ScrollView>

        {/* place order component */}
        <PlaceOrder basketTotal={basketTotal} value={basketTotal} />
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
