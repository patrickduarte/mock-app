<template>
<div>
    <Nav/>

<main>

  <div class="album py-5 bg-light">
    <div class="container">
        <router-view />
    </div>
  </div>

</main>

</div>

  
</template>

<script>
import Nav from '@/components/Nav.vue';
// import Header from '@/components/Header.vue';
import {computed, onMounted} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
    name:"Inicio",
    components: { Nav, },
    // setup() {
    //     const store = useStore();
    //     const route = useRoute();
 

    //     return {
    //     }
    // }

}
</script>
