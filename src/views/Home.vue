<template>
	<div class="home-box">
		<section class="catalog">
			<h1 class="section-title main">Recipe Catalog</h1>
			<div class="catalog-left" @click="searchRecipe('taiwan', 'viewtimes', 'desc', 'recipe')"></div>
			<div class="catalog-right">
				<div class="catalog-right-top-1"></div>
				<div class="catalog-right-top-2"></div>
				<div class="catalog-right-bottom"></div>
			</div>
		</section>
		<section class="recipe-links-wrap">
			<h2 class="section-title">TOP popular Recipes</h2>
			<RecipeLink v-for="recipe in homeRecipes" 
				:recipe="recipe"
				:key="`recipe`+recipe.RecipeID"
				/>
		</section>
		<section class="about-wrap">
			<h2 class="section-title">About me</h2>
			<p>
				An application which helps people manage their kitchen, which means to manage their stock of food, seasoning, kitchenware. As well as provide recipes which listed prerequisite ingredients. The main idea is like this, when I want to have specific cuisine at night, I can just check on the app which tells me what food and season I have, and what things I need to purchase.
			</p>
		</section>
	</div>
	
</template>

<script>
// @ is an alias to /src
import RecipeLink from '@/components/common/recipe-link.vue';
export default {
	name: 'Home',
	data:() => {
		return {
			homeRecipes: {},
		}
	},
	components: {
		RecipeLink,
	},
	created: async function() {
		this.searchRecipe("all","viewtimes","desc")
		this.homeRecipes = await this.getRecipes({
										keyword: "all",
										sort: "viewtimes",
										order: "desc"})
		this.homeRecipes = this.homeRecipes.slice(0,8)
			console.log("home", this.homeRecipes);
		// console.log("homeRecipes", this.homeRecipes)	
		
		// async function search() {
		// 	await this.searchRecipe("all","viewtimes","desc")
		// 	this.homeRecipes = this.recipes
		// 	console.log("homeRecipes", this.homeRecipes)	
		// }
		// search();
    },
	computed: {
	
	},
	methods: {
		// async homeRecipes() {
		// 	console.log("this", await this.searchRecipe("all","viewtimes","desc"))
		// 	let recipeData = await this.searchRecipe("all","viewtimes","desc")
		// 	console.log("this", recipeData)
		// 	return this.recipes
		// }
	},
	watch: {
        recipes: {
            immediate: true,
            handler(){
				// this.homeRecipes = this.recipes.slice(0,8)
                console.log("Home watch",this.recipes)
            }
        }
    }
}
</script>

<style lang="scss">
	.home-box {
		
		@media only screen and (max-width: 600px) {
			.catalog {
				&-left, &-right {
					width: 100% !important;
				}
			}
		}
		.catalog {
			
			div{
				border-radius: 20px;
				float: left;
				&:after {content: "";   display: block;   padding-bottom: 100%; }
			}
			width: calc( 100% - 200px );
			&-left, &-right {
				width: 50%;
			}
			&-left {
				background: url(./../img/home/taiwanese.jpg) no-repeat center center/auto 100% ;
			}
			&-right {
				&-top {
					&-1, &-2 {
						width: 50%;
					}
					&-1 {
						background: url(./../img/home/keto.jpg) no-repeat center center/auto 100% ;
					}
					&-2 {
						background: url(./../img/home/vegan.jpg) no-repeat center center/auto 100% ;
					}
				}
				&-bottom {
					width: 100%;
					height: 100%;
					&:after { padding-bottom: 50% !important; }
					background: url(./../img/home/japanese.jpg) no-repeat center center/auto 100% ;
				}
			}
		}
	
		.recipe-links-wrap {
			width: calc( 100% - 200px );
			@extend .flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 30px;
		}

		.about-wrap {
			min-height: 300px;
			background-color: $primary-y;
			padding: 20px 100px;
			p{
				text-align: left;
				color: $primary-g-dark;
				filter: brightness(0.7);
			}
		}
		
		

	}	
</style>
