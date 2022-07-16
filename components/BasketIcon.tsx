import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import {
  selectBasketItems,
  selectBasketTotal,
} from '../redux/slices/basketSlice'

const BasketIcon = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  console.log('basketTotal', basketTotal)
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        //@ts-ignore
        className='mx-5 bg-[#0cb] p-4 rounded-lg flex-row items-center space-x-1'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01a296] py-1 px-2'>
          {items.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <CurrencyFormat
          value={basketTotal}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value) => (
            <Text className='text-lg text-white font-extrabold'>{value}</Text>
          )}
        />
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
