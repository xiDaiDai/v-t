<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <HelloWorld></HelloWorld>
    </div>

</template>

<script>
    import HelloWorld from 'components/HelloWorld.vue'
    export default {
        name: 'index',
        components:{
            HelloWorld
        },
        data () {
            return {
                msg: "我是pages/hello.vue"
            }
        }
    }
</script>

<style scoped>

</style>
