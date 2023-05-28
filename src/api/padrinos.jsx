import {BASE_API} from '../utils/constants';

export const getPadrinoApi = async(token)=>{
    try{
        const url = `${BASE_API}/api/padrino/`
        const params = {
            headers:{
                Authorization:`Bearer ${token}`,
            },
        }

        const response = await fetch(url,params);
        const result = await response.json()

        return result;

    }catch(error){
        throw error

    }
}