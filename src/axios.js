import axios from 'axios';


//This overrides default config in index.js

const instance = axios.create({
    baseURL: 'https://www.apbi.com.au'
});
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

export default instance;