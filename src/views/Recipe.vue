<template>
<section class="recipe-catalogs-wrap">
	<h2 class="section-title">TOP popular Recipes</h2>
	<div v-for="item in search('cuisine')" 
		:key="item"
		class="recipe-catalog recipe-catalog-1">
		<div class="recipe-catalog-title">
			{{}}
		</div>
	</div>
	<div class="recipe-catalog recipe-catalog-2"></div>
		
	</section>
</template>

<script>
export default {
	name: 'Recipe',
	data:() => {
		return {
			cuisine: {},
		}
	},
	components: {
		
	},
	created: async function() {
		this.cuisine = await this.getCatalog({
			table: "diettype",
			keyword: "all"})
		this.cuisine = this.catalog
		console.log(this.catalog, this.cuisine)
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
		async search(table) { 
			this.cuisine = await this.getCatalog({
			table: table,
			keyword: "all"})
			console.log("this.cuisine",this.cuisine)
			return this.cuisine
		}
	}
}
</script>

<style>

</style>