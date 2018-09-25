<template>
  <div>
    <header-Top></header-Top>
    <main class="mainBox">
      <mt-swipe :auto="4000" id="slideBox">
        <mt-swipe-item class="slideImg1" ><div @click="toastClick">1</div></mt-swipe-item>
        <mt-swipe-item class="slideImg2"><div>2</div></mt-swipe-item>
        <mt-swipe-item class="slideImg3"><div>3</div></mt-swipe-item>
      </mt-swipe>
      <jiugongge></jiugongge>
      <guessLike></guessLike>
    </main>
    <footerBox></footerBox>
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: "index",
  data() {
    return {
    
    };
  },
  methods: {
    handleChange(index) {},
    toastClick: function() {
      Toast({
        message: '提示',
        position: 'center',
        duration: 1000
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slideBox {
  width: 100%;
  height: 200px;
  box-shadow: 0px 3px 4px 0px #00000047;
}
.slideImg1 {
  background: red;
}
.slideImg2 {
  background: yellow;
}
.slideImg3 {
  background: green;
}
</style>
