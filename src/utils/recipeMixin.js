import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export const recipeMixin = {
    data:() =>{
        return {
        }
    },
    computed: { 
        ...mapState('Recipes', ['recipes','catalog', 'searchKeyword', 'type']),
        ...mapGetters('Recipes', ['recipesGetter','foodtypeGetter', 'cuisineGetter', 'diettypeGetter']),
        recipesData() {
            return this.recipesGetter
        },
        foodtype() {
            return this.foodtypeGetter
        },
        ingredient() {
            return this.ingredientGetter
        },
        cuisine() {
            return this.cuisineGetter
        },
        diettype() {
            return this.diettypeGetter
        },
        searchKeywordData() {
            return this.searchKeyword
        },
        typeData() {
            return this.type
        }
    },
    methods: { 
        ...mapActions('Recipes', ['getRecipes','getCatalog','getIngredient','getFoodtype','searchRecipebyIGD','getSearchKeyword','getType']),
        async searchRecipe(keyword, order, sort, jumpTo, type) {
            console.log(keyword, order, sort)
            
            if(jumpTo){
                this.$router.push(jumpTo) 
                this.getSearchKeyword(keyword)  
                this.getType(type)  
                console.log(this.cuisine)
                console.log(this.diettype)
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
            try{
                return { "background-image": `url(${require(`@/img/recipe/${img}`)})`}
            }catch(e){
                return { "background-image": `url(${require(`@/img/test.jpg`)})`}
            }
            
        },
        scrollPageTo(refName) {
            var element = this.$refs[refName];
            console.log("scrollTo()",element)
            var top = element.offsetTop;
        console.log("scrollTo()")
            window.scrollTo(0, top);
        }
    }
};

Vue.mixin(recipeMixin);