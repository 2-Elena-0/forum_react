import {useDispatch, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import {TopicModalSlice} from "./topicModalSlice.ts";
import {UpdateSlice} from "./updateSlice.tsx";
import {LinkSlice} from "./LinkSlice.ts";

export const store = configureStore({
    reducer: {
        show: TopicModalSlice.reducer,
        updateState: UpdateSlice.reducer,
        links: LinkSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()