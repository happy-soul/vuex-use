<template>
    <div>
        <p>组件B</p>
        <p>组件名称：{{ newName }}</p>
        <div>
            <button @click="changeB('组件b')">改变组件B</button>
        </div>
        <div>
            <button @click="turnToA">跳转到A组件</button>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: 'B',
        methods: {
            ...mapActions(['changeB']),  //this.$store.actions.modifyName
            turnToA(){
                this.$router.push({path: '/001'}) 
            }
        },
        computed: {
            ...mapGetters(['newName'])
        }
    }
</script>

<style scoped>

</style>




