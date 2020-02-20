import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Results from "../views/Results.vue"
import Search from "../views/Search.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/busca",
    name: "busca",
    component: Search
  },
  {
    path: "/resultados",
    name: "resultados",
    component: Results
  }
]

const router = new VueRouter({
  routes
})

export default router
