import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native'
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-2'>
      <StatusBar />
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: '',
          }}
          className='h-7 w-7 bg-green-300 p-4 rounded-full'
        />
        <View className='flex-1 flex-col items-start'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#0cb' />
          </Text>
        </View>
        <UserIcon size={35} color='#0cb' />
      </View>
      {/* Search  */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
          <SearchIcon color='gray' size={20} />
          <TextInput placeholder='Restaurants' keyboardType='default' />
        </View>
        <AdjustmentsIcon color='#0cb' />
      </View>

      {/* Body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* component Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id='1'
          title='Featured'
          description='Paid placements from our partners'
          featuredCategory='featured'
        />
        {/* Tasty discounts */}
        <FeaturedRow
          id='12'
          title='Featured'
          description='Tasty discounts'
          featuredCategory='featured'
        />
        {/* offers near you */}
        <FeaturedRow
          id='123'
          title='Offers near You'
          description='Paid placements from our partners'
          featuredCategory='featured'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
