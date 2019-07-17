import axios from 'axios';

export const sendPhoneNumber = phone=>{
    return axios.post(BASE_URL+'Identity/Api/Account/SignInVerification');
}