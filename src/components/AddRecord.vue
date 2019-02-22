<template>
   <div>
   	 <h1>Add the record</h1>
     <form>
   	 	Name: <input type="text" v-model="name"><br><br>
   	 	Author: <input type="text" v-model="author"><br><br>
   	 	Format: <input type="text" v-model="format"><br><br>
      <button @click="addd()">Add</button>
     </form>

   </div>
</template>

<script>
import _ from 'lodash'
	export default{
		data(){
			return{
				name: '',
				author: '',
				format: ''
			}
		},
      methods: {
      	addd(){
      	var fd = [{name:'q', author: this.author,format: this.format}]
      	this.$store.state.value = _.concat(this.$store.state.value, fd)
      	this.$store.state.seen = false
      	this.$store.state.seen2 = false
      	this.$store.state.seen3 = true
      	this.$store.state.seen4 = false
      }
      }
	}
</script>
