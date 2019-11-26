<template>
	<div class='se'>
		<h3>我是子组件</h3>
		此时的count:{{getCaseInfo.a}}
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {

		data(){
	  		return {}
	  	},
	  	computed:{
	  		...mapGetters(['getCaseInfo'])
	  	},
	  	mounted(){
	  		console.log(this.$store)
	  	}

	}
	
</script>
<style scoped>
	.se{
		border:2px solid #ddd;
		border-radius: 6px;
		font-size: 20px;
	}
	h3{
		font-size: 30px;
	}
</style>