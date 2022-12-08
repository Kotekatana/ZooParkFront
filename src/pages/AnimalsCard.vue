<template>
<div class="tableWrapper">

  <div class="header row items-end">
    <span class="title">Animals card</span>
    <q-btn no-caps @click="openModal" color="accent" text-color="black" label="Add" size="18px"/>
    <q-btn no-caps @click="submit" color="accent" text-color="black" label="Removed" size="18px"/>
  </div>
  <div class="filters">
    <div class="filter"></div>
    <div class="filter"></div>
    <div class="filter"></div>
  </div>

  <table border="none" v-if="!getLoading">
    <tr>
      <th>Id</th>
      <th>aviary number</th>
      <th>birthday</th>
      <th>moniker</th>
      <th>description</th>
      <th>food</th>
      <th>actions</th>
    </tr>
    <tr v-for="card in getData" :key="card.id">
      <td class="tableId">{{card.id}}</td>
      <td class="tableAviaryNumber">{{card.aviary_number}}</td>
      <td>{{card.birthday}}</td>
      <td>{{card.moniker}}</td>
      <td>{{card.description}}</td>
      <td>{{card.food}}</td>
      <td class="actions">
        <edit-btn :id="card.id" :entity="'animalCard'"/>
        <trash-btn :id="card.id" :entity="'animalCard'"/>
      </td>
    </tr>
  </table>
  <spinner v-if="getLoading"/>
  <add-animal-card v-if="isVisible" @close-modal="closeModal"/>
</div>

</template>

<script>
import spinner from '../components/spinner.vue'
import addAnimalCard from '../components/modals/addAnimalCard.vue'
import trashBtn from '../components/trashBtn.vue'
import {mapActions,mapGetters} from 'vuex';
import EditBtn from '../components/editBtn.vue';
export default{
  data(){
    return{
      isVisible:false
    }
  },
  components:{
    trashBtn,
    addAnimalCard,
    EditBtn,
    spinner
  },
  created() {
    this.fetchData('animalCard')
  },
  computed:{
     ...mapGetters(['getData','getLoading'])
  },
  methods: {
    ...mapActions(['fetchData']),
    openModal(){
      this.isVisible = true
    },
    closeModal(){
      this.isVisible = false
    }
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
      .actions{
        display: flex;
        height: 44px;
        justify-content: center;
        align-items: center;
      }
  }
}
</style>