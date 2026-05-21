import {useDispatch, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import {TopicModalSlice} from "./topicModalSlice.ts";

export const store = configureStore({
    reducer: {
        show: TopicModalSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()