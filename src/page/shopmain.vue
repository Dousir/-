<template>
    <div id="shopmain">
        <header-Top></header-Top>
        <div class="page-navbar">


           
        <!-- navbar -->
            <mt-navbar class="page-part"  v-model="selected">
                <mt-tab-item id="tab-container1">菜单</mt-tab-item>
                <mt-tab-item id="tab-container2">评论</mt-tab-item>
                <mt-tab-item id="tab-container3">商家</mt-tab-item>
            </mt-navbar>
            <mt-tab-container class="page-tabbar-tab-container" v-model="selected" >
                <mt-tab-container-item id="tab-container1">
                <!-- cell组件 -->
                     <shopMenu></shopMenu>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                <!-- cell组件 -->
                    <comment></comment>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                <!-- cell组件 -->
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
    data(){
        return{
            selected:'tab-container1',
        }
    },
}

</script>
<style scoped>
.mint-navbar{position: relative;z-index: 3;}
</style>


