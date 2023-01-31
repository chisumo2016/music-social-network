import axios from "axios";

const user = JSON.parse(window.localStorage.getItem('user')) //key comes from application localStorage Key value

axios.defaults.baseURL = 'http://music-social-network-api.test/api/'
    //axios.defaults.baseURL = process.env.VUE_APP_API_URL
/**If user does exist*/
if (user){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
}
