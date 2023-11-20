import { createSlice } from '@reduxjs/toolkit';

const USER_SLICE_NAME = 'userSlice';

const initialState = {

}

const reducers = {
    updateUserData: (state, { payload }) => {
        state.date = payload
    },
    errAuth: (state, { payload }) => {
        state.error = payload
    }
}

const extraReducers = builder => {

}

const userSlice = createSlice({
    name: `${USER_SLICE_NAME}`,
    initialState,
    reducers,
    extraReducers,
});

const { actions, reducer } = userSlice;

export const { updateUserData, errAuth } = actions

export default reducer