<template>

<div> 

<h2> Tabela exemplo </h2>

            <div class="pt-3 pb-2 mb-3 border-bottom" >
              <router-link to="#"  class="btn btn-sm btn-outline-secondary">
                    <font-awesome-icon icon="file" />
              </router-link>
              Total Registro: 20
               
            </div>

         <input class="form-control" placeholder="Search" @keyup="search($event.target.value)">
         
            <div class="table-responsive">

                <table class="table table-striped table-sm">
                                            <thead>
                                                <tr>
                                                    <th class="text-left"> #  </th>
                                                    <th class="text-left"> Nome  </th>
                                                    <th class="text-left"> Categoria  </th>
                                                     <th class="text-left"> Status  </th>
                                                     <th class="text-left"> Ações  </th>
                                                </tr>
                                                                        
                                            </thead>
                                            <tbody>
                                                <tr v-for="cli in filteredTable" :key="cli.id">                                

                                                    <td>{{cli.id}} </td>
                                                    <td>{{cli.Nome}} </td>
                                                    <td>{{cli.categoria}} </td>
                                                    <td>{{cli.status}} </td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <router-link to="#" class="btn btn-sm btn-outline-secondary" title="Alterar">
                                                                <font-awesome-icon icon="pencil-alt" />
                                                            </router-link>
                                                            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Excluir " >
                                                                <font-awesome-icon icon="trash-alt" />
                                                            </a>
                                                            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Excluir " >
                                                                <font-awesome-icon icon="thumbs-up" />
                                                            </a>
                                                            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Excluir " >
                                                                <font-awesome-icon icon="thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

             </table>

                <div class="d-flex justify-content-center mt-4" v-if="page < lastPage">
                    <button class="btn btn-sm btn-outline-secondary"  @click="loadMore"> <font-awesome-icon icon="plus-circle" /> </button>
                </div>
          </div>

        
</div>
  
</template>

<script lang="ts">

import {reactive,onMounted, ref} from "vue";

export default {
name: "Table",
setup(){
 const filteredTable = ref(<any>[]);
 const Tablesource= ref([
     {id:1, Nome:'O cara da Lancha', categoria:'Informatica',status:1},
     {id:2, Nome:'Francisco das Chagas', categoria:'Saude',status:1},
     {id:3, Nome:'Paulo Silva', categoria:'Informatica',status:1},
     {id:4, Nome:'Andre  Rodrigues', categoria:'Saude',status:1},
     {id:5, Nome:'Silvia  Rodrigues', categoria:'Informatica',status:0},
     {id:6, Nome:'Alan Passos', categoria:'Informatica',status:1},
     {id:7, Nome:'Ricardo Gomes Leão', categoria:'Saude',status:0},
     {id:8, Nome:'Andre Miguel Salgado', categoria:'Informatica',status:1},
     {id:9, Nome:'Pedro Cardoso Rodrigues', categoria:'Saude',status:1},
     {id:10, Nome:'Manoel Santos Alencar', categoria:'Informatica',status:1},
     {id:11, Nome:'Ruban Mendoça Goes', categoria:'Informatica',status:1},
     {id:12, Nome:'Carlos Nascimento', categoria:'Economia',status:1},
     {id:13, Nome:'Julia Passos Amorim', categoria:'Informatica',status:1},
     {id:14, Nome:'Xica da silva', categoria:'Informatica',status:1},
     {id:15, Nome:'Rubão do Fuscão', categoria:'Economia',status:1},
     {id:16, Nome:'Vento levou', categoria:'Informatica',status:1},
     {id:17, Nome:'Ja Morreu', categoria:'Economia',status:1},
     {id:18, Nome:'Noia e Compania', categoria:'Informatica',status:1},
     {id:19, Nome:'Andre Cordeiro', categoria:'Informatica',status:1},
     {id:20, Nome:'Jose Nilton Gonçalo', categoria:'Economia',status:1},

 ]); 
      const lastPage = ref( 0);
      const perPage = ref(9);
      const page = ref(1);


      onMounted( () => {

         //  filteredTable.value = Tablesource.value;

           filteredTable.value = Tablesource.value.slice(0, page.value * perPage.value);
           lastPage.value = Math.ceil(Tablesource.value.length / perPage.value);

      });



      const loadMore = () => {
          page.value = page.value + 1;
          lastPage.value = Math.ceil(Tablesource.value.length / perPage.value);
           filteredTable.value = Tablesource.value.slice(0, page.value * perPage.value);

      }
  


   const search = (s: string ) => {

       filteredTable.value = Tablesource.value.filter(p=> p.Nome.toLowerCase().indexOf(s.toLowerCase()) >= 0 ||
                                                      p.categoria.toLowerCase().indexOf(s.toLowerCase()) >= 0  );
       
           
           lastPage.value = Math.ceil(filteredTable.value.length / perPage.value);
           filteredTable.value = filteredTable.value.slice(0, page.value * perPage.value);
      }



    return {
        Tablesource,
        filteredTable,
        search,
        lastPage,
        perPage,
        page,
        loadMore,
    }
}
}
</script>

<style>

</style>