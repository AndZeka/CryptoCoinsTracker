import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home'
import News from '@/components/News'
import Home1 from '@/views/Home1'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/home1',
    name: 'Home1',
    component: Home1
  }
];

const router = new VueRouter({
  routes
});

export default router;
