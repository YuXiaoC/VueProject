<template>
		<div class="detailtu">
			<mt-swipe :auto="0">
				  <mt-swipe-item>
				  	<img :src="shangping.images.cutOut"/>
				  </mt-swipe-item>
			</mt-swipe>
		</div>		
</template>

<script>
	 export default {
	 	 props: [
					 'shangping'
					 ],
	 	data(){
	 			return {}
	 		},
		 }
</script>

<style lang="scss">
	
</style>