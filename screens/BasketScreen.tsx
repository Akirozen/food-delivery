import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/slices/restaurantSlice'
import { selectBasketItems } from '../redux/slices/basketSlice'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  const [itemsInBasket, setItemsInBasket] = useState([])

  useEffect(() => {
    let groupedItems = items.reduce((results: any, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setItemsInBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text>Basket</Text>
            <Text>{restaurant?.title}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
