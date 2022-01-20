import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export const mixin = {
computed: { 
    ...mapState('Recipes', ['recipes','catalog']),
    ...mapGetters('Recipes', ['recipesGetter','foodTypeGetter']),
    recipesData() {
        return this.recipesGetter
    },
    async foodType() {
        return await this.getCatalog({
            table: "foodtype" ,
            keyword: "all"})
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
        try{
            return require(path);
        }catch(e){
            return require("@/img/test.jpg")
        }
    }
}
};

Vue.mixin(mixin);