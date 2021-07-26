import App from './App.vue'
import router from './router'
import './style/common.scss'
window.topVueInstance = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')