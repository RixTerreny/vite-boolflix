<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store"
export default{
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="mx-2 my-2 col-2" v-for="element in store.movies.results">
            <div><img :src="element.backdrop_path" alt=""></div>
            <div>{{"Titolo: "+element.title}}</div>
            <div>{{"Titolo originale: "+element.original_title}}</div>
            <div>{{"Lingua: italiano"}}</div>
            <div>{{"Voto: "+element.release_date}}</div>
            <div>{{"Voto: "+element.vote_average+"/10"}}</div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

</style>