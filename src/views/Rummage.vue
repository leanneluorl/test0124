<template>
    <div class="rummage-box">
        <h1 class="section-title main">Rummage</h1>
		<section class="recipe-drag-wrap" ref="dragTag">
			<drag @searchResult="passResult" @resetDrag="resetDrag" :ingredientData="userIngredientStockData" :key="dragKey" />
		</section>
		<RecipeList v-if="serchResultRecipes.length" 
			:recipeList="serchResultRecipes"
			>
			<h2 ref="resultTag"  class="section-title">Recipes Search Results:</h2>
			<h4>You got <span>{{serchResultRecipes.length}}</span> Recipes</h4>
			<template v-slot:backTo>
				<a class="back_to" @click="scrollPageTo('dragTag')"><h4>Back to <span>Search</span></h4></a>
			</template>
		</RecipeList>
    </div>
</template>

<script>
import Drag from '@/components/function/DragRM.vue';
import RecipeList from '@/components/recipe/RecipeList.vue';
export default {
    name: 'Recipe',
	components: {
		Drag,
		RecipeList,
	},
	data:() => {
		return {
            userIngredientStockData: [],
            serchResultRecipes: {},
			serchResultStatus: false,
			dragKey: 0
        }
    },
    created: async function() {

		this.userIngredientStockData = await this.getUserStockIGD({
												userID: this.userID })
        console.log(this.userIngredientStockData)
    },
	updated: function(){
		if(this.serchResultRecipes.length){
			this.scrollPageTo("resultTag")
		}
		
	},
    methods: {
        passResult(res) {
            console.log("result",res)
            if(res.status === "201"){
                this.serchResultStatus = true
            }
            this.serchResultRecipes = res.data
        },
        resetDrag(result) {
            this.serchResultRecipes = result
            this.dragKey += 1
        }
    }
}
</script>

<style>
.info{
    background-color: aqua;
    width: 100%;
    height: 100%;
}

</style>