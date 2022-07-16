import { Text, TouchableOpacity, View } from 'react-native'
import CurrencyFormat from 'react-currency-format'

export function PlaceOrder({ basketTotal }: any) {
  return (
    <View className='p-5 mt-5 bg-white space-y-4'>
      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Subtotal</Text>
        <CurrencyFormat
          value={basketTotal}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value) => <Text className='text-gray-400'>{value}</Text>}
        />
      </View>

      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Delivery fee</Text>
        <CurrencyFormat
          value={5.99}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value) => <Text className='text-gray-400'>{value}</Text>}
        />
      </View>
      <View className='flex-row justify-between'>
        <Text>Order Total</Text>
        <CurrencyFormat
          value={basketTotal + 5.99}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value) => (
            <Text className='font-extrabold'>{value}</Text>
          )}
        />
      </View>
      <TouchableOpacity //@ts-ignore
        className='rounded-lg bg-[#0cb] p-4'
      >
        <Text className='text-white font-extrabold text-center'>
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  )
}
