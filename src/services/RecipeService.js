import axios from axios;

export default {
    getRecipes(){
        return axios.get('/recipe', { params: { userId } } )
    },
    editRecipe(){
        return axios.put('/recipe', recipe)
    },
    deleteRecipe(){
        return axios.delete('/recipe', recipe)
    }
}