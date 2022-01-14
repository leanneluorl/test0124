import recipe from '../api/recipeA'
// import cookie from 'vue-cookies'
// import router from '../router'

const Recipe = {
    namespaced: true,
    state: () => ({
        response: {},
        error: {},
        recipes: {},
        foodType: {},
        ingredient: {},
        instruction: {},
        recipeIngredient: {},
    }),
    mutations: {
        setRecipes: (state, recipes) => {
            state.recipes = recipes;
        },
    },
    actions: {
        getRecipes: ({ commit }, params) => {
            recipe.getRecipes(params).then(res => {
                console.log("recipe.js",res.data)
                commit('setRecipes', res.data)
            })
        },
    },
    getters: {
        recipes: (state) => {
            return state.recipes
        },
    }
}

export default Recipe