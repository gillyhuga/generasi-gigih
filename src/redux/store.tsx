import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchReducer';

export default configureStore({
    reducer: {
        search: searchReducer,
    }
}); 
export type RootState = ReturnType<typeof configureStore>
