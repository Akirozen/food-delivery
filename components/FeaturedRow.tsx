import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

interface Props {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, title, description, featuredCategory }: Props) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#0cb' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant Card */}
        <RestaurantCard
          id='123'
          imgUrl={imageUrl1}
          title='Sushi'
          rating={4.5}
          genre='Japanese'
          address='M.shyri'
          short_description='short descriptoon'
          dishes='sushi'
          long={42.42}
          lat={43.43}
        />
        <RestaurantCard
          id='123'
          imgUrl={imageUrl1}
          title='Sushi'
          rating={4.5}
          genre='Japanese'
          address='M.shyri'
          short_description='short descriptoon'
          dishes='sushi'
          long={42.42}
          lat={43.43}
        />
        <RestaurantCard
          id='123'
          imgUrl={imageUrl1}
          title='Sushi'
          rating={4.5}
          genre='Japanese'
          address='M.shyri'
          short_description='short descriptoon'
          dishes='sushi'
          long={42.42}
          lat={43.43}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const imageUrl1 =
  'https://2aj47i3u0emv3rfnwz2zoyfm-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/foodiesfeed.jpg'
