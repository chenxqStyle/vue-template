<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
    	<button @click='test'>test vuex</button>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
  	return {}
  },
  methods:{
  	test(){
  		this.$router.push({name:'testvuex'})
  	}
  }
}
</script>
