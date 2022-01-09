<template>
	<div class="home-box">

	
	</div>
	
</template>

<script>
// @ is an alias to /src
//import SearchRecipes from '@/components/SearchRecipes.vue'
import { mapState} from 'vuex'
export default {
	name: 'Home',
	components: {
	
	},
	computed: {
        ...mapState('Recipes', ['recipes']),
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
		.section-title {
			width: 17.5%;
			color: $primary-o;
			font-size: 1.5rem;
			font-weight: 500;
		}
		.divx2 {
			width: 55%;
		}
		div {
			float: left;
			width: 27.5%;
			height: 472px;
			@extend .flex-nowrap;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border: 0.5px solid $border ;
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
