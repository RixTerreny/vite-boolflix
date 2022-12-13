
<template>
<div class="container my-2">
    <h2>Movie</h2>
    <AppCardMovie/>
    <h2 class="mt-3">Series</h2>
    <AppCardSerie/>
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
            store
        }
    }
}
</script>


<style lang="scss">
@use '../styles/general.scss' as *;

</style>