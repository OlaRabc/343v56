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
  name: 'doctorList',
  initialState: {
    value: [null],
  },
  reducers: {

    setDoctorList: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { setDoctorId, setDoctorList } = counterSlice.actions

export default counterSlice.reducer