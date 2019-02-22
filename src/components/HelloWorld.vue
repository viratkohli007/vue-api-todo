<template>
  <div>
    <h1>Hello</h1>
    <app-comp1 v-if="!this.$store.state.seen && !this.$store.state.seen2"></app-comp1>
    <!-- <app-edit v-if="this.$store.state.seen"></app-edit> -->
    <app-add v-if="!this.$store.state.seen && this.$store.state.seen2"></app-add>
  </div>

</template>

<script>
import axios from 'axios'
import comp1 from './Comp1'

import Add from './AddRecord'

export default {
  name: 'HelloWorld',
  data () {
    return {
      info: null
    }
  },
  components: {
        'app-comp1': comp1,
        'app-add' : Add
  },
  created(){
     axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
     .then(response => {this.$store.state.info2 = response.data})
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
</style>
