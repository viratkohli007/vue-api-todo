<template>
  <div>
    <h1>Hello</h1>
    <div v-if="loading" class="loader"></div>
    <div v-else><app-comp1 v-if="!this.$store.state.seen && !this.$store.state.seen2"></app-comp1> </div>
  </div>

</template>

<script>
import axios from 'axios'
import comp1 from './Comp1'

export default {
  name: 'HelloWorld',
  data () {
    return {
      info: null,
      loading:true,
    }
  },
  components: {
        'app-comp1': comp1,

  },
  created(){
     axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
     .then(response => {
      this.loading = false;
      this.$store.state.info2 = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin-left: 50%;
}


@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
