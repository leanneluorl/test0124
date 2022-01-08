<template>
    <div class="nav-box">
        <router-link class="nav-home" to="/">
            <div class="logo-wrap">
                <img src="./../img/logo_yellow.png" alt="" class="logo">
                <p>Bike Fun！自行車旅遊網</p>
            </div>
        </router-link>
        <router-link v-for="item in navItems"
            :to="item.link" :key="item.key"
            >
            <div class="nav-item" >
                        <span class="nav-link"> {{ item.key }} </span>
            </div>
        </router-link> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            navItems:[
                {
                    link: "/news",
                    key: "最新消息"
                },
                {   
                    link: "/direction",
                    key: "探索路線"
                },
                {
                    link: "/station",
                    key: "尋找站點"
                },
                {
                    link: "/info",
                    key: "常見問題"
                }
            ],
        }
    },
    computed: {

    }
}
</script>

<style lang="scss">
    .nav-box{
        overflow: hidden;
        max-width: 1440px;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        line-height: 100px;
        background-color: #fff;
        border-radius: 50px 50px 0 0 ;
        text-align: center;
        border-bottom: 1px solid $light-grey;
        
        a{  
            text-decoration: inherit;
            display: inline-block;
            width: 18%;
            float: left;
            vertical-align: middle;
            border-left: 1px solid $light-grey;
            
            &:first-of-type{
                width: 28%;
                height: 100%;
                @extend .flex-nowrap;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                line-height: 100%;
                border-left: none;
                img{
                    max-width: 133px;
                }
                font-size: 10px;
            }
            &.router-link-exact-active {
                color: #fff;
                font-weight: bold;
                background-color: $primary-o;
            }

        }
    }
</style>