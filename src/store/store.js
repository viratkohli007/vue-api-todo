import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({

state: {
	value: [],
	info2: [],
	seen : false,
	obj1 : [],
	seen2 : false,
	seen3: true,
	seen4: false,
	loading:true,
	//addData: [{name: null, author:null, format:null, gtin14:null}]
	name: '',
	author: '',
	format: '',
	gtin14: ''

// },
// mutations: {
// 	GET : (test) {
// 		store.test = test;
// 	}
},
mutations: {
	  apicall: (state,res)=> {
	  	state.info2 = res
	  },
	  addRecord: (state) =>{
	  	state.info2.push({'name':state.name, 'author':state.author, 'format':state.format, 'gtin14':state.gtin14})
      	state.seen = false
      	state.seen2 = false
      	state.seen3 = true
      	state.seen4 = false
	  }
},
actions:{
   apicall: ({commit})=>{
   	axios.get(process.env.ROOT_API)
     .then(response => {
      this.loading = false;
      // state.info2 = response.data
      commit('apicall',response.data)
    })
   }
}

// actions:{
// 	get() : {
// 		testapi() {
// 			commit('GET')
// 		}
// 	}
// }
})
