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

// Action creators are generated for each case reducer function
export const {setDoctorId } = counterSlice.actions

export default counterSlice.reducer