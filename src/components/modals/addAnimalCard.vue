<template>
<div class="overlay" >
  <div class="animalCardForm">
    <div class="title">
        Add animal card
    </div>
    <form id="addCardForm" enctype="multipart/form-data">

        <div class="row" >
            <div class="col-5">
                <label for="">
                    Animal type
                </label>
            </div>
            <div class="col-7">
                <input v-model="form.animal_type" type="'text'" />
            </div>
        </div>

        <div class="row">
            <div class="col-5">
                <label for="">
                    Animal birthday
                </label>
            </div>
            <div class="col-7">
                <input v-model="form.birthday" placeholder="YYYY-MM-DD" type="date"/>
            </div>
        </div>

        <div class="row">
            <div class="col-5">
                <label for="">
                    Aviary number
                </label>
            </div>
            <div class="col-7"><input v-model="form.aviary_number" :placeholder="''" :type="'text'" :errorMessage="getErrorMessage" /></div>
        </div>

        <div class="row">
            <div class="col-5">
                <label for="">
                    Moniker
                </label>

            </div>
            <div class="col-7"><input v-model="form.moniker" :placeholder="''" :type="'text'" :errorMessage="getErrorMessage" /></div>
        </div>

        <div class="row">
            <div class="col-5">
                <label for="">
                    Animal food
                </label>
            </div>
            <div class="col-7">
                <input v-model="form.food" :placeholder="''" :type="'text'" :errorMessage="getErrorMessage" />
            </div>
        </div>

        <div class="row">
            <div class="col-5">
                <label for="">
                    Description
                </label>
            </div>
            <div class="col-7">
                <textarea v-model="form.description" class="description"/>
            </div>
        </div>
        <div class="row uploadRow">
            <div class="col-5">
                <label for="file-upload">
                    Upload a photo
                </label>
            </div>
            <div class="col-3">
                <label class="customInput">
                    Overview
                    <input type="file" name="file" id="file-upload" @change="previewFile" accept="image/*">
                </label>
            </div>
            <div class="col-4">
                <img v-if="url"
                :src="url"
                alt="Image preview"
                class="previewImage"
                >
            </div>



        </div>
        <div class="row btns justify-end">
            <div class="col-7 offset-5 flex-end">
                <q-btn class="mr20" no-caps @click="onNoClick" color="accent" text-color="black" label="Cancel" size="14px" />
                <q-btn no-caps @click="onYesClick" color="accent" text-color="black" label="Apply" size="14px" />
            </div>

        </div>
    </form>
  </div>
</div>

</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            url:null,
            isActive:false,
            form:{
                animal_type:'',
                birthday:'',
                aviary_number:'',
                moniker:'',
                food:'',
                description:'',
                photo:null
            },
        }
    },
    props:{
        isVisible:Boolean
    },
    methods: {
        ...mapActions(['uploadCard']),
        async previewFile(e){
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                this.form.photo = reader.result
            }
            reader.readAsDataURL(file);

            if(file){
            this.url = URL.createObjectURL(file)
            }else{
                this.url = null
            }

        },
        onNoClick(){
            this.$emit('closeModal')
        },
        onYesClick(){
            this.uploadCard({entity:'animalCard',data:JSON.stringify(this.form)})

            // console.log(this.form)
            // this.uploadData({entity:'animalCard',obj:this.form})
        }
    },
}
</script>

<style lang="scss" scoped>
.overlay{
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba( #000000, .5)
}
.animalCardForm{
    background-color: $primary;
    width: 553px;
    height: 637px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding: 22px;
    .title{
        text-align: center;
        color:$accent;
        font-size: 36px;
        font-weight: 500;

    }
    label{
        color:white;
        font-size: 24px;
        line-height: 28px;
        font-weight:500;
    }
    .row{
        margin-bottom: 8px;
    }
    input{
        width: 100%;
        height: 35px;
        background: rgba(229, 229, 229, 0.6);
        border-radius: 10px;
        color:black;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 7px;
        border: none;
    }
    .description{
        width: 100%;
        height: 130px;
        background: rgba(229, 229, 229, 0.6);
        border-radius: 10px;
        color:black;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 7px;
        border: none;
        resize: none;
    }
    input[type="file"] {
        display: none;
    }
    .customInput {
        border: 1px solid $accent;
        border-radius: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 5px 17px;
    }
    .previewImage{
        width: 100%;
        height: 99px;
        border-radius: 10px;

    }
    .uploadRow{
        height: 100px;
        margin-bottom: 30px;
        margin-top: 25px;
    }
    button{
        border-radius: 10px;
        height: 30px;
        width: 105px;
    }
    .mr20{
        margin-right: 20px;
    }
    .flex-end{
        display: flex;
        justify-content: flex-end;
    }
}
</style>