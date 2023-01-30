import axios from "axios";

const user = JSON.parse(window.localStorage.getItem('user')) //key comes from application localStorage Key value

axios.defaults.baseURL = 'http://music-social-network-api.test/api/'
/**If user does exist*/
if (user){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
}
