<template>
	<div class="recipe-box">
		<h1 class="section-title main">Recipe</h1>
		<section class="recipe-drag-wrap">
			<drag @searchResult="passResult" :ingredientData="ingredientData"/>
		</section>
		<RecipeList v-if="serchResultRecipes.length" :recipeList="serchResultRecipes">
			<h2 class="section-title">Recipes Search Results:</h2>
			<h4>You got <span>{{serchResultRecipes.length}}</span> Recipes</h4>
		</RecipeList>
		<section class="recipe-catalogs-wrap">
			<div v-for="(catalog, key) in catalogs" :key="key" :class="key" 
				class="catalog-section">
				<div class="catalog-section-title-wrap"
					:style="bgImg( key+`-title.jpg`)">
					<h2 class="catalog-section-title" >{{ catalogs[key].title }}</h2>
				</div>
				<div v-for="(item, index) in catalogs[key].data" 
					:key="item.Uniq_name"
					:class="[cataStyle(index)]"
					:style="bgImg( key+`-`+item.itemID+`.jpg`)"
					class="recipe-catalog">
					<p class="recipe-catalog-title">
						{{item.item}}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Drag from '@/components/common/drag.vue';
import RecipeList from '@/components/recipe/RecipeList.vue';

export default {
	name: 'Recipe',
	components: {
		Drag,
		RecipeList
	},
	data:() => {
		return {
			catalogs:{
				cuisine: {
					data:{},
					title: "Cuisine",
				},
				diettype: {
					data:{},
					title: "Diet"
				}
			},
			ingredientData: [],
			serchResultRecipes: {},
		}
	},
	created: async function() {
		for (let key in this.catalogs) {
			this.catalogs[key].data = await this.getCatalog({
													table: key ,
													keyword: "all"})
		}
		this.ingredientData = await this.getIngredient({
												table: "Ingredient" ,
												keyword: "all",
												order: "foodtype"})
	console.log("this.ingredientData in RECIPE ",this.ingredientData )
    },
	computed: {
		
	},
	methods: {
		async searchCatalog(table) { 
			return await this.getCatalog({
			table: table,
			keyword: "all"})
		},
		cataStyle(i){
			if(i==0||(i%4)==0||i==1||(i%4)==1)
				return "w-1x"
			else
				return "w-2x"
		},
		passResult(result) {
			console.log("result",result)
			this.serchResultRecipes = result
		}
	}
}
</script>

<style lang="scss">
	.recipe-catalogs-wrap {
		@media only screen and (max-width: 600px) {
			width: calc(100% - 100px);
			margin-left: 100px;
			.recipe-catalog {
				width: calc(50% - 10px);
			}
		}
		width: calc(100% - 200px);
		padding: 5px;
		.catalog-section-title-wrap {
			width: 100%;
			height: 100px;
			background-position: center;
			background-size: cover;
		}
		.catalog-section {
			width: 100%;
			@extend .flex;
			justify-content: flex-start;
		}
	}
	.recipe-catalog {
		border-radius: 10px;
		background-position: center;
		background-size: cover;
		width: calc(25% - 10px);
		margin: 5px;
		position: relative;
		&.w-1x {
			@include psuedo-height($height: 100%);
		}
		&.w-2x {
			width: calc(50% - 10px);
			@include psuedo-height($height: 50%);
		}

		&-title{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: white;
			font-weight: 900;
			filter: drop-shadow(0 0 2px #000000);
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
	}
	h2{
		background: url(./../img/test.jpg) no-repeat/ cover;
	}
</style>