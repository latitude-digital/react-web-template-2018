
import axios from 'axios'

export default function checkAppVersion(version){
    return axios.get(`/version?number=${version}`)
        .then((response) => {
            console.log(response.data.message);
        })
        .catch((error) => {
            console.log(error);
            if(!error.response) return Promise.reject(false);
            if(!error.response.data) return Promise.reject(false);
            return Promise.reject(error.response.data.reload);
        })
}
