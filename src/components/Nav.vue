<template>
<div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
      <div class="col-md-6 text-left">
        <h1>SISTEMAS INTERNOS HRBA</h1> 
      </div>

      <div class="col-md-3 text-end" >
        <router-link to="/login" class="btn btn-outline-primary me-2">Entrar</router-link>
        
      </div>

    </div>
  </div>

</template>

<script>

import {useStore} from "vuex";
import {computed} from "vue";
import axios from "axios";
import router from '../router/index.ts'

export default {
    name:"Nav",
    setup() {
      const store = useStore();
     
      return {

      }
    }

}
</script>

