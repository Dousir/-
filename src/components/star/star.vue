<template>
  <div class="star">
    <div class="star-item" :class="starType">
      <img v-for="itemClass in itemClasses" :class="itemClass" class=" strart" src="../../assets/images/icon/star24_on@2x.png"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style>
.star{margin-right: 5px;margin-left: 5px;}
.strart.on{display: block;}
.strart.off{display: none;}
.star-item.star-36{display: flex;}
</style>

