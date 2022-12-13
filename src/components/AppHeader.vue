
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container-fluid">
        <form class="d-flex align-items-center" role="search">
          <div class="me-3 resize">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
          </div>

          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText">
          <button class="btn btn-outline-success" type="button" @click="search()">Cerca</button>
        </form>
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