import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'doctorId',
  initialState: {
    value: 0,
    visitL:[]
  },
  reducers: {

    setDoctorId: (state, action) => {
      state.value = action.payload
    },
    setVisitL: (state, action) => {
      state.visitL = action.payload
    },
  },
},
)

export const { setDoctorId, setVisitL } = counterSlice.actions

export default counterSlice.reducer