
<template>
    <header class="header">
        <div class="logo-image">
            <img src="./../img/urkitchen_head.png" alt="" class="logo-white">
        </div>
        <div class="serach-box yellow">
            <form>
                <input type="text" placeholder="Search Recipe..." id="searchRecipe">
                <input type="button" onclick="searchRecipes();"/>
            </form>
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
        margin: 0;
        border: 0;
        font-size: 0;
        width: auto;
        height: 25vh;
        background-color: $primary-g;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        align-items: flex-end;
        .logo-image{
            width: 100%;
            height: fit-content;
            flex: 0 1 auto;
            text-align: right;
            img{
                width: 85%;
                min-width: calc( 100% - 100px);
                height: auto;
            }
        }

        .serach-box {
            flex: 1 1 auto;
            width: 70%;
            text-align: right;
            border-radius: 20px;
            @extend .flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            font-size: 16px;
            input[type='button'] {
                background: url(./../img/svg/search.svg) no-repeat center center / 80% 80%, #ccc;
                width: 24px;
                height:24px;
                margin-left: 5px;
                &:hover {
                    filter: contrast(1) invert(1);
                    background-color: $primary-g-dark;
                }
            }
        }
    }
</style>