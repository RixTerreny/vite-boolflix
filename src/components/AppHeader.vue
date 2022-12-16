
<template>
  <div class="on-top">
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <div class="d-flex align-items-center" role="search">
          <div class="me-3 resize">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
          </div>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText">
          <button class="btn btn-color" type="button" >
            <i class="fa-solid fa-magnifying-glass fs-5"></i>
          </button>
        </div>
        <div>
    </div>
  </div>
</nav>
</div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
.resize{
  width: 13rem;
}

.on-top{
  position: sticky;
  top: 0;
  z-index: 22;
}

.btn-color{
  color: grey;
  border: 0;
}

button i{
  margin-left: -10px;
}

nav{
  z-index: 99 !important;
  background-color: black;
}
</style>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store"
export default{
  data(){
    return{
      store
    }
  },
  methods:{
      search(){
        this.$emit("search");
      }
  }
}
</script>