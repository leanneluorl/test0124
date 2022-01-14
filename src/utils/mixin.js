import Vue from 'vue'
import { mapState, mapActions } from 'vuex';

export const mixin = {
computed : { ...mapState('Recipes', ['recipes'])},
methods: { 
    ...mapActions('Recipes', ['getRecipes']),
    searchRecipe(keyword, order, sort, jumpTo) {
        console.log(keyword, order, sort)
        
        if(jumpTo){
            this.$router.push(jumpTo) 
        }
        return this.getRecipes({
            keyword: keyword,
            order: order,
            sort: sort
        }); 
    }
}
};

Vue.mixin(mixin);