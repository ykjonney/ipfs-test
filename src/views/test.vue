<template>
  <div class="home">
    <div class='list'>公司信息</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
    methods:{
      fetchCompanyinfo: function() {
			this.$http
				.get('https://www.ipcn.xyz/api/v1/companyinfo/', {})
				.then(res => {
					if (res.data.code === 200) {
						this.companyinfo = res.data.data;
						console.log(this.companyinfo)
						alert('请求成功')
					}

				})
				.catch(() => {});
		}
    },
    mounted(){
      this.fetchCompanyinfo()
    }

}
</script>
<style>
	.list{
		width:300px;
		height:300px;
		background-color:red;
	}
</style>
