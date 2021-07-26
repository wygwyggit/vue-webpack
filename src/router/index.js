import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/home',
            name:'home',
            component:() => import(/* webpackChunkName: "Home" */ '../views/home.vue')
            // component:Home
        },{
            path:'/about',
            name:'about',
            component:() => import(/* webpackChunkName: "About" */ '../views/about.vue')
            // component:About
        },{
            path:'*',
            redirect:'/home'
        }
    ]
})