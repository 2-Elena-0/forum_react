import {createSlice} from "@reduxjs/toolkit";

interface PriceState {
    value: boolean
}

const initialState: PriceState = {
    value: false,
}

export const UpdateSlice = createSlice({
    name: 'updateState',
    initialState,
    reducers: {
        changeValue: (state) => {
            state.value = !state.value;
        },
    },
})

export const { changeValue } = UpdateSlice.actions

export default UpdateSlice.reducer