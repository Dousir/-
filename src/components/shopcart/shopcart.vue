<template>
    <div id="shopcart">
        <div class="mask" v-show='toggle' @click="listLogoShow()"></div>
        <div class="logo">
            <img  src="../../assets/images/Logo.jpg" class="logoImg" @click="listLogoShow()"/>
            <mt-badge size="small" class="tips" v-if="shopCartList.len">{{shopCartList.len}}</mt-badge>
        </div>
        <div  class="moneyBox" v-if=" shopCartList.totalPrice">
            <p class="money">￥{{shopCartList.totalPrice}}</p>
            <p class="tips">配送费以订单为准</p>
        </div>
        <div class="submitBtnBox">
            <mt-button type="primary" class="submitBtn">去买单</mt-button>
        </div>
        <div class="shopcartListBox" v-show='toggle'>
            <p class="clearfix tipsBox">
                <span class="f_l tips">餐盒费3元</span>
                <span class="f_r tips"><i></i>清空购物车</span>
            </p>
            <ul class="shopcartListUl">
                <li class="clearfix" v-for="item in cartDatalist"   v-if="item.count">
                    <div class="f_l name">{{item.name}}</div>
                    <div class="f_l money">￥{{item.price*item.count}}</div>
                    <cartcontrol :itemprop='item' v-on:chuanzhi="chuanzhi"  @increment="incrementTotal" class="f_r"></cartcontrol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import cartcontrol from "../cartcontrol/cartcontrol";
export default {
  name: "shopcart",
  props: {
    shopCartList: {
      type: Object
    },
  },
  data() {
    return {
      toggle: false,
      shopList: 0,
      shopCart: this.shopCartList,
      cartDatalist: {},
    };
  },
  methods: {
    listLogoShow() {
      this.cartDatalist = Array.from(this.shopCartList.dataList);
      if (this.toggle == false) {
        this.toggle = true;
        document.getElementById("shopcart").style.backgroundColor ="rgba(0,0,0,0.9)";
      } else {
        this.toggle = false;
        document.getElementById("shopcart").style.backgroundColor ="rgba(0,0,0,0.5)";
      }
    },
     incrementTotal(target) {
      this.$refs.shopCart.drop(target);
    },
    chuanzhi(data) {
      let shopCartList = {};
      this.shopCartList.dataList.add(data);
      let singleTotalPriceList = [];
      let amountList = [];
      for (let item of this.shopCartList.dataList.keys()) {
        let price = item.count * item.price;
        if (price != 0) {
          amountList.push(item.count);
          singleTotalPriceList.push(price);
        }
      }
      let amount = 0;
      for (var i = 0; i < amountList.length; i++) {
        amount += amountList[i];
      }
      let totalPrice = 0;
      for (var i = 0; i < singleTotalPriceList.length; i++) {
        totalPrice += singleTotalPriceList[i];
      }
      shopCartList["totalPrice"] = totalPrice;
      shopCartList["len"] = amount;
      shopCartList["dataList"] = this.shopCartList.dataList;
      this.shopCartList = shopCartList;
    }
  
  },
  components:{
      cartcontrol
  }
};
</script>
 <style scoped>
#shopcart {
  position: fixed;
  bottom: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 1.5rem;
}
.logo {
  position: relative;
  width: 1.7rem;
  height: 1.7rem;
}
.logoImg {
  width: 1.7rem;
  height: 1.7rem;
  border: 0.01rem solid #35495e;
  border-radius: 2rem;
  position: absolute;
  top: -0.3rem;
  left: 0.3rem;
  z-index: 5;
}
.logo .tips {
  position: absolute;
  right: -0.5rem;
  top: -0.6rem;
  z-index: 2;
}
.moneyBox {
  position: absolute;
  top: 0.04rem;
  left: 2.5rem;
}
.moneyBox .money {
  color: #fff;
  font-size: 0.65rem;
}
.moneyBox .tips {
  color: #999;
}
.submitBtnBox {
  height: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
}
.submitBtn {
  height: 1.5rem;
  border-radius: 0;
  padding: 0 0.7rem;
}
.shopcartListBox {
  position: absolute;
  bottom: 1.5rem;
  background: #fff;
  width: 100%;
  z-index: 4;
}
.tipsBox {
  background: #f4f4f4;
  padding: 0.2rem;
}
.tipsBox .tips.f_l {
  color: #999;
  font-size: 0.4rem;
}
.tipsBox .tips.f_r {
  color: #444;
  font-size: 0.4rem;
}
.shopcartListUl {
  padding-bottom: 0.2rem;
  max-height: 7rem;
  overflow: scroll;
}
.shopcartListUl li {
  padding: 0.3rem 0 0.3rem 0;
  border-bottom: 1px solid #ddd;
  width: 90%;
  margin: 0 auto;
}
.shopcartListUl li .name {
  font-size: 0.5rem;
}
.shopcartListUl li .money {
  font-size: 0.45rem;
  margin-left: 0.3rem;
  position: relative;
  top: 0.1rem;
  color: #fe4d3d
}
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: -1.5rem;
  left: 0;
  z-index: 3;
}
.addPurchase {
  position: relative;
  top: 0.1rem  
}
.addPurchase .num {
  border: none;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  display: inline-block;
  margin: 0 0.25rem;
}
.addPurchase .lessSpan,
.addPurchase .addSpan {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 0.35rem;
  font-size: 0.4rem;
  font-weight: bold;
}
.addPurchase .lessSpan {
  border: 1px solid #999;
}
.addPurchase .addSpan {
  border: 1px solid #fe4d3d;
  background: #fe4d3d;
  color: #fff;
}
</style>
