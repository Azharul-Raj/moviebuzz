const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: null,
        listFavorites:[]
    },
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                localStorage.removeItem("token")
            }
            else {
                if (action.payload.token) {
                    localStorage.setItem("token",action.payload.token)
                }
            }
            state.user = action.payload;
        },
        setFavorites: (state, action) => {
            state.listFavorites = action.payload;
        },
        removeFavorite: (state, action) => {
            const { mediaId } = action.payload;
            state.listFavorites=[...state.listFavorites].filter(e=>e.mediaId.toString()!==mediaId.toString())
        },
        addFavorite: (state, action) => {
            state.listFavorites=[action.payload,...state.listFavorites]
        }
    }
})

export const {
    setUser,
    setFavorites,
    removeFavorite,
    addFavorite
} = userSlice.actions;

export default userSlice.actions;