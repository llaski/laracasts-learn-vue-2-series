import VueRouter from 'vue-router'

export default new VueRouter({
    linkActiveClass: 'is-active',

    routes: [
        {
            path: '/',
            component: require('./views/Home')
        },
        {
            path: '/about',
            component: require('./views/About')
        },
        {
            path: '/contact',
            component: require('./views/Contact')
        }
    ]
})