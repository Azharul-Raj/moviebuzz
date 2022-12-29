import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const endPoints = {
    signin:'user/singin',
    signup: 'user/signup',
    getInfo: 'user/info',
    passwordUpdate: 'user/update-password',
    getFavorites: 'user/favorites',
    addFavorites:'user/favorites'
}

const userApi = {
    signin: async ({username,password }) => {
        try {
            const response =await publicClient.post(userEndpoints.signin, { username, password })
            return {response};
        } catch (error) {
            console.log(error);
        }
    },
    signup: async ({username,password,confirmPassword,displayName }) => {
        try {
            const response = await publicClient.post(userEndpoints.signup, { username, password, confirmPassword, displayName })
            return {response};
        } catch (error) {
            console.log(error);
        }
    },
    getInfo: async ({ }) => {
        try {
            const response = await privateClient.get(userEndpoints.getInfo) 
            return { response };
        } catch (error) {
            console.log(error);
        }
    },
    passwordUpdate: async ({password,newPassword,confirmPassword }) => {
        try {
            const response = await privateClient.put(userEndpoints.signup, { password, newPassword, confirmPassword })
            
            return { response };
        } catch (error) {
            console.log(error);
        }
    }
}

export default userApi;