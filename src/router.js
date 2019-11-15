import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import ssss from './assrts/styles/reset.css'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active-exact',
    linkActiveClass: 'active',
    routes: [
        // {
        //   path:'/',
        //   redirect:'/home'
        // },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                add: true
            },

        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue'),
            redirect: 'about/academic', //重定向
            children: [{
                    path: 'academic',
                    name: 'academic',
                    meta: {
                        add: true
                    },
                    component: () =>
                        import ("./views/academic.vue")
                },
                {
                    path: 'download',
                    name: 'download',
                    component: () =>
                        import ("./views/dewnload.vue")
                },
                {
                    path: 'personal',
                    name: 'personal',
                    component: () =>
                        import ("./views/personal.vue")
                }
            ]
        },
        {
            path: '/Learn',
            name: 'learn',
            component: () =>
                import ('./views/Learn.vue')
        },
        {
            path: '/student',
            name: 'student',
            component: () =>
                import ('./views/student.vue')
        },
        {
            path: '/community',
            name: 'community',
            component: () =>
                import ('./views/community.vue')
        },
        {
            path: '/question/:id',
            name: 'question',
            component: () =>
                import ('./views/question')
        },
        {
            path: '/go',
            name: 'go',
            component: () =>
                import ('./views/go')
        },
        {
            path: '/NotFound',
            component: () =>
                import ('./views/NotFound')
        },
        {
            path: '*',
            redirect(to) {
                if (to.path === '/') {
                    return '/home'
                } else {
                    return '/NotFound'
                }
            }
        }
    ]
})