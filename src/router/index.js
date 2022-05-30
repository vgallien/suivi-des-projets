import { createRouter, createWebHistory } from "vue-router";

import CurrentWeek from "../views/CurrentWeek.vue";
import ProjectsList from "../views/ProjectsList.vue";
import ProjectForm from "../views/ProjectForm.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/current-week",
    },
    {
      path: "/current-week",
      name: "current-week",
      component: CurrentWeek,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsList,
    },
    {
      path: "/projects/new",
      name: "projects-new",
      component: ProjectForm,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
