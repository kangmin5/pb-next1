import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}



export const userJoinApi = async(payload)  => {
        try{
            const response = await axios.post(`${SERVER}/users/join`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}

export const userLoginApi = async()  => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}

export const userUpdateApi = async () => {
            try{
                const response =
                await axios.post(`${SERVER}/users/login`, payload, { headers })
                const loginUser = JSON.stringify(response.data)
                alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                return response.data
            }catch(err){
                return err;
            }
}

export const userDeleteApi = async () => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }
export const userFindAllApi = async () => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }
    export const userFindAllSortApi = async () => {
            try{
                const response =
                await axios.post(`${SERVER}/users/login`, payload, { headers })
                const loginUser = JSON.stringify(response.data)
                alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                return response.data
            }catch(err){
                return err;
            }
}
export const userFindAllPageableApi = async () => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}
export const userCountApi = async () => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}

export const userFindByIdApi = async () => {
        try{
            const response =
            await axios.post(`${SERVER}/users/login`, payload, { headers })
            const loginUser = JSON.stringify(response.data)
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
}