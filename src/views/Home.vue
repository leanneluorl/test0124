<template>
	<div class="home-box">
		<section class="catalog">
			<h1 class="section-title">TOP popular Recipe Catalog</h1>
			<div class="catalog-left" @click="searchRecipe('taiwan', 'viewtimes', 'desc', 'recipe')"></div>
			<div class="catalog-right">
				<div class="catalog-right-top-1"></div>
				<div class="catalog-right-top-2"></div>
				<div class="catalog-right-bottom"></div>
			</div>
		</section>
		<section class="recipe-links">
			<!-- <RecipeLink v-for="recipe in homeRecipe" 
				:recepiID="recipe.recepiID"
				/> -->
		</section>
	</div>
	
</template>

<script>
// @ is an alias to /src
// import RecipeLink from '@/components/common/recipe-link.vue';
export default {
	name: 'Home',
	data:() => {
		return {
		
		}
	},
	components: {
		// RecipeLink,
	},
	computed: {
		homeRecipe(){
			console.log(this.searchRecipe("all","viewtimes","desc"))
			return this.searchRecipe("all","viewtimes","desc")
		}
    },
	watch: {
        recipes: {
            immediate: true,
            handler(){
                console.log("Home watch",this.recipes)
            }
        }
    }
}
</script>

<style lang="scss">
	.home-box {
		text-align: center;
		section {
			margin: auto;
			div{
				border-radius: 20px;
				overflow: hidden;
			}
		}
		.catalog {
			div{
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
		.section-title {
			width: 100%;
			color: $primary-g-dark;
			font-size: 3rem;
			font-weight: 900;
		}
		
		
		a.page-link{
			width: 11rem;
			height: 3rem;
			line-height: 3rem;
			border-radius: 50px;
			border: solid 1px $primary-g;
			vertical-align: middle;
			img{
				height: 16px;
				filter: $primary-g-filter;
				vertical-align: middle;
			}
		}
		
		

		.main-wrap {
			margin: 0 auto 69px;
			padding: 0 20%;
		}
		
		.news-wrap {
			.news-items-content{
				background-color: $primary-g;
				color: #fff;
				p:first-of-type{
					margin-bottom: 30px;
				}
				p:nth-of-type(2){
					margin-bottom: 60px;
				}
				&-title {
					font-weight: bold;
				}
				background-size: auto 100%;
				background-position: center;
			}
			.news-page-link-wrap {
				
				
				
			}
		}
		.route-wrap {
			.route-main{
				padding: 53px;
				align-items: flex-start;
				p{
					margin-bottom: 30px;
					position: relative;
					&::after{
						content:url(./../img/stroke.png);
						position: absolute;
						bottom: -30px;
						right: -40px;
						z-index: -1;
					}
				}
			}
			.route-image {
				background: url(./../img/index_route.jpg) no-repeat center left/auto 100% ;
			}
		}
	}	
</style>
