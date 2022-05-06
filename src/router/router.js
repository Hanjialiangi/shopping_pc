import { createRouter,createWebHistory } from 'vue-router'


const routers=[{
    path:'/',
    redirect:'/goods/manage'
},{
    path:'/home',
    redirect:'/goods/manage'
},{
    path:'/goods/manage',
    component:()=>import('../pages/GoodsManage.vue')
},{
    path:'/personal/manage',
    component:()=>import('../pages/PersonalManage.vue')
},{
    path:'/sell/manage',
    component:()=>import('../pages/SellManage.vue')
},{
    path:'/stock/manage',
    component:()=>import('../pages/StockManage.vue')
},{
    path:'/depot/manage',
    component:()=>import('../pages/DepotManage.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
  })

export default router
