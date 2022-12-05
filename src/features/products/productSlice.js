import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  changeHeader: false,
  fakeData: null,
  inputFields: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    secondHeader: (state, action) => {
      state.changeHeader = true
    },
    firstHeader: (state, action) => {
      state.changeHeader = false
    },
    showData: (state, { payload }) => {
      state.fakeData = payload
    },
    addField: (state, { payload }) => {
      state.inputFields = [...state.inputFields, payload]
    },
  },
})

export const { secondHeader, showData, firstHeader, addField } =
  productsSlice.actions

export default productsSlice.reducer
