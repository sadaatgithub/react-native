import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";


const apiClient = create({
  baseURL: "http://192.168.43.102:9000/api",
  // headers:{
  //   'Content-Type':'multipart/form-data',
  //     accept: 'application/json',
  // }

});


apiClient.addAsyncRequestTransform(async (request) =>{
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    return request.headers["x-auth-token"] =  authToken;
})




// caching feature------------------------->
// const get = apiClient.get;
// apiClient.get = async (url,params,axiosConfig) =>{
//     const response = await get(url,params,axiosConfig);
//     if(response.ok){
//         cache.store(url,response.data);
//         return response
//     }
//    const data = await cache.get(url);
//    return data? {ok:true, data} : response

// }

export default apiClient;
