import Vue from 'vue'

export const Notice = (type, title) => {
    Vue.prototype.$Notice.error({
        title
    });
}

export const Message = {
    success(mes) {
        Vue.prototype.$Message.success(mes);
    },
    warning(mes) {
        Vue.prototype.$Message.warning(mes);
    },
    error(mes) {
        Vue.prototype.$Message.error(mes);
    }
}