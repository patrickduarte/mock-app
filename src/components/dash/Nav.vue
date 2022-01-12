<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

          <p class= "navbar-brand col-md-3 col-lg-2 me-0 px-3" >
           
           <a href="#" class= "p-2 text-white text-decoration-none" @click="showMenu">MENU</a>
           <!-- ao Clicar mostrar o side bar. Ao clicar normalmente esconder o sider bar -->
          </p>
         <p class= "navbar-brand col-md-3 col-lg-2 me-0 px-3">
            <a href="/dasboard" class= "p-2 text-white text-decoration-none" >HRBA E LOGO </a> 
          </p>

         

      <nav class="my-2 my-md-0 mr-md-3">
         <router-link to="/" class= "p-2 text-white text-decoration-none">
            Btn Foto
         </router-link>
         <!-- Ao clicar na foto, mostrar opção de editar perfil e Sair do sistema
          <a href="#" class= "p-2 text-white text-decoration-none" >Sair</a> -->
         
      </nav>
  </header>
</template>

<script>
import axios from 'axios'
export default {
    name: "Nav",

    methods: {
      async logout() {

        await this.$router.push('/');
      }
    },

}
</script>
