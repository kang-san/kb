import { configureStore } from "@reduxjs/toolkit";

import infoReducer from './reducers';

const store = configureStore({
    reducer: {
        gaInfo : infoReducer,
    }
})

export default store;