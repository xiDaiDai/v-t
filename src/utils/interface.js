import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 */

// 单独倒出
export const query = params => {
    return axios({
        url: '/query',
        method: 'get',
        params
    })
}

export const mock = params => {
    return axios({
        url: '/mock',
        method: 'get',
        params
    })
}

export const upload = data => {
    return axios({
        url: '/upload',
        method: 'post',
        data
    })
}

// 默认全部倒出
// 根绝需要进行
export default {
    query,
    mock,
    upload
}
