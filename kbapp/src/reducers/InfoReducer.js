import React from 'react';

let initialState = {
    infoList: [],
    selectedItem: null,
}


const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        getAllGAInfo(state, action) {
            state.infoList = action.payload.data;
        }
    }
})

export const infoActions = infoSlice.actions;
export default infoSlice.reducer;