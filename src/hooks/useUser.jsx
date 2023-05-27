import {getMetApi} from '../api/user'



export const useUser=()=>{
    const getMe= async(token)=>{
        try {
            const response = await getMetApi(token);
            return response;
        } catch (error) {
            throw error ;
        }

    }
    return {
        getMe,
    };
        
   
}