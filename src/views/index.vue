<template>
  <div class="home">
    <router-link to='/test'>点击</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
    methods:{
      test(){
          this.$router.push('/test')
      }
    }
 /* components: {
    HelloWorld
  } */
}
</script>
<style>
	.cir{
		width:300px;
		height:300px;
		background-color: #FF0000;
	}
</style>
