(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9762023e"],{"174f":function(e,t,n){},"27b9":function(e,t,n){"use strict";n("174f")},b11a:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),a=function(e){return Object(o["pushScopeId"])("data-v-45a75f00"),e=e(),Object(o["popScopeId"])(),e},c=a((function(){return Object(o["createElementVNode"])("h3",null,"进货管理",-1)})),i=Object(o["createTextVNode"])("搜索"),r=Object(o["createTextVNode"])("重置"),l=Object(o["createTextVNode"])("新增"),u=Object(o["createTextVNode"])("编辑"),d=Object(o["createTextVNode"])("删除");function m(e,t,n,a,m,b){var f=Object(o["resolveComponent"])("el-input"),p=Object(o["resolveComponent"])("el-form-item"),s=Object(o["resolveComponent"])("el-date-picker"),j=Object(o["resolveComponent"])("el-button"),O=Object(o["resolveComponent"])("el-form"),h=Object(o["resolveComponent"])("router-link"),g=Object(o["resolveComponent"])("el-table-column"),N=Object(o["resolveComponent"])("el-image"),w=Object(o["resolveComponent"])("el-popconfirm"),C=Object(o["resolveComponent"])("el-table"),V=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[c,Object(o["createVNode"])(O,{inline:!0,model:e.formInline,class:"demo-form-inline"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{label:"编号"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{modelValue:e.formInline.No,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formInline.No=t}),placeholder:"请输入编号"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(p,{label:"名称"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{modelValue:e.formInline.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formInline.name=t}),placeholder:"请输入名称"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(p,{label:"日期"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{modelValue:e.formInline.time,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.formInline.time=t}),type:"date",placeholder:"请选择日期"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{type:"primary",icon:e.Search,onClick:b.handleSearch},{default:Object(o["withCtx"])((function(){return[i]})),_:1},8,["icon","onClick"])]})),_:1}),Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{icon:e.Refresh,onClick:b.handleReset},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["icon","onClick"])]})),_:1})]})),_:1},8,["model"]),Object(o["createVNode"])(h,{to:"/stock/manage/add"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{class:"add",type:"primary",icon:e.Edit},{default:Object(o["withCtx"])((function(){return[l]})),_:1},8,["icon"])]})),_:1}),Object(o["createVNode"])(C,{data:e.tableData,border:"",style:{width:"100%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{prop:"No",label:"编号"}),Object(o["createVNode"])(g,{prop:"name",label:"名称"}),Object(o["createVNode"])(g,{label:"图片"},{default:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(N,{style:{width:"50%",height:"50%"},src:e.row.img},null,8,["src"])]})),_:1}),Object(o["createVNode"])(g,{prop:"number",label:"数量"}),Object(o["createVNode"])(g,{prop:"sum",label:"金额"}),Object(o["createVNode"])(g,{prop:"people",label:"进货人"}),Object(o["createVNode"])(g,{prop:"time",label:"进货日期"}),Object(o["createVNode"])(g,{label:"操作",width:"180"},{default:Object(o["withCtx"])((function(t){return[Object(o["createVNode"])(j,{icon:e.Edit,size:"small",onClick:function(e){return b.handleEdit(t.row.id)}},{default:Object(o["withCtx"])((function(){return[u]})),_:2},1032,["icon","onClick"]),Object(o["createVNode"])(w,{"confirm-button-text":"确认","cancel-button-text":"取消",title:"确认要删除该项吗？",icon:e.InfoFilled,onConfirm:function(e){return b.handleDelete(t.row.id)},"icon-color":"#626AEF"},{reference:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{size:"small",type:"danger",icon:e.Delete},{default:Object(o["withCtx"])((function(){return[d]})),_:1},8,["icon"])]})),_:2},1032,["icon","onConfirm"])]})),_:1})]})),_:1},8,["data"]),Object(o["createVNode"])(V,{style:{float:"right"},background:"",layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.page,total:e.total,onCurrentChange:b.handleCurrentChange},null,8,["page-size","current-page","total","onCurrentChange"])])}var b=n("d697"),f=n("2295"),p=n("df9f"),s=n("3eeb"),j=n("58f4"),O=n("415f"),h=n("dfee"),g={name:"StockManage",components:{},data:function(){return{tableData:b["f"],Delete:Object(o["markRaw"])(p["a"]),Edit:Object(o["markRaw"])(s["a"]),Search:Object(o["markRaw"])(j["a"]),Refresh:Object(o["markRaw"])(O["a"]),InfoFilled:Object(o["markRaw"])(h["a"]),total:1,page:1,pageSize:5,formInline:{No:"",name:"",time:new Date}}},methods:{handleEdit:function(e){window.location.href="/stock/manage/edit/".concat(e)},handleDelete:function(e){console.log(e),Object(f["a"])({title:"Success",message:"删除成功",type:"success"})},handleCurrentChange:function(e){this.page=e},handleSearch:function(){console.log(this.formInline)},handleReset:function(){this.formInline={No:"",name:"",time:new Date}}},mounted:function(){this.total=b["f"].length}},N=(n("27b9"),n("d959")),w=n.n(N);const C=w()(g,[["render",m],["__scopeId","data-v-45a75f00"]]);t["default"]=C},d697:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return u}));var o=[{id:1,isbn:"2022430001",name:"巧乐兹",price:"14.00",img:"https://img0.baidu.com/it/u=3178556882,378145805&fm=253&fmt=auto&app=138&f=JPEG?w=483&h=500",description:"香甜可口，人间美味，解暑神器",specifications:"500g"},{id:2,isbn:"2022430002",name:"方便面",price:"5.00",img:"https://img2.baidu.com/it/u=943611730,1086454726&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",description:"康师傅桶装",specifications:"500g"},{id:3,isbn:"2022430003",name:"乐事薯片",price:"7.00",img:"https://img1.baidu.com/it/u=2572024563,133479667&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350",description:"休闲零食美国经典原味",specifications:"70g"}],a=[{id:1,jobNo:"001",name:"张三",avator:"",work_time:"四年",wage:"14000",note:"优秀员工",type:"职工"},{id:2,jobNo:"002",name:"李四",avator:"",work_time:"一年一个月",wage:"8000",note:"一般员工",type:"职工"},{id:3,jobNo:"003",name:"王五",avator:"",work_time:"三年两个月",wage:"10000",note:"普通员工",type:"职工"},{id:4,jobNo:"004",name:"赵六",avator:"",work_time:"三年",wage:"",note:"无",type:"供应商"}],c=[{id:1,No:"001",name:"面包",img:"",number:100,sum:400},{id:2,No:"002",name:"饼干",img:"",number:50,sum:400},{id:3,No:"003",name:"豆腐干",img:"",number:100,sum:400},{id:4,No:"004",name:"可乐",img:"",number:200,sum:600}],i=[{id:1,No:"001",name:"面包",img:"",number:100,sum:400,people:"张三",time:"2022-05-06"},{id:2,No:"002",name:"饼干",img:"",number:50,sum:400,people:"张三",time:"2022-05-06"},{id:3,No:"003",name:"豆腐干",img:"",number:100,sum:400,people:"张三",time:"2022-05-06"},{id:4,No:"004",name:"可乐",img:"",number:200,sum:600,people:"张三",time:"2022-05-06"}],r=[{id:1,No:"001",name:"面包",img:"",number:100},{id:2,No:"002",name:"饼干",img:"",number:50},{id:3,No:"003",name:"豆腐干",img:"",number:100},{id:4,No:"004",name:"可乐",img:"",number:200}],l="admin",u="12345"}}]);
//# sourceMappingURL=chunk-9762023e.fd91d8a3.js.map