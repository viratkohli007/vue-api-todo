<template>
   <div>
   	 <h1>Edit the record</h1>

   	 	Name: <input type="text" v-model="getData.name" name="name"><br><br>
   	 	Author: <input type="text" v-model="getData.author" name="author"><br><br>
   	 	Format: <input type="text" v-model="getData.format" name="format"><br><br>
      <button @click="done()" type="button">Done</button>

   </div>
</template>

<script>
import axios from 'axios'

export default{
    computed:{
       getData(){

       	return this.$store.state.obj1
       }
    },
    methods: {
    	done(){
    		this.$store.state.seen = false
        this.$store.state.seen3 = true
    	}
    }
}
</script>
