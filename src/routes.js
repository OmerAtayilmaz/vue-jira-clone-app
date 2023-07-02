export const routes = [
    {
        path: "/",
        component:() => import("./view/HomeView.vue"),
        name: "HomeView"
    },
    {
        path: "/create",
        component:() => import("./view/CreateView.vue"),
        name: "CreateView"
    }
]




