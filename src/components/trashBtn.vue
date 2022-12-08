<template>
<div>
  <button @click="deleteRecord">
    <img src="icons/trashIcon.svg" alt="" :id ="id">
  </button>
    <div class="overlay" v-if="isVisible">
    <div class="removeModal">
        <div class="removeDescription">
            Are you sure want to delete the entry?
        </div>
        <div class="removeBtns">
            <q-btn no-caps @click="onYesClick" color="accent" text-color="black" label="Yes" size="18px" />
            <div></div>
            <q-btn no-caps @click="onNoClick" color="accent" text-color="black" label="No" size="18px" padding="7px 22px" />
        </div>
    </div>
    </div>

</div>


</template>

<script>
import {mapActions,mapMutations} from 'vuex'
export default {
    data() {
        return {
            isVisible:false
        }
    },
    components:{
    },
    props:{
        id: Number,
        entity: String
    },

    methods: {
        ...mapActions(['deleteEntity']),
        async deleteRecord(){
            let res = await this.showModal()
            if(res){

                console.log(this.entity,this.id)
                this.deleteEntity({entity:this.entity, id:this.id})
            }
        },
        showModal(){
            return new Promise((resolve,reject)=>{

                this.isVisible = true
                this.onYesClick = () =>{
                    this.isVisible = false
                    resolve(true)
                }
                this.onNoClick = () =>{
                    this.isVisible = false
                    resolve(false)
                }
            })
        }


    },

}
</script>

<style lang="scss" scoped>
    button{
        background: transparent;
        border: none;
        img{
            width: 25px;
        }
    }
.overlay{
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba( #000000, .5)
}
.removeModal{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width: 262px;
    height: 201px;
    padding: 28px;
    background-color: $primary;
    border-radius: 10px;
    .removeDescription{
        text-align: center;
        color: $accent;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 19px;
        line-height: 28px;
    }
    .removeBtns{
        display: flex;
        justify-content: center;
        div{
            width: 15px;
        }
        button{
            border-radius: 10px;

        }
    }
}
</style>