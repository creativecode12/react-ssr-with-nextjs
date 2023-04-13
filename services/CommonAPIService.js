import axios from './httpInterceptor';

class APIConnect {
    getRequest(url, isprotected = true) {
        // const headers = isprotected ? { headers: this.authHeader() } : {};
        return axios.get(`${url}`);
    }
    /* postRequest(url, body, isprotected = true) {
         const headers = isprotected ? { headers: this.authHeader() } : {};
         return axios.post(`${APIConstants.baseurl}${url}`, body, headers);
     }
     postFileRequest(url, body) {
         const headers = { headers: this.fileUploadHeader() };
         return axios.post(`${APIConstants.baseurl}${url}`, body, headers);
     }
     patchRequest(url, body, isprotected = true) {
         const headers = isprotected ? { headers: this.authHeader() } : {};
         return axios.patch(`${APIConstants.baseurl}${url}`, body, headers);
     }
 
     deleteRequest(url, isprotected = true) {
         const headers = isprotected ? { headers: this.authHeader() } : {};
         return axios.delete(`${APIConstants.baseurl}${url}`, headers);
     }
     putRequest(url, body, isprotected = true) {
         const headers = isprotected ? { headers: this.authHeader() } : {};
         return axios.put(`${APIConstants.baseurl}${url}`, body, headers);
     }*/
    /* authHeader() {
         const _token = cookies.get(APIConstants.authTokenKey) || '';
         if (_token !== '') {
             return {
                 'content-type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 Authorization: 'Bearer ' + _token,
             };
         }
     }
 
     fileUploadHeader() {
         const _token = cookies.get(APIConstants.authTokenKey) || '';
         if (_token !== '') {
             return {
                 'content-type': 'multipart/form-data',
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             };
         }
     }*/
}

export default new APIConnect();
