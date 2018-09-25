<template>
     <div id="guess">
         <h2 class="title">猜你喜欢的</h2>
         <ul class="guessUl">
             <li class="clearfix">
                <div class="guessImg f_l">
                    <img src="../guessLike/images/guessimg.jpg"/>
                </div>
                <div class="guessText f_l">
                    <p class="guessTextTitle">旺顺阁鱼头泡饼</p>
                    <p class="guessTextData">[王府井/东单]100元代金券1张，可叠加3张</p>
                    <p class="guessTextMoney clearfix">
                        <span class="f_l money">66元</span>
                        <span class="f_l discount">门市价:66元</span>
                        <span class="f_r recording">已售41584</span>
                    </p>
                </div>
             </li>
             <li class="clearfix">
                <div class="guessImg f_l">
                    <img src="../guessLike/images/guessimg.jpg"/>
                </div>
                <div class="guessText f_l">
                    <p class="guessTextTitle">旺顺阁鱼头泡饼</p>
                    <p class="guessTextData">[王府井/东单]100元代金券1张，可叠加3张</p>
                    <p class="guessTextMoney clearfix">
                        <span class="f_l money">66元</span>
                        <span class="f_l discount">门市价:66元</span>
                        <span class="f_r recording">已售41584</span>
                    </p>
                </div>
             </li>
             <li class="clearfix">
                <div class="guessImg f_l">
                    <img src="../guessLike/images/guessimg.jpg"/>
                </div>
                <div class="guessText f_l">
                    <p class="guessTextTitle">旺顺阁鱼头泡饼</p>
                    <p class="guessTextData">[王府井/东单]100元代金券1张，可叠加3张</p>
                    <p class="guessTextMoney clearfix">
                        <span class="f_l money">66元</span>
                        <span class="f_l discount">门市价:66元</span>
                        <span class="f_r recording">已售41584</span>
                    </p>
                </div>
             </li>
             <li class="clearfix">
                <div class="guessImg f_l">
                    <img src="../guessLike/images/guessimg.jpg"/>
                </div>
                <div class="guessText f_l">
                    <p class="guessTextTitle">旺顺阁鱼头泡饼</p>
                    <p class="guessTextData">[王府井/东单]100元代金券1张，可叠加3张</p>
                    <p class="guessTextMoney clearfix">
                        <span class="f_l money">66元</span>
                        <span class="f_l discount">门市价:66元</span>
                        <span class="f_r recording">已售41584</span>
                    </p>
                </div>
             </li>
         </ul>
         <div class="readMore clearfix">
            <a >
                <span class="f_l">查看全部团购</span>
                <i class="f_r">></i>
            </a>
            
         </div>
     </div>
</template>

<script>

export default {
    name:'guess',
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
#guess{background: #fff;padding-left: .2rem;margin-top: .23rem;border-bottom: 1px solid #DDD8CE;}
.title{ font-size: 0.4rem;color: #333;padding: .5rem .5rem .4rem 0;font-weight: normal;border-bottom: 1px solid #DDD8CE}
.guessUl{font-size: 1rem;padding: 0;margin: 0;}
.guessUl li{width: 100%;padding: 0.4rem 0;position: relative;min-height: 2rem;border-bottom: 1px solid #DDD8CE}
.guessImg{width:34%;height:2.5rem;}
.guessImg img{width: 100%;height: 100%;}
.guessText{color: #333;min-height: 2rem;padding-right: 0.3rem;width: 60%;margin-left: 2%}
.guessText .guessTextTitle{font-size: 0.4rem;}
.guessText .guessTextData{font-size: 0.3rem}
.guessText .guessTextMoney{margin-top: 0rem}
.guessText .guessTextMoney .money{color: #06c1ae;font-size: 0.5rem}
.guessText .guessTextMoney .discount{color: #666;font-size: 0.3rem;position: relative;top: 0.15rem;margin-left: 0.1rem}
.guessText .guessTextMoney .recording{font-size: 0.3rem;color: #666;position: relative;top: .15rem;}
.readMore {color: #06c1ae;padding: 0.4rem 0}
.readMore .f_l{margin-left:.5rem}
.readMore .f_r{margin-right: .5rem}
.readMore .f_l,.readMore a .f_r{font-size: .4rem;}
</style>

