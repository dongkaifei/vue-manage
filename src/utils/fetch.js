import axios from 'axios'
import { Message } from '@/utils/assembly'

const service = axios.create({
    timeout: 15000, // 请求超时时间
    transformRequest: [data => {
        return data
    }],
    headers: {
        'Content-Type': 'application/json'
    }
});

// request拦截器
service.interceptors.request.use(config => {
    // 请求header中携带信息
    //config.headers['Authorization'] = getUserInfo().token;
    return config
}, error => {
    // Do something with request error
    if (error && typeof error == 'object') {
        Message.error(`网络请求错误：${error.toString()}`);
    }
    return Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(response => {
    if (response.status >= 200 && response.status < 300 && response.data && response.headers) {
        // success
        return { res: response.data, headers: response.headers }
    } else {
        //fail
        Message.error(`网络响应错误：${response.status}`);
    }
}, error => {
    if (error && error.response && error.response.status) {
        Message.error(`网络响应错误：${error.response.status}`);
    }
    return Promise.reject(error)
})

const feachData = ({ url, method = 'get', params }) => {
    return service({
        method,
        url,
        data: params || ''
    });
}
export default feachData
