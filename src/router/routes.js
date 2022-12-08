
const routes = [
  {
    path: '/login',
    name:'login',
    component: () => import('pages/login.vue')

  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue')},
      { path: '/test', component: () => import('pages/testing.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/animalscard', component: () => import('pages/AnimalsCard.vue') },
      { path: '/animals', component: () => import('../components/spinner.vue') },
      { path: '/userlist', component: () => import('pages/userList.vue') },
    ],
    meta:{requiresAuth:true}
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
