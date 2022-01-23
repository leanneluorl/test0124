<template>
    <section class="recipe-links-wrap" style="background-color:$primary-g">
        <slot></slot>
        <div class="recipe-links">
            <RecipeLink v-for="recipe in recipeList" 
            :recipe="recipe"
            :key="`recipe`+recipe.RecipeID"
            />
        </div>
        
        <slot name="backTo"></slot>
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
        padding-bottom: 30px;
        h4{
            width: 100%;
            display: block;
            span{
                font-size: 2rem;
                color: $primary-g-dark;
            }
        }
        .back_to{
            margin: 10px auto 0;
            background-color: $primary-g;
            font-weight: 900;
            display: block;
            width: 100%;
            span {
                color: white;
            }
            &:hover {
                h4{
                    transform:scale(1.1);
                    text-decoration: underline;
                }
            }
        }
    }
    .recipe-links {
        width: 100%;
        @extend .flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>