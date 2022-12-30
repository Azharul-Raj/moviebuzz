import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
    name: "ThemeMode",
    initialState: {
        AppState:""
    },
    reducers: {
        setAppState: (state, action) => {
            state.AppState = action.payload;
        }
    }
})

export const { setAppState } = appStateSlice.actions;
export default appStateSlice.reducer;