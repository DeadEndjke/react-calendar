import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EventSliceState } from './types'



const initialState: EventSliceState = {
  items: []
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    
    addEvent:(state) => {
        
    }
  },
})

export const { addEvent} = eventSlice.actions

export default eventSlice.reducer