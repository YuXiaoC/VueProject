<template>
	<div class="particularly">
		<div class="biaoti">
			<p>特别为您推荐</p>
		</div>
		<div class="good">
			<ul>
				<li v-for="item in recommend" :key="item.id+'0'">
					<img :src="item.images.model"/>
					<h4>{{item.shortDescription}} </h4>
					<p class="yuanjia"><del><i class="iconfont icon-qian"></i>{{item.priceInfo.initialPrice}}</del></p>
					<p class="xianjia"><i class="iconfont icon-qian"></i>{{item.priceInfo.finalPrice}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommend:[]
			}
		  },
		  created(){
		this.$axios.get('http://localhost:4008/farapi/cn/plpslice/listing-api/products-facets').then(res=>{
				let data = res.data;
			this.recommend = data.products.sort((a, b) => b.brand.id - a.brand.id).slice(0,6)
			})
   		},
	}
</script>

<style>
</style>