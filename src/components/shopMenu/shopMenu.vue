<template>
    <div id="shopMenu">
        <div>
            <div class="shopMenuLeft">
                <ul id="shopMenuLeftUl">
                    <li v-for="(item,index) in menuLeft" :key="item" @click="childFoods(index,$event)" v-bind:class='{active:index==active}'>{{ item }}</li>
                </ul>
            </div>
            <div class="shopMenuRight">
                <ul class="shopMenuRightUl">
                    <li v-for="item in childFoodsList" :key="item.name" >
                        <div class="foodsImg">
                            <img :src="item.icon"/>
                        </div>
                        <div class="foodsMain">
                            <p class="title">{{ item.name }}</p>
                            <p class="introduction">{{item.description}}</p>
                            <p class="introduction">月销：{{item.sellCount}}　好评：{{item.rating}}</p>
                            <div class="moneyNum clearfix">
                                <div class="money f_l"><span>￥{{item.price}}</span><span v-if="item.oldPrice" class="oldPrice">￥{{item.oldPrice}}</span></div>
                                <div class="addPurchase f_r ">
                                    <cartcontrol :itemprop='item' v-on:chuanzhi="chuanzhi"  @increment="incrementTotal"></cartcontrol>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <shopcart :shopCartList="shopCartList" :dataList="dataList" @increment="incrementTotal"></shopcart>
    </div>
</template>
<script>
import Vue from "vue";
import data from "../../assets/js/json/data.json";
import cartcontrol from "../cartcontrol/cartcontrol";
import shopcart from "../shopcart/shopcart";
const dataList = new Set();
export default {
  name: "shopMenu",
  data() {
    return {
      menuLeft: "",
      childFoodsList: "",
      data: data,
      active: "0",
      shopCartList: {},
      dataList:this.dataList
    };
  },
  mounted() {
    this.menuLeftF();
  },
  methods: {
    menuLeftF() {
      let goodsName = [];
      for (let key in data.goods) {
        goodsName.push(data.goods[key].name);
      }
      this.menuLeft = goodsName;
      setTimeout(() => {
        var firstDom = document.getElementById("shopMenuLeftUl").firstChild;
        firstDom.click();
      }, 50);  
    },
    childFoods(index, e) {
      this.active = index;
      let firstType = e.target.innerText;
      let childType = [];
      for (let key in data.goods) {
        if (data.goods[key].name == firstType) {
          this.childFoodsList = data.goods[key].foods;
          continue;
        }
      }
    },
    incrementTotal(target) {
      this.$refs.shopCart.drop(target);
    },
    chuanzhi(data) {
      let shopCartList = {};
      dataList.add(data);
      let singleTotalPriceList = [];
      let amountList = [];
      for (let item of dataList.keys()) {
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
      shopCartList["dataList"] = dataList;
      this.shopCartList = shopCartList;
    }
  },
  components: {
    cartcontrol,
    shopcart
  }
};
</script>

<style scoped>
#shopMenu {
  width: 100%;
  height: 100%;
  position: fixed;
}
.shopMenuLeft {
  width: 30%;
  border-right: 1px solid #eee;
  font-size: 0.5rem;
  height: 100%;
  left: 0;
  z-index: 1;
  background: #fff;
  position: fixed;
  top: 0;
  overflow: scroll;
}
.shopMenuLeft::-webkit-scrollbar {
  display: none;
}
.shopMenuLeft ul {
  width: 100%;
  padding: 87px 0 1.5rem 0;
}
.shopMenuLeft ul li {
  width: 100%;
  text-align: center;
  min-height: 1.5rem;
  line-height: 1.5rem;
  border-bottom: 1px solid #eee;
  font-size: 0.35rem;
}
.shopMenuLeft ul li.active {
  background: #e8e8e8;
}
.shopMenuRight {
  width: 66%;
  right: 0;
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  padding-left: 2%;
  z-index: 1;
  position: fixed;
  top: 0;
}
.shopMenuRight::-webkit-scrollbar {
  display: none;
}
.shopMenuRightUl {
  padding-bottom: 1.5rem;
  padding-top: 87px;
}
.shopMenuRightUl li {
  display: flex;
  padding: 0.2rem 0 0.2rem 0.1rem;
  border-bottom: 1px solid #eee;
  position: relative;
}
.shopMenuRightUl .foodsImg {
  width: 3rem;
  max-height: 2rem;
}
.shopMenuRightUl .foodsImg img {
  width: 100%;
  height: 100%;
}
.shopMenuRightUl .foodsMain {
  margin-left: 0.1rem;
  width: 100%;
}
.shopMenuRightUl .foodsMain .title {
  font-size: 0.4rem;
  color: #333;
}
.shopMenuRightUl .foodsMain .introduction {
  font-size: 0.3rem;
  color: #999;
}
.shopMenuRightUl .foodsMain .moneyNum .money {
  color: #fe4d3d;
  font-size: 0.4rem;
  font-weight: bold;
}
.oldPrice {
  color: #999;
  font-weight: normal;
  font-size: 0.32rem;
  margin-left: 0.3rem;
}

</style>

