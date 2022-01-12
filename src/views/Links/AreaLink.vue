<template>
<div >

    <h2> Links Públicos </h2>
    <div class="col-md-12 mb-4 input-group">
     
      <input class="form-control" placeholder="Search">

    </div>


    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     <div class="col">
          
          <div class="card shadow-sm" >
            <img src="/img/link/biblioteca.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">Biblioteca</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
     </div>
       <div class="col">
          <div class="card shadow-sm" >
            <img src="/img/link/glpi.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">GLPI</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
      </div>
       <div class="col">
          <div class="card shadow-sm" >
            <img src="/img/link/laboratorio.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">Laboratorio</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
      </div>
       <div class="col">
          <div class="card shadow-sm" >
            <img src="/img/link/lista-de-emails.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">Email</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
      </div>
       <div class="col">
          <div class="card shadow-sm" >
            <img src="/img/link/pacs.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">Pacs</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
      </div>
       <div class="col">
          <div class="card shadow-sm" >
            <img src="/img/link/painel.jpg" height="130"/> 

            <div class="card-body">
              <p class="card-text">Painel</p>
              <div class="d-flex justify-content-between align-items-center">
                <!-- <small class="text-muted">Sistema GLPI</small> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="d-flex justify-content-center mt-4" v-if="filters.page < lastPage">
          <button class="btn btn-primary" @click="loadMore"> Carregar Mais</button>
      </div> -->
</div> 

</template>

<script lang="ts">

import axios from "axios";

export default {
    name:'AreaLink',
    
    
}
</script>

