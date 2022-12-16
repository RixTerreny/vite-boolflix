
<template>

    <div class="position-relative box ">
        <div class="resize-img">
            <img class="img-h" v-if="element.poster_path!=null" :src="'https://image.tmdb.org/t/p/w342'+ element.poster_path" alt="">
            <img v-else :src="'https://picsum.photos/200/'+randomNumber()" alt="" class=" img-h">
        </div>
        <div class="position-absolute top-0 p-2 info overflow-auto">
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
            <div >{{"Titolo originale: "+element.overview}}</div>
        </div>
        
    </div>
    

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store"
export default{
    props:{
        element:{
            type:Object
        }
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        randomNumber(){
            const toReturn = Math.floor(Math.random() * 1000);
            return toReturn
        },
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
            const voto = this.element.vote_average/2;
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

.img-h{
    width: 100%;
    height: 100%;
}

.resize-img{
    height: 320px;
}

.info{
    background-color: rgba(0, 0, 0, 0.496);
    height: 100%;
    width: 100%;
    display: none;
}

.box:hover .info{
    display: block;
}

.box ::-webkit-scrollbar {
  width: 0px;
}
</style>