<template>
    <div id="jiugongge">
        <ul class="jiugonggeUl clearfix">
            <li v-for="data in jiugongge" :key="data.src">
                <router-link :to= data.link >
                    <img :src="data.src" name='' title="" />
                    <p>{{ data.text }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
      jiugongge: ''
    };
  },
  mounted(){
    this.init()
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      let jiugonggeLIst = [];
      if(this.$route.query.tips == null){
        jiugonggeLIst = [
          { src: require("../jiugongge/images/jiugongge01.jpg"), text: "美食",link:'/mainpage?tips=美团外卖&&name=新中国'},
          { src: require("../jiugongge/images/jiugongge02.jpg"), text: "猫眼电影",link:'/mainpage?tips=美团外卖' },
          { src: require("../jiugongge/images/jiugongge03.jpg"), text: "酒店" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge04.jpg"), text: "休闲娱乐",link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge05.jpg"), text: "外卖" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge06.jpg"), text: "KTV" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge07.jpg"), text: "周边游" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge08.jpg"), text: "丽人" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge09.jpg"), text: "小吃快餐",link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/jiugongge10.jpg"), text: "车票" ,link:'/mainpage?tips=美团外卖'},
        ];
      this.jiugongge = jiugonggeLIst
      }else{
       jiugonggeLIst = [
          { src: require("../jiugongge/images/waimai/jiugongge01.jpg"), text: "美食",link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge02.jpg"), text: "美团超市",link:'/mainpage?tips=美团外卖' },
          { src: require("../jiugongge/images/waimai/jiugongge03.jpg"), text: "生鲜果蔬" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge04.jpg"), text: "美团专送",link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge05.jpg"), text: "下午茶" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge06.jpg"), text: "汉堡披萨" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge07.jpg"), text: "小吃馆" ,link:'/mainpage?tips=美团外卖'},
          { src: require("../jiugongge/images/waimai/jiugongge08.jpg"), text: "家常菜" ,link:'/mainpage?tips=美团外卖'},
        ];
        this.jiugongge = jiugonggeLIst;
      }
    }
  }
};
</script>

<style scoped>
#jiugongge{background: #fff;padding-bottom: .5rem;border-top: 1px solid #DDD8CE;margin-top: .23rem;  box-shadow: 0px 3px 4px 0px #00000047;padding-top: 0.5rem}
.jiugonggeUl {
  width: 100%;
  margin: 0;
  padding: 0;
}
.jiugonggeUl li {
  float: left;
  width: 20%;
  text-align: center;
  padding: .2rem 0;
}
.jiugonggeUl li p{margin: 0 auto;font-size: .3rem;color: #666;margin-top: 0.1rem}
.jiugonggeUl li a img{width: 60%;height: auto}
</style>


