import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Image, Text, TouchableOpacity, View } from 'react-native'
export function BasketItem({
  key,
  items,
  length,
  image,
  title,
  value,
  dispatch,
  removeFromBasket,
}: any) {
  console.log('key', key)
  return (
    <View
      key={key}
      className='flex-row items-center space-x-3 bg-white py-2 px-5'
    >
      <Text className='text-[#0cb]'>{items?.length} x</Text>
      <Image
        source={{
          uri: items[0]?.image,
        }}
        className='h-12 w-12  rounded-full'
      />
      <Text className='flex-1'>{items[0]?.title}</Text>
      <CurrencyFormat
        value={items[0].price}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value) => <Text className='text-gray-600'>{value}</Text>}
      />
      <TouchableOpacity>
        <Text
          onPress={() => dispatch(removeFromBasket(items[0].id))}
          className='text-[#0cb] text-xs'
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  )
}
