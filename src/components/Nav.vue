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
        width: 100px;
        position: fixed;
        top: 0;
        left: 0;
        width: 15%;
        height: 100%;
        line-height: 100px;
        border-radius: 0 30px 30px 0 ;
        text-align: left;
        border-bottom: 1px solid $light-grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        background-color: $primary-g-dark;
        a{  
            text-decoration: inherit;
            display: block;
            width: 100%;
            float: left;
            border-left: 1px solid $light-grey;
            height: 15%;
            &:first-of-type{
                
                
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