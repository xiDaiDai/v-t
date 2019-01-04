<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <h2>{{msg}}</h2>
        <HelloWorld></HelloWorld>
    </div>

</template>

<script>
    import HelloWorld from 'components/HelloWorld.vue'
    export default {
        name: 'index',
        components: {
            HelloWorld
        },
        data () {
            return {
                msg: "我是pages/hello.vue"
            }
        }
    }
</script>

<style scoped lang="less">
    //可单独引入通用样式 或者 全局生效vue.config.js theme.less
    @import '../theme/common.less';

    .hello {
        font-size: 20px;
        h1 {
            color: @base;
        }
        h2 {
            color:@primary
        }
    }
</style>
