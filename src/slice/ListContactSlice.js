import { createSlice } from '@reduxjs/toolkit'
export const contactSlice = createSlice({
  name: 'listContact',
  initialState: [
    { id: 1, Name: "Vo Ngoc Tu", Email: "tuanvn2512@gmail.com", Phone: "0988998765", Hometown: "Quảng Nam" },
    { id: 2, Name: "Vo Ngoc a", Email: "tuanvn2512@gmail.com", Phone: "0988998765", Hometown: "Quảng Nam" },
    { id: 3, Name: "Vo Ngoc b", Email: "tuanvn2512@gmail.com", Phone: "0988998765", Hometown: "Quảng Nam" },
    { id: 4, Name: "Vo Ngoc c", Email: "tuanvn2512@gmail.com", Phone: "0988998765", Hometown: "Quảng Nam" }
  ],
  reducers: {
    addContact: (state, action) => {
       state.unshift(action.payload)
    },
    updateContact: (state, action) => {
       state.splice(action.payload.index, 1, action.payload.contact)
    },
    deleteContact: (state, action) => {
      let index = state.findIndex(contact => contact.id === action.payload)
       state.splice(index, 1)
    },
    searchContact: (state, action) => {
      return state = [...action.payload]
    }
  }
})

export const { addContact, deleteContact, updateContact, searchContact } = contactSlice.actions

export default contactSlice.reducer
