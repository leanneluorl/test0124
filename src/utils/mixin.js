import Vue from 'vue'
import { mapState, mapActions } from 'vuex';

export const mixin = {
computed : { ...mapState('Recipes', ['recipes'])},
methods: { 
    ...mapActions('Recipes', ['getRecipes']),
    searchRecipe(keyword, order, sort, jumpTo) {
        console.log(keyword, order, sort)
        this.getRecipes({
            keyword: keyword,
            order: "viewtimes",
            sort: "desc"
        }); 
        if(jumpTo){
            this.$router.push('Recipe') 
        }
    }
}
};

Vue.mixin(mixin);