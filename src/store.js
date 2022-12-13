import {reactive} from 'vue';
import axios from "axios";

export const store = reactive({
    searchText:"",
    movies:[],
    series:[],
})

export function suggestedMovies(){
    axios.get("https://api.themoviedb.org/3/search/movie?",{
        params:{
            api_key:"f82482f505269ddba5a36550ac066000",
            query:"adventure",
            language:"it-IT",
        }
    })
    .then( resp=> {
        store.movies= resp.data;
        console.log(store.movies);
    }); 
}