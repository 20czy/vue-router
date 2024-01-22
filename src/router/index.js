import { createRouter, createWebHashHistory } from 'vue-router';

import Discover from '../components/Discover.vue'
import Friends from '../components/Friends.vue'
import My from '../components/My.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/discover', component:Discover},
        {path:'/friends', component:Friends},
        {path:'/my', component:My},
    ]
})

export default router;
