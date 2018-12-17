<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <div>
            <label>列表页面</label>
            <router-link to="/pages/list">list</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
