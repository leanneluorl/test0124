import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export const mixin = {
computed: { 
    ...mapState('Recipes', ['recipes','catalog']),
    ...mapGetters('Recipes', ['recipesGetter','foodTypeGetter']),
    recipesData() {
        return this.recipesGetter
    },
    foodType() {
        return this.foodTypeGetter
    },
    ingredient() {
        return this.ingredientGetter
    }
},
methods: { 
    ...mapActions('Recipes', ['getRecipes','getCatalog','getIngredient','getFoodType']),
    async searchRecipe(keyword, order, sort, jumpTo) {
        console.log(keyword, order, sort)
        
        if(jumpTo){
            this.$router.push(jumpTo) 
        }

        let recipesData = await this.getRecipes({
            keyword: keyword,
            order: order,
            sort: sort
        })
        console.log("recipesData",recipesData)
        return recipesData
    },
    checkImg(path) {
        // return require(path);
        try{
            return require(path);
        }catch(e){
            return require("@/img/test.jpg")
        }
    },
    bgImg(img) {
        return { "background-image": `url(${require(`@/img/recipe/${img}`)})`}
    },
}
};

Vue.mixin(mixin);