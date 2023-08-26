import apiClient from "./client"
import * as FileSystem from 'expo-file-system';

const endpoint = '/listings/'
const getListings = () => apiClient.get(endpoint)
const addListings =  (listing,onUploadProgress,) =>{
    // 
    const data = new FormData();
    data.append('title', listing.title)
    data.append('price', listing.price);
    data.append('category', listing.categoryId);
    data.append('description', listing.description);
   
    listing.images.forEach((image,index) => {
        return data.append('images',{
        name:'name' + index,
        type: 'image',
        uri:image })
    });

    if(listing.location) data.append('location', JSON.stringify(listing.location));
    console.log(listing)
   return apiClient.post(endpoint, listing,
        {
        onUploadProgress:progress => 
        onUploadProgress(progress.loaded / progress.total)},
        
        );

}

export default {
    getListings,  
    addListings
}