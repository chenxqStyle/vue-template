<template>
	<div>
		<h2>test vuex</h2>
		<vueTextX></vueTextX>
		<button @click='add'>+++++</button>
		<button @click='reduce'>-----</button>
		<button @click='getData'>getData</button>
		<div class='d1'></div>
		<div class='d2'></div>
	</div>
</template>
<script>
	import vueTextX from '@/components/test-vuex-com'
	import { search } from '@/api/index'
	export default {
		data(){
	  		return {}
	  	},

	  	components: {
	  		vueTextX
	  	},

	  	methods:{
	  		add(){
	  			this.$store.dispatch('storeAdd',1)
	  		},
	  		reduce(){
	  			this.$store.dispatch('storeReduce',1)
	  		},
	  		getData(){
	  			this.$Api.search()
	  		}
	  	}
	}
	
</script>
<style scoped>
	div{
		font-size: 36px;
	}
	.d1,.d2{
		display: inline-block;
	}
	.d1{
		width: 50px;
		height: 50px;
		background: yellow;
	}
	.d2{
		width: 70px;
		height: 70px;
		background: green;
	}
</style>