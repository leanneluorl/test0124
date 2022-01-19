import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export const mixin = {
computed: { 
    ...mapState('Recipes', ['recipes','catalog']),
    ...mapGetters('Recipes', ['recipesGetter']),
    recipesData() {
        return this.recipesGetter
    }
},
methods: { 
    ...mapActions('Recipes', ['getRecipes','getCatalog']),
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
    }
}
};

Vue.mixin(mixin);