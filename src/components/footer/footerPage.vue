<template>
    <footer id="footerBox">
        <div class="footer-copyright">
            <div class="hr"></div>
            <span class="footer-copyright-text">©2018 豆森科技 </span>
        </div>
    </footer>
</template>
<script>
export default {
    name:'footerBox',
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.footer-copyright{color: #999;    font-size: .22rem;text-align: center;position: relative;height: 40px;line-height: 40px}
.copyRight{font-size: 1rem;}
.footer-copyright .hr {
    display: block;
    content: "";
    width: 100%;
    position: absolute;
    top: 50%;
    border-top: 1px solid #999;}
    .footer-copyright-text {
    position: relative;
    padding: 0 .3rem;
    background-color: #f0efed;
}
</style>

