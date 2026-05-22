import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface PriceState {
    value: string
}

const initialState: PriceState = {
    value: ""
}

export const FilterSlice = createSlice({
    name: 'filterModal',
    initialState,
    reducers: {
        setValue: (state, action : PayloadAction<string>) => {
            state.value = action.payload;
        },
        clearFilter: (state) => {
            state.value = initialState.value;
        }
    },
})

export const { setValue, clearFilter } = FilterSlice.actions

export default FilterSlice.reducer