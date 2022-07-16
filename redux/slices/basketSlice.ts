import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDishes } from '../../models/types'
import { RootState } from '../store/store'

export interface BasketSlice {
  items: IDishes[]
}

const initialState: BasketSlice = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: any) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      let newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn('There are no Items in the basket')
      }
      state.items = newBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: RootState) => state?.basket.items
export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state?.basket.items.filter((item) => item.id === id)

export default basketSlice.reducer
