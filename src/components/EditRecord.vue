<template>
   <div>
   	 <h1>Edit the record</h1>
   	 	Name: <input type="text" v-model="product.name" name="name"><br><br>
   	 	Author: <input type="text" v-model="product.author" name="author"><br><br>
   	 	Format: <input type="text" v-model="product.format" name="format"><br><br>
      <button @click="done()" type="button">Done</button>
   </div>
</template>

<script>
import axios from 'axios'

export default{
  props:['product'],
    computed:{
       getData(){
       	return this.$store.state.obj1
       }
    },
    methods: {
    	done(){
        // console.log(this.product.name)
        // console.log(this.$store.state.value)
    		this.$store.state.seen = false
        this.$store.state.seen3 = true
    	}
    }
}
</script>
