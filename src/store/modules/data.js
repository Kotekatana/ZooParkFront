export default {
    actions:{
        async fetchData(ctx,entity){
            fetch(`http://localhost:5000/api/${entity}`,{
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
                ctx.commit('setData',data)
            })
            .catch(err=>{
                this.$router.push('/login')
            })
        },
        async deleteEntity(ctx,{entity,id}){
            fetch(`http://localhost:5000/api/${entity}/${id}`,{
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `bearer ${localStorage.getItem('userToken')}`
                }
            })
            .then(res=>{
                if (res.status === 200){
                    ctx.commit('removeDeletedCard',id)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        async uploadCard(ctx,{entity,data}){
            fetch(`http://localhost:5000/api/${entity}/`,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `bearer ${localStorage.getItem('userToken')}`
                },
                body:data
            })
            .then(res=>{
                if(res.status === 403){
                    this.$router.push('/login')
                }

                return res
            })
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                this.$router.push('/login')
            })
        },
    },
    mutations:{
        setData(state,data){
            state.data = data
        },
        removeDeletedCard(state,id){
            state.data = state.data.filter(entity => entity.id != id)
        }
    },
    state:{
        loading:false,
        data:[]
    },
    getters:{
        getData(state){
            return state.data
        },
        getLoading(state){
            return state.loading
        }
    }
}