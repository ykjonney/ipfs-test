import Router from 'vue-router'
import vue from 'vue'
const index=()=>import(/* webpackChunkName: "index" */'@/views/index')
const test=()=>import(/* webpackChunkName: "index" */'@/views/test')
vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name: 'index',
            component: index
        },
        {
            path:'/test',
            name: 'test',
            component:test
        }

],
})


