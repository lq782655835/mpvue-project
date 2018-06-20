import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: '自定义组件',
        enablePullDownRefresh: true
    }
}
