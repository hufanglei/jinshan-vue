import Vue from 'vue'
import VueRouter from 'vue-router'
import goujianxinxi from '../views/lanhu_goujianxinxi/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/goujianxinxi"
  },
  {
    path: '/goujianxinxi',
    name: 'goujianxinxi',
    component: goujianxinxi,
      meta: { title: '金山钢构' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title
    next()
})
export default router
