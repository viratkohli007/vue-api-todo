<template>
   <div class="space">
     <h1>Add the record</h1>

      Name: <input type="text"  name="name" v-model="name"><br><br>
      Author: <input type="text"  name="author" v-model="author"><br><br>
      Format: <input type="text"  name="format" v-model="format"><br><br>
      ID: <input type="text" name="id" v-model="id">
      <button class="btn btn-info" @click="addd()" type="submit">Add</button>

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
      	//var fd = [{name:this.name, author: this.author, format: this.format, gtin14:this.id}]
      	// this.$store.state.info2 = _.concat(this.$store.state.value, fd)
        this.$store.state.name = this.name
        this.$store.state.author = this.author
        this.$store.state.format = this.format
        this.$store.state.gtin14 = this.id
        this.$store.commit('addRecord')
        this.$model.hide('add-product')
       //  this.$store.state.info2.push({'name':this.$store.state.name, 'author':this.$store.state.author, 'format':this.$store.state.format, 'gtin14':this.$store.state.gtin14})
      	// this.$store.state.seen = false
      	// this.$store.state.seen2 = false
      	// this.$store.state.seen3 = true
      	// this.$store.state.seen4 = false
      	//console.log(this.$store.state.info2)
         }
      }
	}
</script>
<style>
.space{
  margin:20px;
}

</style>
