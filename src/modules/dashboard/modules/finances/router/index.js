const RecordsAdd = () => import('./../views/RecordsAdd.vue')
const RecordsHome = () => import('./../views/RecordsHome.vue')
const ReportsHome = () => import('./../views/ReportsHome.vue')

console.log('teste-Index-do-router')

export default [
  {
    path: 'Records',
    component: RecordsHome,
    meta: { requiresAuth: true },
    alias: ['home', '']
  },
  {
    path: 'Records/add',
    component: RecordsAdd,
    meta: { requiresAuth: true },
    name: 'RecordsAdd'
  },
  {
    path: 'reports',
    component: ReportsHome,
    meta: { requiresAuth: true }
  }
]
