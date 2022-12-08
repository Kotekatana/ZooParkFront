

<template>
    <div class="auth">
        <div class="container">
            <form action="" color="primary">
                <h2>Authorization</h2>
                <form action="">
                    <my-input v-model="login" :placeholder="'Login'" :type="'text'" :errorMessage="getErrorMessage" />
                    <my-input v-model="password" :placeholder="'Password'" :type="'password'" />
                    <div class="row justify-between items-center">
                        <router-link to="/registration" class="regLink">Registration</router-link>
                        <q-btn no-caps @click="submit" color="accent" text-color="black" label="Login" size="24px" padding="10px 60px" />
                    </div>
                </form>

            </form>
        </div>

    </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import myInput from '../components/input.vue'
export default {
    data() {
        return {
          login:'',
          password:''
        }
    },
    computed:{
        ...mapGetters(["getErrorMessage"])

    },
    methods: {
        ...mapActions({log:'login'}),

        async submit(){
            this.log({name:this.$data.login,password:this.$data.password})
        }
    },
    components:{
        myInput
    },
    mounted() {

    },




}
</script>

<style lang="scss" scoped>
  .auth{
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    height: 440px;
    width: 679px;
    border-radius: 10px;
    background:$primary;
    .container{
        margin: 0 auto;
        width: 469px;
        h2{
            color:#FCA311;
            text-align: center;
            font-size: 36px;
        }
        .regLink{
            font-size: 18px;
            color: white;
        }
        button{
            border-radius: 10px;
        }
    }


  }

</style>

