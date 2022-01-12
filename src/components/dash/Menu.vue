<template>
        <nav  id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">

            <!-- Funções do usuário -->
             
              <a href="javascript:void(0)" 
                 @click="fselect()" ><h5>  <font-awesome-icon :icon="fselected === 1 ? 'angle-down': 'angle-right'" /> Funções </h5></a>

              <div class="overflow-hidden" :class="fselected === 1 ? 'show' : 'hide'">
                <ul class="nav flex-column" >

                  <li  class="nav-item" >
                    <router-link to="/table" class="nav-link" >
                          <font-awesome-icon icon="cogs" /> Parâmetros
                    </router-link>
                    <router-link to="/teste" class="nav-link" >
                         <font-awesome-icon icon="cog" /> Build Report
                    </router-link>
                    <router-link to="/table" class="nav-link" >
                        <font-awesome-icon icon="chart-line" />  Build Dasboard
                    </router-link>
                  </li>
                </ul>
              </div>
         
              <!-- Funções do Perfil-->
            <ul class="nav flex-column" >

               <a href="javascript:void(0)"   @click="select(1)">
                 <h5> <font-awesome-icon :icon="selected === 1 ? 'angle-down': 'angle-right'" /> Cadastros</h5>
               </a>

                <div class="overflow-hidden" :class="selected ===  1 ? 'show' : 'hide'">
        
                   <ul class="nav flex-column" >
                      <li  class="nav-item" >
                        <router-link to="/table"  class="nav-link" >
                              <font-awesome-icon icon="table" /> Tabela
                        </router-link>
                      </li>

                      <li  class="nav-item" >
                        <router-link to="/teste"  class="nav-link" >
                             <font-awesome-icon icon="phone-alt" /> Ramais  
                        </router-link>
                      </li>
                      <li  class="nav-item" >
                        <router-link to="/teste"  class="nav-link" >
                              <font-awesome-icon icon="at" />  Emails
                        </router-link>
                      </li>
                    
                  </ul>

                </div>

               <a href="javascript:void(0)"   @click="select(2)">
                 <h5> <font-awesome-icon :icon="selected === 2 ? 'angle-down': 'angle-right'" /> Daboard</h5>
               </a> 
            
                <div class="overflow-hidden" :class="selected ===  2 ? 'show' : 'hide'">
        
                   <ul class="nav flex-column" >

                       <li  class="nav-item" >
                        <router-link to="/teste"  class="nav-link" >
                            <font-awesome-icon icon="hospital" />   clinicas
                        </router-link>
                      </li>

                      <li  class="nav-item" >
                        <router-link to="/table"  class="nav-link" >
                             <font-awesome-icon icon="table" />  Nir Table
                        </router-link>
                      </li>

 
                      <li  class="nav-item" >
                        <router-link to="/teste"  class="nav-link" >
                              <font-awesome-icon icon="procedures" /> UTIs
                        </router-link>
                      </li>     
                  </ul>

                </div>

            </ul>



          </div>
        </nav>
  
</template>

<script lang="ts">
import {onMounted, ref} from "vue";

import axios from "axios";
//import router from '../../router/index.ts'

export default {
    name:"Menu",
    setup() {

     const selected = ref(0);
     const fselected = ref(0); // específico para menu função do usuário
      
      const fselect = () => {fselected.value = fselected.value === 0 ? 1 : 0;
        
      }

      const select =  (id: number) => {
         selected.value = selected.value !== id ? id : 0;     
        }

  
      return {
        selected,
        select,
        fselected,
        fselect

      }
    },

}
</script>
<style scoped>
.show {
  max-height: 400;
  transition: max-height 500ms ease-in;
}

.hide {
  max-height: 0;
  transition: max-height 500ms ease-out;
}


a:link, a:visited {
	text-decoration: none;
  color: rgb(12, 12, 12)
	}
a:hover {
	text-decoration: none;
	color: rgb(118, 120, 122)
	}
a:active {
	text-decoration: none
	}


</style>
