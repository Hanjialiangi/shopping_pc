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
    path:'/goods/manage/add',
    component:()=>import('../pages/GoodsManage/GoodsAdd.vue')
},{
    path:'/goods/manage/edit/:id',
    component:()=>import('../pages/GoodsManage/GoodsEdit.vue')
},{
    path:'/personal/manage',
    component:()=>import('../pages/PersonalManage.vue')
},
{
    path:'/personal/manage/add',
    component:()=>import('../pages/PersonalManage/PersonalAdd.vue')
},
{
    path:'/personal/manage/edit/:id',
    component:()=>import('../pages/PersonalManage/PersonalEdit.vue')
},{
    path:'/sell/manage',
    component:()=>import('../pages/SellManage.vue')
},
{
    path:'/sell/manage/add',
    component:()=>import('../pages/SellManage/SellAdd.vue')
},
{
    path:'/sell/manage/edit/:id',
    component:()=>import('../pages/SellManage/SellEdit.vue')
},{
    path:'/stock/manage',
    component:()=>import('../pages/StockManage.vue')
},
{
    path:'/stock/manage/add',
    component:()=>import('../pages/StockManage/StockAdd.vue')
},
{
    path:'/stock/manage/edit/:id',
    component:()=>import('../pages/StockManage/StockEdit.vue')
},{
    path:'/depot/manage',
    component:()=>import('../pages/DepotManage.vue')
},{
    path:'/depot/manage/add',
    component:()=>import('../pages/DepotManage/DepotAdd.vue')
},{
    path:'/depot/manage/edit/:id',
    component:()=>import('../pages/DepotManage/DepotEdit.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
  })

export default router
