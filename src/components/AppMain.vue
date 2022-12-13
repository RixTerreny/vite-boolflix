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

<template>
<div class="container">
    <AppCard/>
</div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

</style>