import axios from 'axios';

const recipeApiURL = "http://localhost:49000/api/UrKitchen/Recipe"

export default {
    
    getRecipes: (params) => {
        const keyword = params.keyword
        const order = params.order
        const sort = params.sort
        return axios({
            url: `${recipeApiURL}/${keyword}/${order}/${sort}`,
            method: 'get'
        })
    },
}