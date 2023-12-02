import { createSlice } from '@reduxjs/toolkit'
export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: false,
  reducers: {
    updateTheme: (state) => {
       return !state
    }}
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer
