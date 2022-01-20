<template>
<section class="recipe-catalogs-wrap">
	<section class="recipe-drag-wrap">
		<drag :ingredient="ingredientData"/>
	</section>
	<div v-for="(catalog, key) in catalogs" :key="key" :class="key" 
		class="catalog-section">
		<div class="catalog-section-title-wrap"
			:style="urlcataBg( key+`-title`)">
			<h2 class="catalog-section-title" >{{ catalogs[key].title }}</h2>
		</div>
		<div v-for="(item, index) in catalogs[key].data" 
			:key="item.Uniq_name"
			:class="[cataStyle(index)]"
			:style="urlcataBg( key+`-`+item.itemID)"
			class="recipe-catalog">
			<p class="recipe-catalog-title">
				{{item.item}}
			</p>
		</div>
	</div>
	
		
	</section>
</template>

<script>
import Drag from '@/components/common/drag.vue';

export default {
	name: 'Recipe',
	components: {
		Drag,
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
			ingredientData: {}
		}
	},
	created: async function() {
		for (let key in this.catalogs) {
			this.catalogs[key].data = await this.getCatalog({
													table: key ,
													keyword: "all"})
			console.log(key, this.catalogs[key].data);
		}
		this.ingredientData = this.groupBy(await this.getIngredient({
													table: "Ingredient" ,
													keyword: "all",
													order: "foodtype"})
												, "foodTypeID")
		console.log("ingredient", this.ingredientData);
		console.log("foodType", this.foodType);
		

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
		urlcataBg(id) {
			return { "background-image": `url(${require(`@/img/recipe/${id}.jpg`)})`}
		},
		groupBy(objectArray, property) {
			return objectArray.reduce((acc, obj) => {
				const key = obj[property];
				if (!acc[key]) {
					acc[key] = [];
				}
				// Add object to list for given key's value
				acc[key].push(obj);
				return acc;
			}, {});
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