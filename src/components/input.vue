<template>
    <div class="mb-30">
        <input :type="type" style="width=50px" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)">
        <span class="error">{{errorMessage}}</span>
    </div>

</template>

<script>
export default {
        name:'Input',
        props:{
            placeholder:String,
            type:String,
            modelValue:String,
            errorMessage:String,
            width:String,
            height:String,
        }
}
</script>
<style lang="scss" scoped>
    input{
        border: none;
        width: 469px;
        height: 65px;
        background: rgba(229, 229, 229, 0.6);
        border-radius: 10px;
        padding-left: 25px;
        color:black;
        font-size: 24px;

    }
    input::placeholder{
        color:black;
        opacity: 1;
        }
    .mb-30{
        margin-bottom:30px;
    }
    .error{
        color:red
    }
</style>