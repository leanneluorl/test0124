<template>
    <section class="recipe-links-wrap">
        <slot></slot>
        <RecipeLink v-for="recipe in recipeList" 
            :recipe="recipe"
            :key="`recipe`+recipe.RecipeID"
            />
    </section>
</template>

<script>
import RecipeLink from '@/components/recipe/RecipeLink.vue';
export default {
    name: 'Home',
    components: {
		RecipeLink,
	},
	data:() => {
		return {
			
		}
	},
    props: {
        recipeList: {
            type: Array
        },
    },
	
}
</script>

<style lang="scss">
    .recipe-links-wrap {
        width: calc( 100% - 200px );
        @extend .flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 30px;
    }
    h4{
        width: 100%;
        display: block;
        span{
            font-size: 2rem;
            color: $primary-g-dark;
        }
    }
</style>