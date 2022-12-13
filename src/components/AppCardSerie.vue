
<template>
    <div class="row justify-content-between">
        <div class="mx-3 my-2 col-2 flex-grow-1" v-for="element in store.series.results">
                    <div>
                        <img v-if="element.backdrop_path!=null" :src="'https://image.tmdb.org/t/p/w342'+ element.backdrop_path" alt="">
                        <img v-else src="image-not-found.png" alt="">
                    </div>
                    <div>{{"Titolo: "+element.name}}</div>
                    <div>{{"Titolo originale: "+element.original_name}}</div>
                    <div>{{"Lingua originale: "+element.original_language}}</div>
                    <div>{{"Data uscita: "+element.first_air_date}}</div>
                    <div class="d-flex">
                        <div class="me-1" v-for="i in 5">
                            <i class="fa-solid fa-star yellow" v-if="valoreVoto>=0.9"></i>
                            <i class="fa-solid fa-star-half-stroke yellow" v-else-if="valoreVoto>=0.4"></i>
                            <i class="fa-solid fa-star " v-else></i>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store"
export default{
    data(){
        return{
            store,
            valoreVoto:"4.5"
        }
    },
    methods:{
        generateUrl(){
            let urlImg
            if(element.backdrop_path!=null){
                urlImg = 'https://image.tmdb.org/t/p/w342'+ element.backdrop_path
                return urlImg
            }
            else{
                urlImg = ''
                return urlImg
            }
        },
        stelle(value){
            let vote = value*5/10;
            return vote;
        }
    }
}
</script>


<style lang="scss">
@use '../styles/general.scss' as *;
.yellow{
    color: goldenrod;
}

</style>