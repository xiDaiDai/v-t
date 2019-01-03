<template>
    <div class="hello">
         {{msg}}
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return {

            }
        },
        props: {
            msg: String
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
      background: #eaeaea;
      padding: 40px;
  }
</style>
