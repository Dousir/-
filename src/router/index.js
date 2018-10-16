import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index' //首页
import mainpage from '@/page/mainpage' //九宫格点入
import shopmain from '@/page/shopmain' //店铺详情
import headerTop from '@/components/headerTop' //公用头部
import jiugongge from '@/components/jiugongge/jiugongge' //九宫格
import guessLike from '@/components/guessLike/guessLike' //猜你喜欢
import merchantlist from '@/components/merchantlist/merchantlist' //附近商家
import shopMenu from '@/components/shopMenu/shopMenu' //菜单
import comment from '@/components/comment/comment'
import star from '@/components/star/star'

Vue.use(Router)
Vue.component('header-Top', headerTop)
Vue.component('jiugongge', jiugongge)
Vue.component('guessLike', guessLike)
Vue.component('merchantlist', merchantlist)
Vue.component('shopMenu', shopMenu)
Vue.component('comment', comment)
Vue.component('star', star)

export default new Router({
        routes: [{
                        path: '/',
                        name: 'index',
                        component: index
                },
                {
                        path: '/mainpage',
                        name: '',
                        component: mainpage
                },
                {
                        path: '/shopmain',
                        name: '',
                        component: shopmain
                }
        ],
})