<template>
    <main class="login_user d-flex flex-column justify-content-center">
      <form @submit.prevent="submit">
        <div class="d-flex flex-column align-items-center justify-content-center position-relative ">
            <section class="login_form d-flex flex-column align-items-center">
                <div class="login_form_img">
                    <img src="img/HRBA_logo_white.svg" class="card-img-top" alt="HRBA">
                </div>
                <div class="login_form_itens">
                    <div class="card align-items-center shadow">                
                        <div class="card-body shadow p-3">
                            <div class="login_form_title d-flex flex-column justify-content-center text-success">
                                <p class="h2 text-center">Login</p>
                            </div>
                              
                                  <div class="login_forms flex-column justify-content-center">
                                      <input v-model= "dados.email" type="text" class="form-control"  placeholder="Usuario Dominio" name="email">
                                      <input v-model= "dados.password" type="password" class="form-control" placeholder="Senha" name="password">
                                  </div>
                                        <p class="text-center text-danger" v-if="dados.error">      {{ dados.error }} </p>
                                    
                                   
                                    <div class="login_form_btns_down d-grid gap-2 col-lg-8 col-sm-12 mx-auto mt-3">
                                        <button class="btn btn-success btn-lg" type="submit">Entrar</button>
                                        </div>
                                    </div>
         
                    </div>
                </div>
            </section>
        </div>
        <div class="login_footer d-flex flex-column justify-content-center d-none d-sm-block">
            <section class="login_footer_img d-flex flex-column align-items-center justify-content-sm-end mt-5">
                <img src="img/Pro_Saude_logo_white.svg" alt="Pro-Saúde" srcset="">
            </section>
        </div>
        <!-- <div class="login_footer_text">
            <p class="h5 text-center mt-5 ">Powered by HRBA Labs</p>
        </div> -->

    </form>
  </main> 

</template>

<script>
import {computed,reactive,onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from 'axios';

export default {
    name: "Login",

    setup() {
        const store = useStore();
        const route = useRoute();

        const router = useRouter();
        
        const dados = reactive({
              email: '',
              password:'',
              error:''
        });
 
        onMounted(async () => {
            dados.email = "teste";
            dados.password = "password";

        });

        const submit = async () => {
            await router.push('/sistemas');

        }

        return {
            dados,
            submit
        }

    }
}

</script>

