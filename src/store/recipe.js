import recipe from '../api/recipeA'
// import cookie from 'vue-cookies'
// import router from '../router'

const Recipe = {
    namespaced: true,
    state: () => ({
        response: {},
        error: {},
        recipes: {},
        catalog: {},
        cuisine: {},
        diet: {},
        foodType: {},
        ingredient: {},
        instruction: {},
        recipeIngredient: {},
        
    }),
    mutations: {
        setRecipes: (state, recipes) => {
            state.recipes = recipes;
        },
        getCatalog: (state, catalog) => {
            state.catalog = catalog;
        },
    },
    actions: {
        getRecipes: ({ commit }, params) => {
            return recipe.getRecipes(params).then(res => {
                console.log("recipe.js",res.data)
                commit('setRecipes', res.data)  
                return res.data
            })
        },
        getCatalog: ({ commit }, params) => {
            return recipe.getCatalog(params).then(res => {
                console.log("recipe.js",res.data)
                commit('setCatalog', res.data)  
                return res.data
            })
        },
    },
    getters: {
        recipesGetter: (state) => {
            return state.recipes || {}
        },
    }
}

export default Recipe