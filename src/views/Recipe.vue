<template>
<section class="recipe-catalogs-wrap">
	<div v-for="(catalog, key) in catalogs" :key="key" :class="key" >
		<div class="section-title-wrap"
			:style="urlcataBg( key+`-title`)">
			<h2 class="section-title" >{{ catalogs[key].title }}</h2>
		</div>
		<div v-for="(item, index) in catalogs[key].data" 
			:key="item.Uniq_name"
			:class="[cataStyle(index)]"
			:style="urlcataBg( key+`-`+item.itemID)"
			class="recipe-catalog recipe-catalog">
			<p class="recipe-catalog-title">
				{{ item.item}}
			</p>
		</div>
	</div>
	
		
	</section>
</template>

<script>
export default {
	name: 'Recipe',
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
			}
		}
	},
	components: {
		
	},
	created: async function() {
		for (let key in this.catalogs) {
			this.catalogs[key].data = await this.getCatalog({
			table: key ,
			keyword: "all"})
			console.log(key, this.catalogs[key].data);
		}
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
				return "cat_25"
			else
				return "cat_50"
		},
		urlcataBg(id) {
			let path = "@/img/recipe/"+id+".jpg"
			console.log("img",id ,'backgroundImage: url('+ path +')')
			
			return { "background-image": `url(${require(`@/img/recipe/${id}.jpg`)})`}
		}
	}
}
</script>

<style lang="scss">
	.recipe-catalogs-wrap {
		width: calc(100% - 200px);
		padding: 5px;
		.section-title-wrap {
			width: 100%;
			height: 100px;
			background-position: center;
			background-size: cover;
		}
	}
	h2{
		background: url(./../img/test.jpg) no-repeat/ cover;
	}
</style>