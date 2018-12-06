import fetch from '@/utils/fetch';
import { domainConfig } from '@/configs/config'
import { Message } from '@/utils/assembly'

export const requestGet = (reqUrl) => {
    const url = `${domainConfig.domain}${reqUrl}`;
    return fetch({ url }).then(({ res }) => {
        if (!res) return;
        if (res.errCode == 0) {
            return res.data;
        } else {
            Message.error(`系统出错：${res.errCode}`);
        }
    })
}