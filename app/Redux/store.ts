import { configureStore } from "@reduxjs/toolkit";
import asideReducer from './Slice/asideMenuSlice';
import mainPageReducer from './Slice/mainPageSlice';
import innovationsReducer from './Slice/innovationsSlice';

const store = configureStore({
   reducer: {
      asideReducer,
      mainPageReducer,
      innovationsReducer
   }
})
export type RootState = ReturnType<typeof store.getState>
export default store;