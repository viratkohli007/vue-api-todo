<template>
   <div>
   	 <h1>Add the record</h1>
     <form>
   	 	Name: <input type="text" v-model="name"><br><br>
   	 	Author: <input type="text" v-model="author"><br><br>
   	 	Format: <input type="text" v-model="format"><br><br>
   	 	ID: <input type="text" v-model="id">
      <button @click="addd()" type="submit">Add</button>
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
				format: '',
				id:''
			}
		},
      methods: {
      	addd(){
      	var fd = [{name:this.name, author: this.author, format: this.format, gtin14:this.id}]
      	this.$store.state.info2 = _.concat(this.$store.state.value, fd)
      	this.$store.state.seen = false
      	this.$store.state.seen2 = false
      	this.$store.state.seen3 = true
      	this.$store.state.seen4 = false
      	//console.log(this.$store.state.info2)
      }
      }
	}
</script>
