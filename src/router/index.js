import { createRouter, createWebHashHistory } from 'vue-router';

import Discover from '../components/Discover.vue'
import Friends from '../components/Friends.vue'
import My from '../components/My.vue'
import Toplist from '../components/Recomond.vue'
import Songlist from '../components/Songlist.vue'
import Product from '../components/Product.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect:"/discover"},
        {path:'/discover', component:Discover,
            children: [
                {path:"toplist",component:Toplist},
                {path:"playlist",component:Songlist},
            ]
    },    
        {path:'/friends', component:Friends},
        {path:'/my', component:My,
            children: [
                {path:":id",component:Product, props:true},
            ]
    },
    ]
})

export default router;
