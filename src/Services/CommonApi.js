import axios from "axios"

const CommonApi= async(method,url,requestbody)=>{
let configobj={
    method:method,
    url:url,
    data:requestbody
}

return await axios(configobj).then((res)=>{
    return res;
}).catch((error)=>{
    return error
});

}

export default CommonApi
