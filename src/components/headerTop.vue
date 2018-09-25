<template>
    <header class="mint-header">
        <div class="mint-header-button is-left">
            <a @click="goBack" class="router-link-active">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span> 
                    <label class="mint-button-text"></label>
                </button>
            </a>
        </div> 
        <h1 class="mint-header-title">{{title}}</h1>
        <div class="mint-header-button is-right headerRightIcon">
            <button class="mint-button mint-button--default mint-button--normal" @click="showToggle">
                <span class="mint-button-icon">
                    <i class="mintui mintui-more"></i>
                </span> 
                <label class="mint-button-text"></label>
            </button>
            <ul class="headermenuUl" v-show='toggle'>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/">首页</router-link></li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
  name: "headerTop",
  data() {
    return {
      title: "",
      toggle: false
    };
  },
  created(){
    this.urlTips()
  },
  methods: {
    showToggle(e) {
      var status = this.toggle;
      if (status == false) {
        this.toggle = true;
      } else {
        this.toggle = false;
      }
    },
    urlTips(){
        if(this.$route.query.tips == undefined){
            this.title = '天天向上'
        }else{
            this.title = this.$route.query.tips
        }
    },
    goBack(){
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped>

.headerRightIcon{position: relative;
    right: 0.3rem;}
.mintui-more{color: #fff;}
header{
    padding: 3px 5px;
    box-sizing: border-box;
    background-color: #35495e;
    position: relative;
    z-index: 2;
}
h1{ margin: 0 88px;
    height: 40px;
    width: auto;
    overflow:initial;
    text-overflow:initial;
    white-space: nowrap;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    }
.headermenuUl {
  position: fixed;
  z-index: 2;
  width: 40%;
  right: 0;
  top: 40px;
  padding: 0;
  text-align: center;
  background: #f7f7f7;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
}
.headermenuUl li {
  height: 50px;
  line-height: 50px;
}
</style>


