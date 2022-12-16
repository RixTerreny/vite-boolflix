
<template>
  <div class="bg-netflix text-white">
    <AppHeader class="AppHeader" @search="fetchMovies(),fetchSeries()"/>
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
img{
  width: 100%;
}

.z-in{
    z-index: -2 !important;
}

.AppHeader{

  background-color: rgba(0, 0, 0, 0.719);
}

.bg-netflix{
  background-color: rgb(19, 19, 19);
  padding-bottom: 2rem;
}
</style>


<script >
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {suggestedMovies,suggestedSeries, store} from "./store"
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
        }
    })
    .then( resp=> {
        store.movies= resp.data;
    }); 
    },
    fetchSeries(){
      axios.get("https://api.themoviedb.org/3/search/tv?",{
        params:{
            api_key:"f82482f505269ddba5a36550ac066000",
            query:store.searchText,
            language:"it-IT",
        }
    })
    .then( resp=> {
        store.series= resp.data;
    }); 
    }
  },
  created(){
    suggestedMovies(),
    suggestedSeries()
  }
}
</script>