<template>
    <div class="auth">
        <div class="container">
            <form action="" color="primary">
                <h2>Authorization</h2>

                <q-input outlined v-model="ph" bg-color="positive"  placeholder="Login" hint="With placeholder" :dense="dense" />
                <q-input outlined v-model="ph" type="passwordЦФ" bg-color="positive" placeholder="Password" hint="With placeholder" :dense="dense" />

                <div class="btns">
                    <router-link to="/registration" class="regLink">Регистрация</router-link>
                    <q-btn color="accent"  size="24px" padding="12px 63px" text-color="black" label="Login" class="b10px" />
                </div>

            </form>
        </div>

    </div>

</template>

<script>
export default {

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
        q-input{
            width: 469px ;
        }
        .b10px{
            border-radius: 10px;
        }
        .btns{
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
        }
        .regLink{
            font-size: 18px;
            color: white;
        }
    }

  }

</style>

