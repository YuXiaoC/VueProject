<template>
	<div>
		<mt-search v-model="keyword" cancel-text="取消" placeholder="搜索" autofocus>
		</mt-search>
	</div>
</template>

<script>
	export default {
		props:['keyword'],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
		

</style>