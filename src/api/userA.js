import axios from 'axios';

const userApiURL = "http://localhost:8080/api/UrKitchen/user"

export default {
    getRecipes: (params) => {
        const userID = params.userID
        return axios({
            url: `${userApiURL}/${userID}`,
            method: 'get'
        })
    },
    getUserStockIGD: (params) => {
        const userID = params.userID
        return axios({
            url: `${userApiURL}/${userID}/StockIGD`,
            method: 'get'
        })
    },
}