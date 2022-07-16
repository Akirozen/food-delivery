import { createSlice } from '@reduxjs/toolkit'
import { IDishes, IRestaurant } from '../../models/types'
import { RootState } from '../store/store'

export interface RestaurantSlice {
  restaurant: IRestaurant
}

const initialState: any = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: any) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState) =>
  // console.log('state?.restaurant.restaurant', state?.restaurant.restaurant)
  state?.restaurant.restaurant

export default restaurantSlice.reducer
