import { createWebHistory, createRouter } from "vue-router";
import CreateTask from "./pages/CreateTask.vue";
import TaskList from "./pages/TaskList.vue";
import SingleTask from "./pages/SingleTask.vue";

const routes = [
  {
    path: "/",
    name: "Create",
    component: CreateTask,
  },
  {
    path: "/tasks",
    name: "List",
    component: TaskList,
  },
  {
    path: "/task/:id",
    name: "Task",
    component: SingleTask,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
