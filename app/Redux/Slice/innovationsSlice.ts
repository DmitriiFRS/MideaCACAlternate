import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   scrollRate: number
}

const initialState: initialStateType = {
   scrollRate: 1
}

const innovationsSlice = createSlice({
   name: 'innovations',
   initialState,
   reducers: {
      scrollPosition: (state, action: PayloadAction<number>) => {
         state.scrollRate = action.payload
      }
   }
})

export const {scrollPosition} = innovationsSlice.actions;
export default innovationsSlice.reducer;