import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    status:'idle' // | 'loading' | 'succeeded' |'failed'
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state, _payload) {
            alert(`2.진행 : 리듀서  ${state.data}`)
            state.loading = 'loading';
        },
        joinSuccess(state, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        joinFailure(state, {payload}){
            state.status = 'failed'
            state.data = payload
        },

        loginRequest(state, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})
export const { joinRequest, joinSuccess, joinFailure,
    loginRequest, loginSuccess, loginFailure } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer