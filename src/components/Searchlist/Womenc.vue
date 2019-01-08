<template>
	<div>
		女士
		<mt-swipe :auto="4000">
			<mt-swipe-item  v-for="item in list":key="item.id">
				<div id="ads" :value="item.id">
					sddds
				</div>
				<img :src="item.url">
			</mt-swipe-item>		
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
				        { url: require("@/HomeImages/1.jpg"), id: 1 },
				        { url: require("@/HomeImages/2.jpg"), id: 2 },
				        { url: require("@/HomeImages/3.jpg"), id: 3 }
				      ]
			};
		},
		methods: {

		}
	};
</script>

<style lang="scss">
		
</style>