import { requestGet } from '@/utils/request';

export const apiGetHomeworksInfo = ({ id = 1 }) => {
    return requestGet(`/homeworks/${id}`);
}