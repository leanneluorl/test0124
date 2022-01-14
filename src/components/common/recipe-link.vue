<template>
    <div class="recipe-link">
        <h5 class="recepi-link-title">{{recipeTitle}}</h5> 
        <div class="recipe-link-main-image-wrap">
            <img :src="getImgURL()" :alt="recipeTitle" class="recipe-link-main-image">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recipeTitle: {
            type: String,
            default: "test"
        },
        recipeID: {
            type: String,
            default: "test"
        }
    },
    getImgURL(imgName) {
        return require("./../../img/"+imgName+".jpg");
    }
};
</script>

<style lang="scss">
    .recipe-link {
        width: 100%;
        &-main-image-wrap {
            height: 85%;
        }
    }
</style>