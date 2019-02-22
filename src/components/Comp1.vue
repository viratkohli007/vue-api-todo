<template>
	<div>
		<div v-if="this.$store.state.seen3">
	  <button class="btn btn-secondary" @click="add()">+Add New Product</button>
	  <br><br>
	  	<table class="table table-hover">
	  		<thead>
	  			<tr>
	  				<th>Name</th>
	  				<th>Author</th>
	  				<th>Format</th>
	  				<th>Actions</th>
	  			</tr>
	  		</thead>
	  		<tbody>
	  			<tr v-for="value in val">
	  				<td >{{value.name}}</td>
	  				<td>{{value.author}}</td>
	  				<td>{{value.format}}</td>
	  				<td><button class="btn btn-info" @click="edit(value.gtin14)">edit</button>
	  				<button class="btn btn-danger" @click="deleteq(value.gtin14)">delete</button></td>
	  			</tr>
	  		</tbody>
	  	</table>
	  </div>
	  	<app-edit v-if="!this.$store.state.seen3"></app-edit>
	  	<app-add v-if="this.$store.state.seen3 && this.$store.state.seen2"></app-add>
	</div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import Edit from './EditRecord'
import Add from './AddRecord'
	export default{
		data(){
			return{
				filterText: '',
			}
		},
		computed: {
			val(){
				this.$store.state.value = this.$store.state.info2
				return this.$store.state.value
         console.log(this.$store.state.value)
				}
			},
			components: {
				'app-edit': Edit,
				'app-add' : Add
			},
		created(){
      axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
      .then(response=>{this.$store.state.info2 = response.data})
      .catch(err => {console.log(err)})
		},
		methods: {
			edit(event){
     // this.$store.state.seen = true
         this.$store.state.seen3 = false
     this.$store.state.obj1 = _.find(this.$store.state.value, {'gtin14': event})


			},
			deleteq(event){
     this.$store.state.value = _.remove(this.$store.state.value, {'gtin14': event })
			},
			add(){
				// this.$store.state.seen = true
				this.$store.state.seen2 = true
				this.$store.state.seen3 = true
			}
		}
	}
</script>
