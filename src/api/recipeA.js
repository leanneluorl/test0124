import axios from 'axios';

const recipeApiURL = "http://localhost:49000/api/UrKitchen/Recipe"
const adminApiURL = "http://localhost:49000/api/UrKitchen/admin"

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

    getCatalog: (params) => {
        const table = params.table
        const keyword = params.keyword
        return axios({
            url: `${adminApiURL}/${table}/${keyword}`,
            method: 'get'
        })
    },
    
}