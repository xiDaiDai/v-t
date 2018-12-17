<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <div v-for="item in items">
            <label>{{item}}</label>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
                msg: "我是list 组件",
                items:[1,2,3,4,5,5,6,6,7,8,8]
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
