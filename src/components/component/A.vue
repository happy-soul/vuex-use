<template>
    <div>
       <p>组件A</p>
       <p>组件名称：{{ newName }}</p>
       <div>
           <button @click="changeA('组件a')">改变组件A</button>
       </div>
       <div>
           <button @click="turnToB">跳转到B组件</button>
       </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: 'A',
        methods: {
            ...mapActions(['changeA']),  
            turnToB(){
                this.$router.push({path: '/002'}) 
            }
        },
        computed: {
            ...mapGetters(['newName'])
        }
    }
</script>

<style scoped>

</style>




