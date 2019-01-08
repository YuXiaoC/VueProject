<template>
	<div>
		<mt-tab-container-item id="1">
				<mt-cell v-for="c in con1" :key="c" :title="'nz女装 ' + c" />			
		</mt-tab-container-item>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				con1: [1, 2, 3],
			};
		},
		methods: {

		}
	};
</script>

<style lang="scss">

</style>