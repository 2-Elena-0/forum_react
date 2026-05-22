import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface PriceState {
    value: string[]
}

const initialState: PriceState = {
    value: [""],
}

export const LinkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        AddLink: (state) => {
            state.value.push("");
        },
        RemoveLink: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        ChangeLink: (state, action: PayloadAction<{
            index: number,
            val: string,
        }>) => {
            state.value[action.payload.index] = action.payload.val
        },
        SetLinks: (state, action: PayloadAction<string[]>) => {
          state.value = action.payload;
        },
        Clear: (state) => {
            state.value = [""]
        }
    },
})

export const {AddLink, RemoveLink, ChangeLink, SetLinks, Clear} = LinkSlice.actions

export default LinkSlice.reducer