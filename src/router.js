import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue'
import BlogHome from './components/BlogHome.vue'
import BlogListDetail from './components/BlogListDetail.vue'
import NotFound from './components/NotFound.vue'
// import BlogAuthor from './components/BlogAuthor.vue'
import BlogComment from './components/BlogComment.vue'

const routes = [
  {
    path: "/BlogListDetail/:id",
    components: {
      default: BlogListDetail,
      // BlogAuthor,
      BlogComment,
    }
  },
  {
    path: "/BlogList",
    component: BlogList,
  },
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;