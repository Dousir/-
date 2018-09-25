<template>
    <div id="merchantlist">
        <ul class="merchantlist">
            <li class="clearfix" v-for="index in merchanList" :key="index.name">
               <router-link :to = index.link>
                    <div class="avatar f_l"><img src="../guessLike/images/guessimg.jpg"/></div>
                    <div class="shopRight f_l">
                        <p class="title">{{index.name}}</p>
                        <div class="clearfix moneyBox">
                            <span class="star f_l">
                                <i class="starImg" v-for="n in parseInt(index.start)" :key="n"></i>
                            </span>
                            <span class="moneyP f_l">￥{{index.money}}/人</span>
                            <span class="posi f_r">{{ index.posit }}</span>
                        </div>
                        <div class="tipsBox">
                            <span class="mainTips">{{index.tipsTitle}}</span>
                            <span class="tipsList" v-for="tips in index.tips" :key="tips">{{ tips }}</span>
                        </div>
                        <p class="takeaway" v-if="index.takeaway == true">支持外卖</p>
                        <div class="youhui">
                            <p>{{ index.youhui }}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    const merchanList = [
        {name:'11号打边炉1',start:'4',money:'70',posit:'沿江路111号',tipsTitle:'美食',tips:['回头客','东西好吃','还可以再来'],takeaway:true,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=11号打边炉'},
        {name:'11号打边炉2',start:'2',money:'70',posit:'沿江路111号',tipsTitle:'美食',tips:['回头客','东西好吃','还可以再来'],takeaway:true,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=11号打边炉'},
        {name:'11号打边炉3',start:'3',money:'70',posit:'沿江路111号',tipsTitle:'美食',tips:['回头客','东西好吃','还可以再来'],takeaway:true,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=11号打边炉'},
        {name:'11号打边炉4',start:'1',money:'70',posit:'沿江路111号',tipsTitle:'美食',tips:['回头客','东西好吃','还可以再来'],takeaway:true,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=11号打边炉'},
        {name:'11号打边炉5',start:'5',money:'70',posit:'沿江路111号',tipsTitle:'美食',tips:['回头客','东西好吃','还可以再来'],takeaway:true,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=11号打边炉'},
        {name:'江西老表烤鸭',start:'2',money:'40',posit:'东方新天地二楼',tipsTitle:'鸭子',tips:['烤鸭好棒','肉很厚','汁水很多'],takeaway:false,youhui:'单人下午茶72元，单人自助72元，单人自助7977元，20人自助1570元',link:'/shopmain?tips=江西老表烤鸭'}
    ]

export default {
    name:'merchantlist',
    data(){
        return {
            merchanList:merchanList
        }
    }
  
}
</script>

<style scoped>
#merchantlist{background: #fff;}
.merchantlist li{padding: 0.5rem 2% 0 2%;border-bottom: 1px solid #e5e5e5;}
.merchantlist li .avatar{max-width:33%;height:2.3rem;}
.merchantlist li .avatar img{width:100%;height: 100%;}
.merchantlist li .shopRight{width: 64%;margin-left: 3%}
.shopRight .title{font-size: 0.5rem;color: #333;}
.shopRight .moneyBox .star {height: 0.3rem;max-width: 2rem;line-height: 0.3rem;margin-right: 0.2rem;position: relative;top: 0.1rem}
.shopRight .moneyBox .star .starImg{background-image: url('../../assets/images/icon/star.png');width:0.3rem;height: 0.3rem;display: inline-block;background-size: 100% 100%;font-size: 0.3rem}
.shopRight .moneyBox .moneyP,.shopRight .moneyBox .posi{font-size: 0.35rem;color: #666;}
.shopRight .moneyBox .posi{width: 2.4rem;height: 0.6rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.tipsBox{width: 100%;height: .6rem;overflow: hidden;line-height: .5rem}
.tipsBox span{color: #666;font-size: .3rem}
.tipsBox .tipsList{display: inline-block;padding: 0.05rem 0.1rem;background:rgb(251, 244, 228) ;color:rgb(190, 158, 77);margin-left: 0.1rem ;font-size: .3rem}
.takeaway{color: rgb(108, 186, 178);font-size: 0.3rem;margin-top: 0.1rem;}
.youhui{margin-top: 0.2rem;padding: 0.2rem 0;    border-top: 1px solid #e5e5e5;}
.youhui p{font-size: 0.3rem; overflow: hidden;width: 100%;height: 0.4rem;line-height: 0.4rem;color: #666;white-space: nowrap;text-overflow: ellipsis}
</style>

