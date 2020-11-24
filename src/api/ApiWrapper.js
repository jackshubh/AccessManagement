
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const TokenEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/user/login',
};

export const UserInfoEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/user/details',
}

export const ListOfServicesEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/execute',
}

export const GetAllUsersListEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/userlist',
}

export const UpdatePermissionEndPoint = {
    baseURL: 'http://testapi.eshakti.com/mobileapi/permissionassign',
}

export const authToken = '93D821EC97742C7A33B9043C5B676DDC4AAEADAADF0BDD93553AB51EBE8DEC8CEAC148D4806CA52EFAA079CC88A16A91737DE5FAD0DBD0CEF998EA3D6C7173F2CFB8123572B89E60D1787F8829E5E266676DAE9AED1D6CD4CEFDAF32CC8E12B1643791CC828DAF10B7F7AF0ECF9F0682';
//'BBF52D2A6F07ED7D349C56D1E3EFC977C6334D06D35E95FC3F5263446B018C3E665124379376F5CCDDE111E91B6ACDBC2A6D41B77091C8EC66F308288F13CDD79D77194D3C993783A6B7E70850D096ED8449C286002585DE332832DDEA1F71665CA519EE5D556B9824FA78FF6F5B8B32';
// 'BAC399C194A57F4B793577876974BD8EF47308EE7CF9118951C44B18999A3C9B28EEE7FACCEDD1BB781324B9F39459E16D72B6CD52EDF3EE93CDA9E67686DC34547211AA70C36C406694006E02480B0C5CBDD7581E769A2DCBC0566CF8118F61AF1E7F55232A290882081B5AF7243629';
//'BBF52D2A6F07ED7D349C56D1E3EFC977C6334D06D35E95FC3F5263446B018C3E665124379376F5CCDDE111E91B6ACDBC2A6D41B77091C8EC66F308288F13CDD79D77194D3C993783A6B7E70850D096ED8449C286002585DE332832DDEA1F71665CA519EE5D556B9824FA78FF6F5B8B32'
export const UserInfoData = async (authToken) => {

    const response = await axios({
        method: 'get',
        url: UserInfoEndPoint.baseURL,
        headers: { 'Authorization': 'Basic ' + authToken },
    })
        .then((response) => {
            console.log('UserInfoFetched');
            let objTemp = {};
            objTemp = response.data.data;
            return objTemp;
        })
        .catch((error) => {
            console.log(error);

        })
    return response;
}

export const ListOfServices = async () => {
    const response = await axios({
        method: 'post',
        url: ListOfServicesEndPoint.baseURL,
        data: {
            "spName": '',
            "params": '',
        }
    })
        .then(() => {
            console.log('Fetched all the list of services');
            return response;
        })
        .catch((error) => {
            console.log(error);
        })

    return null;
}

export const GetAllUsers = async () => {
    const response = await axios({
        method: 'get',
        url: GetAllUsersListEndPoint.baseURL,
    })
        .then((response) => {
            console.log('All the users fetched')
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
    return null;
}

export const UpdatePermissions = async (ServiceName, arrUser) => {

    const response = await axios({
        method: 'post',
        url: UpdatePermissionEndPoint.baseURL,
        data: {
            "servicename": ServiceName,
            "users": arrUser,
        }
    })
        .then((response) => {
            console.log('Updated Successfully');
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
    return response;
}

// export const storeData = async (authToken) => {
//     try {
//         await AsyncStorage.setItem('@authToken', authToken)
//         console.log("done");
//     } catch (e) {
//         // save error
//         console.log(e);
//     }
// }

// export const getAuthToken = async () => {
//     try {
//         return (
//             await AsyncStorage.getItem('@authToken')
//         )
//     }
//     catch (e) {
//         console.log("Error while fetch authToken from store", e);
//     }
// }


