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
        setCatalog: (state, catalog) => {
            state.catalog = catalog;
        },
        setIngredient: (state, ingredient) => {
            state.ingredient = ingredient;
        },
        setFoodType: (state, foodType) => {
            state.foodType = foodType;
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
            return recipe.getTable(params).then(res => {
                commit('setCatalog', res.data)  
                return res.data
            })
        },
        getIngredient: ({ commit }, params) => {
            return recipe.getIngredient(params).then(res => {
                commit('setIngredient', res.data)  
                return res.data
            })
        },
        getFoodType: ({ commit }) => {
            return recipe.getTable({table:"foodtype", keyword: "all"}).then(res => {
                commit('setFoodType', res.data)  
                return res.data
            })
        },
        searchRecipebyIGD(c, data) {
            return new Promise((resolve, reject) => {
                recipe.searchRecipebyIGD(data).then(res => {
                    resolve(res);
                }).catch(err => {
                    if (err.response.status == 400) {
                        reject(err);
                    }
                })
            });

        },
    },
    getters: {
        recipesGetter: (state) => {
            return state.recipes || {}
        },
        foodTypeGetter: (state) => {
            return state.foodType || {}
        },
        ingredientGetter: (state) => {
            return state.ingredient || {}
        },
    }
}

export default Recipe