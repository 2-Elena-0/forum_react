import {createSlice} from "@reduxjs/toolkit";

interface PriceState {
    value: boolean
}

const initialState: PriceState = {
    value: false,
}

export const TopicModalSlice = createSlice({
    name: 'topicModal',
    initialState,
    reducers: {
        handleClose: (state) => {
            state.value = false;
        },
        handleShow: (state) => {
            state.value = true;
        },
    },
})

export const { handleClose, handleShow } = TopicModalSlice.actions

export default TopicModalSlice.reducer