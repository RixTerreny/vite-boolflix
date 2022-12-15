
<template>
    <div class="row justify-content-between z-in">
        <div class="mx-3 my-2 col-2 flex-grow-1 " v-for="element in store.movies.results">
                    <div>
                        <img class="image-fluid z-in" v-if="element.poster_path!=null" :src="'https://image.tmdb.org/t/p/w342'+ element.poster_path" alt="">
                        <img v-else src="image-not-found.png" alt="" class="image-fluid ">
                    </div>
                    <div >
                        <div>{{"Titolo: "+element.title}}</div>
                        <div>{{"Titolo originale: "+element.original_title}}</div>
                        <div class="d-flex">
                            {{"Lingua originale: "}}
                            <div class="resize ms-2">
                                <img :src="'https://flagcdn.com/16x12/jp.png'" alt="">
                            </div>
                        </div>
                        <div>{{"Data uscita: "+element.release_date}}</div>
                        <div class="d-flex">
                            <i v-for="stella in stelle" class="  fa-star me-1 yellow" 
                            :class="{ 'fa-solid': stella == true, 'fa-regular':stella == false, 'fa-solid fa-star-half-stroke yellow' : stella == 'mezzaStella'}"></i>
                        </div>
                    </div>

        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store"
export default{
    props:{
        arrayFilm:Object
    },
    data(){
        return{
            store,
            valoreVoto:"0.5",
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
    },
    computed:{
        stelle(){
            const toReturn=[];
            const voto = 7/2;
            const stellePiene = Math.floor(voto);

            for(let i =0; i<5; i++){
                let toPush = i<stellePiene;
                const decimal = voto %1;
                
                if (stellePiene == i && decimal) {
                    toPush="mezzaStella";
                }
                toReturn.push(toPush)
            }
            return toReturn
        }
    }
}
</script>


<style lang="scss">
@use '../styles/general.scss' as *;
.yellow{
    color: goldenrod;
}

.resize{
    width: 1.2rem;
}

</style>