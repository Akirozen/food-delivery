import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <CategoryCard imgUrl={imageUrl1} title='test' />
      <CategoryCard imgUrl={imageUrl2} title='test' />
      <CategoryCard imgUrl={imageUrl3} title='test' />
      <CategoryCard imgUrl={imageUrl1} title='test' />
      <CategoryCard imgUrl={imageUrl2} title='test' />
      <CategoryCard imgUrl={imageUrl3} title='test' />
    </ScrollView>
  )
}

const imageUrl1 =
  'https://2aj47i3u0emv3rfnwz2zoyfm-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/foodiesfeed.jpg'

const imageUrl2 =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
const imageUrl3 =
  'https://image.shutterstock.com/image-photo/chicken-fillet-salad-healthy-food-260nw-1721943142.jpg'

export default Categories
