export default {
    actions:{
        async login(ctx,data){
            const response = fetch('http://localhost:5000/api/auth/login',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            .then(data=>{
                console.log(data)
                return data.json()
            }).then(data=>{
                if(data.message){
                    ctx.commit('setError',data.message)
                }
                if(data.user.token){
                    localStorage.setItem('userToken',data.user.token)
                    localStorage.setItem('userId',data.user.id)
                    ctx.commit('setUser',data.user)
                    this.$router.push('/')
                }



            })
            .catch(err=>{
                console.log(err)
            })


        },
        async getUserInfo(ctx){
            fetch(`http://localhost:5000/api/user/${localStorage.getItem('userId')}`,{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `bearer ${localStorage.getItem('userToken')}`
                }
            })
            .then(data=>{
                if(data.status === 403){
                    throw new Error
                }
                return data.json()
            })
            .then(data=>{
                console.log(data)
                ctx.commit('setUser',data[0])
                ctx.commit('setToken',localStorage.getItem('userToken'))
            })
            .catch(err=>{
                this.$router.push('/login')
            })
        },
        logout(ctx){
            ctx.commit('logout')
            this.$router.push('/login')
        }
    },
    mutations:{
        setUser(state,user){
            state.user = user
        },
        setError(state,error){
            state.login.error = error
        },
        setToken(state,token){
            state.user.token = token
        },
        logout(state){
            localStorage.removeItem('userToken','userId')
            state.user = {}
        }
    },
    state:{
        login:{
            error:''
        },
        user:{
            token: '',
            id:null,
            name:'',
            phone:'',
            email:'',
            removed:false
        }
    },
    getters:{
        getToken(state){
            return state.user.token
        },
        getUser(state){
            return state.user.name
        },
        getErrorMessage(state){
            return state.login.error
        }
    }
}