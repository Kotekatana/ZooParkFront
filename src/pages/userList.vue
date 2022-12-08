<template>
<div class="tableWrapper">
  <div class="header row items-end">
    <span class="title">Animals card</span>
    <q-btn no-caps @click="submit" color="accent" text-color="black" label="Add" size="18px"/>
    <q-btn no-caps @click="submit" color="accent" text-color="black" label="Removed" size="18px"/>
  </div>
  <div class="filters">
    <div class="filter"></div>
    <div class="filter"></div>
    <div class="filter"></div>
  </div>
  <table border="none">
    <tr>
      <th>Id</th>
      <th>name</th>
      <th>email</th>
      <th>phone</th>
      <th>password</th>
      <th>actions</th>
    </tr>
    <tr v-for="user in getData" :key="user.id">
      <td class="tableId">{{user.id}}</td>
      <td class="tableAviaryNumber">{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.password}}</td>
      <td><trash-btn :id="user.id" entity="user"/></td>
    </tr>
  </table>
</div>

</template>

<script>

import trashBtn from '../components/trashBtn.vue'
import {mapActions,mapGetters} from 'vuex';

export default{
  data(){
    return{
    }
  },
  components:{
    trashBtn
  },
  created() {
    this.fetchData('user')
  },
  computed:{
    ...mapGetters(['getData'])
  },
  methods: {
    ...mapActions(['fetchData']),
  },
}
</script>

<style lang="scss" scoped>
.tableWrapper{
  padding: 20px;
  .header{
    margin-bottom: 38px;
    height:45px;
    button{
      border-radius: 10px;
      margin-right: 20px;
    }
    .title{
      font-size: 24px;
      color:white;
      margin-right: 38px;
    }
  }
  table{
      width: 100%;
      border: none;
      border-collapse: collapse;
      background-color: #4C5C81;
      color: white;
      text-align: center;
      tr{
        height: 44px;
      }
      .tableId{
        width: 46px;
      }
      .tableAviaryNumber{
        width: 79px;
      }
  }
}
</style>