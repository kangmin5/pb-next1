import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userJoinApi, userLoginApi,userUpdateApi, userDeleteApi, userFindAllApi,
     userFindAllSortApi, userFindAllPageableApi, userCountApi, userFindByIdApi } from '../apis/userApi'
import  userActions  from '../modules/users/usersSlice';


function* join({payload}){
    try {
        const user = payload;
        console.log(' saga내부 join 성공  '+ JSON.stringify(user))
        const response = yield userJoinApi(user.payload)
        yield put(userActions.joinSuccess(response))
        
    }catch(error){
         console.log(' saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
// function* login({payload}){
//     try {
//         const login = payload;
//         alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
//         const response = yield userLoginApi(login.payload)
//         yield put(userActions.loginSuccess(response))
//     }catch(error){
//          alert('진행 3: saga내부 join 실패  ') 
//          yield put(userActions.loginFailure(error))
//     }
// }

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
// export function* watchLogin(){
//     yield takeLatest(userActions.loginRequest, login)
// }