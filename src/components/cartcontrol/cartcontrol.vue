<template>
    <div id="cartcontrol" class="addPurchase clearfix">
        <div class="lessNum f_l" v-show="itemprop.count>0">
            <span class="lessSpan" v-on:click="decrement($event)">-</span>
            <span class="num">{{itemprop.count}}</span>
        </div>
        <div class="addSpan f_l" v-on:click="increment($event)">+</div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:'cartcontrol',
    props:{
        itemprop: {
        type: Object
      }
    },
     data () {
        return {
            
        }
    },
    methods:{
         increment() {
             if (!this.itemprop.count) {
                Vue.set(this.itemprop, 'count', 1);
             } else {
                this.itemprop.count++;
             }
            this.$emit('chuanzhi',this.itemprop)
        },
        decrement(e){
            if (!this.itemprop.count) {
                Vue.set(this.itemprop, 'count', 0);
             } else {
                this.itemprop.count--;
             }
             this.$emit('chuanzhi',this.itemprop)
        },
    }
}
</script>

<style scoped>
.addPurchase .num{border: none;text-align: center;height: 0.5rem;font-size: 0.38rem;position:relative;top:-0.025rem;margin: 0 0.1rem}
.addPurchase .lessSpan{width: 0.5rem;height: 0.5rem;border-radius: 0.6rem;text-align: center;line-height: 0.45rem;font-size: 0.5rem;font-weight: bold;display: inline-block;}
.addPurchase .addSpan{width: 0.5rem;height: 0.5rem;border-radius: 0.6rem;text-align: center;line-height: 0.45rem;font-size: 0.5rem;font-weight: bold;display: inline-block;margin-right: 0.3rem}
.lessSpan{border:1px solid #999;}
.addSpan{border:1px solid #fe4d3d;background: #fe4d3d;color: #fff;}
</style>

