
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const TokenEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/user/login',
};

export const UserInfoEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/details',
}

export const UserInfoData = async (authToken) => {
    return (
        await axios({
            method: 'get',
            url: UserInfoEndPoint.baseURL,
            headers: { 'Authorization': 'Basic ' + authToken },
        })
            .then(() => {
                console.log('UserLogged in');
            })
            .catch((error) => {
                console.log(error);
            })
    )
}

// export const storeData = async (authToken) => {
//     try {
//         await AsyncStorage.setItem('authToken', authToken)
//         console.log("done");
//     } catch (e) {
//         // save error
//         console.log(e);
//     }
// }

// export const getAuthToken = async () => {
//     try {
//         return (
//             await AsyncStorage.getItem('authToken')
//         )
//     }
//     catch (e) {
//         console.log("Error while fetch authToken from store", e);
//     }
// }


