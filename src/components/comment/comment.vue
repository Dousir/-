<template>
     <div id="comment">
       <div class="ratings-content">
          <div class="headerBox" :style="{backgroundImage: 'url(' + seller.avatar + ')'}">
            <img :src="seller.avatar"/>
            <div class="optionBox"></div>
            <div class="shopNametext">
              <h1>{{seller.name}}</h1>
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
          <div class="overview">
            <div class="overview-left">
              <h1 class="score">{{seller.score}}</h1>
              <div class="title">综合评分</div>
              <div class="rank">高于周边商家{{seller.rankRate}}%</div>
            </div>
            <div class="overview-right">
              <div class="score-wrapper">
                <span class="title">服务态度</span>
                <star :size="36" :score="seller.serviceScore"></star>
                <span class="score">{{seller.serviceScore}}</span>
              </div>
              <div class="score-wrapper">
                <span class="title">商品评分</span>
                <star :size="36" :score="seller.foodScore"></star>
                <span class="score">{{seller.foodScore}}</span>
              </div>
              <div class="delivery-wrapper">
                <span class="title">送达时间</span>
                <span class="delivery">{{seller.deliveryTime}}分钟</span>
              </div>
            </div>
          </div>
        </div>
        <div class="split"></div>
        
        <!-- 评论 -->
        <ratings></ratings>
     </div>
</template>

<script>





import data from "../../assets/js/json/data.json";
import '../../components/comment/style.css';
console.log(data);
export default {
  data() {
    return {
      seller: data.seller
    };
  }
};
</script>
