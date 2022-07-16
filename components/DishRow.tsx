import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import CurrencyFormat from 'react-currency-format'
import { IDishes } from '../models/types'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { Selector, useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../redux/slices/basketSlice'
import { AppDispatch, RootState } from '../redux/store/store'

interface Props {
  dish: IDishes
}
const DishRow = ({ dish }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) =>
    selectBasketItemsWithId(state, dish.id)
  )
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const addItemToBasket = () => {
    dispatch(addToBasket(dish))
  }
  const removeItemFromBasket = () => {
    if (items.length < 0) return
    dispatch(removeFromBasket(dish.id))
  }

  return (
    <>
      <TouchableOpacity
        key={dish.id}
        onPress={() => setIsPressed(!isPressed)}
        //@ts-ignore
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{dish.title}</Text>
            <Text className='text-gray-400'>{dish.description}</Text>
            <CurrencyFormat
              value={dish.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value) => <Text>{value}</Text>}
            />
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: '#f3f3f4' }}
              source={{
                uri: dish.image,
              }}
              className='w-20 h-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity>
              <MinusCircleIcon
                onPress={removeItemFromBasket}
                size={40}
                // color='#0cb'
                color={items.length > 0 ? '#0cb' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items?.length}</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                onPress={addItemToBasket}
                size={40}
                color={items.length >= 0 ? '#0cb' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
