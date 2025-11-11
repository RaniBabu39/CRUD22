import {Baseurl} from "./Baseurl";
import CommonApi from './CommonApi'

export const getTodo=async ()=>{
    return await CommonApi('get',`${Baseurl}/todo`,"")
}
export const createTodo = async(requestbody)=>{
    return await CommonApi ('post', `${Baseurl}/todo`,requestbody)
}

export const deleteTodo = async(id)=>{
    return await CommonApi ('delete',`${Baseurl}/todo/${id}`,{})
}


export const editTodo  = async(id,requestbody)=>{
    return await CommonApi ('put',`${Baseurl}/todo/${id}`,requestbody)
}

