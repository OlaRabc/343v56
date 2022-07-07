import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'doctorId',
  initialState: {
    value: 0,
  },
  reducers: {

    setDoctorId: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setDoctorId } = counterSlice.actions

export default counterSlice.reducer