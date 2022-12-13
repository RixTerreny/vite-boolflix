
<template>
<div class="container my-2">
    <AppCard/>
</div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "../store";
import AppCard from '../components/AppCard.vue';
export default{
    components:{AppCard},
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