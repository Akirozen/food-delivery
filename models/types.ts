export interface IRestaurant {
  id: string
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: string[] //!!!!
  long: number
  lat: number
}
// React Navigation prop
export type RootStackParamList = {
  Restaurant: IRestaurant
}

export type ParamList = {
  RestaurantParams: IRestaurant
}
