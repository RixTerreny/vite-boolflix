
<template>
<div class="container my-2 ">
    <h2>Movie</h2>
    <div class="row justify-content-between">
        <div class="mx-3 my-2 col-2 flex-grow-1" v-for="element in store.movies.results">
            <AppCardMovie :element="element"></AppCardMovie>
        </div>
    </div>
    <h2 class="mt-3">Series</h2>
    <div class="row justify-content-between">
        <div class="mx-3 my-2 col-2 flex-grow-1" v-for="element in store.series.results">
            <AppCardSerie :element="element"></AppCardSerie>
        </div>
    </div>
</div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "../store";
import AppCardMovie from './AppCardMovie.vue';
import AppCardSerie from './AppCardSerie.vue';
export default{
    components:{AppCardMovie,AppCardSerie},
    data(){
        return{
            store,
        }
    }
}
</script>


<style lang="scss">
@use '../styles/general.scss' as *;

</style>