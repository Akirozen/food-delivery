import { ScrollView } from 'react-native'
import { foods } from '../assets/RestaurantList'
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
      {foods.map((food) => (
        <CategoryCard imgUrl={food.image} title={food.title} />
      ))}
    </ScrollView>
  )
}
export default Categories
