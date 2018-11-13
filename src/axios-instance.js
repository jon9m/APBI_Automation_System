import axios from 'axios';
import * as endpoints from './Shared/app-global';

axios.interceptors.request.use(request => {
    console.log(request);
    return request; //Always return 
}, error => {
    console.log(error);
});

const instance = axios.create({
    baseURL: endpoints.BASE_URL
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';  //common headers are general hearder
instance.defaults.headers.post['Content-type'] = 'appliaction/json'; //this is deault

export default instance;