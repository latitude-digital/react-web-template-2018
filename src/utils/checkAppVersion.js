
export default function checkAppVersion(version){
    return fetch(`/version?number=${version}`)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            return response.json().then(data => {
                return Promise.reject(data)
            })
        })
        .then(data => {
            console.log(data.message);
        })
        .catch((data) => {
            console.dir(data.message);
            return Promise.reject(data.reload);
        })
}
