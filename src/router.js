import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue'

const routes = [
  {
    path: "/BlogList",
    component: BlogList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;