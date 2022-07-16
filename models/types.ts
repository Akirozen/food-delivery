export interface IDishes {
  id: string
  title: string
  description: string
  price: number
  image: string
}
export interface IRestaurant {
  id: string
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: IDishes[]
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
