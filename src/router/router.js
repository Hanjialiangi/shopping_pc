import { createRouter,createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

const token = Cookies.get('token');
let routers =[];
if(token){
 routers=[{
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
},{
    path:'/:pathMatch(.*)',
    redirect:'/goods/manage'
}]
}else{
    routers=[{
        path:'/',
        redirect:'/login'
    },{
        path:'/login',
        component:()=>import('../pages/Login.vue')
    },{
        path:'/:pathMatch(.*)', //vue3 正则匹配/:pathMatch(.*)或者/:pathMatch(.*)* 或者/:catchAll(.*)
        redirect:'/login'
    }]
}

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
  })

export default router
