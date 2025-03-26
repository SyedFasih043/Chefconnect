import { axiosInstance } from "../AxiosInstance";

//add apis here

export async function register(payload) {

    try{
        const response = await axiosInstance.post("/auth/register", payload);
        return response ;

    }
    catch(error){
        console.log(error);
    }
    

}