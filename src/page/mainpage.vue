<template>
    <div>
        <header-Top></header-Top>
        <jiugongge></jiugongge>
        <div class="top-placeholder"><span class="top-placeholder-inner">附近商家</span></div>
        <merchantlist></merchantlist>
    </div>
</template>


<script >
import { Toast } from 'mint-ui'
import '../assets/style/main.css'
export default{
    name:'madinpage',
    data(){
        return{
            page:'这里是第二页'
        }
    }
}
</script>
<style scoped>
.top-placeholder {
    padding: 0 !important;
    background: #fff;
    height: 1.2rem;
    line-height: 1.4rem;
    margin-top:.23rem;
    text-align: center;
}
.top-placeholder-inner {
    position: relative;
    font-size: 0.5rem;  
    color: #333;
    font-weight: bold;
    
}
.top-placeholder-inner:before, .top-placeholder-inner:after {
    content: '';
    position: absolute;
    top: 0.3rem;
    width: 0.8rem;
    height: 0;
    font-size: 0;
    border-top: 1px solid #333;
    -webkit-transform: scaleY(0.5);
    -moz-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.top-placeholder-inner:before {
    left: -1.3333333rem;
}
.top-placeholder-inner:after {
    right: -1.3333333rem;
}
</style>
