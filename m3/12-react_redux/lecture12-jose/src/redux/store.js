import { configureStore } from "@reduxjs/toolkit";

import {todoSlice} from "./reducer"

const store = configureStore({
    reducer: todoSlice.reducer
})  

export default store