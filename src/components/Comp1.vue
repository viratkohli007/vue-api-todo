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
	  			<tr v-for="(value, index) in val" :id="index" class="">
	  				<td>{{index}}-> {{value.name}}</td>
	  				<td>{{value.author}}</td>
	  				<td>{{value.format}}</td>

	  				<td><button class="btn btn-info" data-toggle="modal" @click="editModal(value, index)" data-target="#myModal">edit</button>
	  				<button class="btn btn-danger" @click="deleteq(value.gtin14)">delete</button></td>
	  			</tr>
	  		</tbody>
	  	</table>
	  </div>

	  <modal name="add-product" height="auto">
	  	<div >
	  		<app-add v-if="this.$store.state.seen4 "></app-add>
	  	</div>
    </modal>

	  <div class="modal fade" id="myModal">
     <div class="modal-dialog modal-content">


      <app-edit v-if="!this.$store.state.seen3 && !this.$store.state.seen4" :product="product"></app-edit>

   	 <h1>Edit the record</h1>
      <div v-if="product != null">
   	 	Name: <input type="text"  name="name" v-model="product.name"><br><br>
   	 	Author: <input type="text"  name="author" v-model="product.author"><br><br>
   	 	Format: <input type="text"  name="format" v-model="product.format"><br><br>
   	 	<input type="text" v-model="val.length">
   	 	</div>
      <button type="button" data-dismiss="modal" class="btn btn-success" @click="editDone">Done</button>
   </div>
	</div>

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
				product:null,
				addcolor: false,
				value: null,
				index: null
			}
		},
		computed: {
			val(){
				this.$store.state.value = this.$store.state.info2
				return this.$store.state.value

				}
			},
			components: {
				'app-edit': Edit,
				'app-add' : Add
			},
		created(){
      // axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
      // .then(response=>{this.$store.state.info2 = response.data})
      // .catch(err => {console.log(err)})
      this.$store.dispatch('apicall');
		},
		methods: {
			edit(value, index){
     // this.$store.state.seen = true
         this.$store.state.seen3 = false
         this.product = value;
     // this.$store.state.obj1 = _.find(this.$store.state.value, {'gtin14': event})

			},
			deleteq(event){
				var r = confirm("Are You Sure ???");
          if (r == true) {
            this.$store.state.value = _.remove(this.$store.state.value, {'gtin14': event })
          }
			},
			add(){
				// this.$store.state.seen = true
				this.$store.state.seen4 = true
				 this.$store.state.seen3 = true
				 this.$modal.show('add-product')
				// this.$store.state.seen2 = true
				// this.$store.state.seen = true

			},
			editModal(value, index){
				// alert('q')
				console.log(index)

				this.removeClass();
				if(this.addcolor){
				document.getElementById(index).className = 'AddColor'
			}else{
				this.addcolor = false
			}
			  this.value = value
			  this.index = index
        this.product = value
        this.addcolor = false
        //console.log(this.product)
			},
			removeClass(){
				for(var i=0; i<this.val.length; i++){
					document.getElementById(i).classList.remove('AddColor')
				}
			},
			editDone(){
       this.addcolor= true
       this.editModal(this.value, this.index)
			}
		}
	}
</script>
<style>
 .AddColor{
 	background-color : green
 }
</style>
