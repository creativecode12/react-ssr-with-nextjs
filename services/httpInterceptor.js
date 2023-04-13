import axios from 'axios';
axios.interceptors.response.use(response => response, manageErrorConnection);

function manageErrorConnection(err) {
    if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        return Promise.reject(new Error('Login expired'));
    } else {
        return Promise.reject(err);
    }
}

export default axios;
