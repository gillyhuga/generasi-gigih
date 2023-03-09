import { createSlice } from "@reduxjs/toolkit";

export const searchReducer = createSlice({
    name: "search",
    initialState: {
        query: " ",
    },
    reducers: {
        searchAction: (state, action) => {
           state.query = action.payload;
        },
        searchQuery: (state) => {
            state.query = " ";
         },
    }
});

// export action
export const { searchQuery, searchAction } = searchReducer.actions;

// export recucer
export default searchReducer.reducer; 