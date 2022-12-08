<template>
  <q-layout view="hHh lpR fFf" mini-to-overlay="false" class="dark" >

    <q-header class="bg-primary text-white" style="height:47px">
      <q-toolbar class="row justify-end">

          <q-btn flat @click="drawer = !drawer" round dense icon="menu" v-if="this.width<1200"  />

          <div>
            <span class="userName">{{getUser}}</span>
            <q-btn @click="logout" no-caps color="accent" label="Logout" text-color='black' class="loBtn" />
          </div>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above  side="left" class="aside" breakpoint="1220"  v-model="drawer"  :width="246">
      <div class="wrapper ">
          <div class="title">
            ZooPark
          </div>
          <q-btn to="/animalscard" no-caps label="Animals card"  unelevated color="warning" class="myBtn"/>
          <q-btn to="/animals" no-caps label="Animals"  unelevated color="warning" class="myBtn"/>
          <q-btn to ="/userlist" no-caps label="User list"  unelevated color="warning" class="myBtn"/>
      </div>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  data() {
    return {
      width:0
    }
  },
  setup () {
    return {
      drawer: ref(true)
    }
  },
  created() {
    this.getUserInfo();
    this.width = window.innerWidth;
    window.addEventListener('resize', this.handleResize);

  },
  computed:{
    ...mapGetters(["getUser"])

  },
  methods: {
    ...mapActions(['getUserInfo','logout']),
    handleResize() {
      this.width = window.innerWidth;
    }
  },
}
</script>
<style lang="scss" scoped>
  .body–dark{
    background-color: #14213D;
  }
  .aside{
    width:250px !important
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: $primary;
    align-items: center;
    padding: 20px;
  }
  .myBtn{
    width:205px;
    height: 50px;
    font-size: 24px;
    margin-bottom: 24px;
    border-radius: 10px;
  }
  .title{
    align-self: flex-start;
    font-size: 36px;
    color:#FCA311;
    font-weight: 500;
    margin-bottom: 50px;
  }
  .loBtn{
    border-radius: 10px;
    width:90px;
    height:30px;
    margin-right: 30px;
  }
  .userName{
    font-size: 24px;
    font-weight: 500px;
    margin-right: 28px;
  }
  .dark{
    background-color:#14213D
  }

</style>