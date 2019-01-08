<template>
		<div>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in con1" :key="n" :title="'选项 ' + n" />
			  </mt-tab-container-item>
		</div>
</template>

<script>
	export default{
		data(){
			return{
					selected:'',
					con1: [1, 2, 3],
			};
		},
		methods:{
			
		}
	};
</script>
	
<style lang="scss">
</style>