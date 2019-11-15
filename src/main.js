import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import store from './store'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log(router)
    const abc = to.matched.some(router => router.meta && router.meta.add)
    if (abc) {
        const pu = document.cookie.includes('add=true');
        if (pu) {
            next()
            return
        }
        const go = window.confirm('没有登陆帐号，要去登陆吗？')
        if (go) {
            next("/go")
        }
        return
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')