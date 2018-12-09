import { requestPost } from '@/utils/request'

export const addUser = ({ username, password }) => {
    const data = JSON.stringify({
        username,
        password
    });
    return requestPost(`/users/addUser`, data)
}