import financesRoutes from './../modules/finances/router'

const Dashboard = () => import('./../views/Dashboard.vue')

/* console.log('passando pelo index-dashboard-path: ', path) */

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      ...financesRoutes
    ]
  }
]
