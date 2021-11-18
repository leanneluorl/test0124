
<template>
    <header class="header">
        <div class="logo-image">
            <img src="./../img/logo_white.png" alt="" class="logo-white">
            <p>Bike Fun！自行車旅遊網</p>
        </div>
        <Navbar />
    </header>
</template>

<script>
import Navbar from './Nav.vue';
export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
    header.header{
        width: auto;
        height: 70vh;
        background: url("./../img/bg-index.jpg") no-repeat top -30px center / 1440px auto;
        position: relative;
        @extend .flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        .logo-image{
            width: 55%;
            padding-bottom: 15vh;
            margin:auto;
            position: relative;
            img{
                width: 38vw;
                text-align: left;
            }
            p {
                text-align: right;
                color: #fff;
                margin-block-end: 0;
                margin-block-start: 0;
            }
        }
    }
</style>