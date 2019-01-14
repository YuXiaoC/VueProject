<template>
	<div class="goodsinfo">
		<div class="goodsdiv1">
			<p>新季</p>
		</div>
		<div class="goodsdiv2">
			<p class="fl">{{shangping.merchandiseLabelField}}</p><p class="fr"><i class="iconfont icon-qian"></i><span>{{shangping.priceInfo.finalPrice}}</span></p>
		</div>
		<div class="goodsdiv3">
			<p>{{shangping.shortDescription}}</p><span>(已含关税)</span>
		</div>
		<div class="goodsdiv4">
			<input type="button" name="" id="" value="选定尺寸" />
		</div>
	</div>
</template>

<script>
	export default {
		 props: [
		 'shangping'
		 ],
		data() {
			return {	
					
			}
		},
	}
</script>

<style>

</style>