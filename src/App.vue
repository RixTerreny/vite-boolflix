
<template>
  <div>
    <AppHeader @search="fetchMovies()"/>
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
img{
  width: 100%;
}
</style>


<script >
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {suggestedMovies, store} from "./store"
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default{
  components:{AppHeader,AppMain},
  data(){
    return{
      store
    }
  },
  methods:{
    fetchMovies(){
      axios.get("https://api.themoviedb.org/3/search/movie?",{
        params:{
            api_key:"f82482f505269ddba5a36550ac066000",
            query:store.searchText,
            language:"it-IT",
            append_to_response:"images"
        }
    })
    .then( resp=> {
        store.movies= resp.data;
    }); 
    }
  },
  created(){
    suggestedMovies()
  }
}
</script>