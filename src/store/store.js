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
	seen3: true
}
})
