<template>
    <div class="hello">
       HEADER
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        background: #eaeaea;
        padding: 40px;
    }
</style>
