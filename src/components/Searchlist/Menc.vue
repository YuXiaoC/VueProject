<template>
	<div class="menc">
		<div class="clike">
			猜您会喜欢
		</div>
		<div class="carousel">
			<mt-swipe :auto="2000">
				<mt-swipe-item v-for="item in list" :key="item.id" @click.native="goto(item.id)">
					<img :src="item.images.cutOut" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="recentsearch">
			近期搜索
		</div>
		<div class="hotsearch">
				<ul>
					<li v-for="rs in recentsearch" :title="rs.shortDescription" :key="rs.id" @click="goto(rs.id)"><span>{{rs.shortDescription}}</span> <i class="iconfont icon-right"></i> </li>
				</ul>
		</div>
		<div class="hot">
			热门搜索
		</div>
		<div class="hotsearch">
				<ul>
					<li v-for="hs in hotsearch" :title="hs.shortDescription" :key="hs.id" @click="goto(hs.id)"><span>{{hs.shortDescription}}</span><i class="iconfont icon-right"></i> </li>
				</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				recentsearch:[],
				hotsearch:[]
			};
		},
		created(){
		this.$axios.get('http://localhost:4008/farapi/cn/plpslice/listing-api/products-facets').then(res=>{
			let data = res.data;
			this.list = data.products.sort((a, b) => b.brand.id - a.brand.id).slice(30,33);	
			this.recentsearch = data.products.sort((a, b) => b.brand.id - a.brand.id).slice(11,15);				
			this.hotsearch = data.products.sort((a, b) => b.brand.id - a.brand.id).slice(16,20);		
			})
   		 },
		methods: {
			goto(id){
				this.$router.push({path:'/detailpage/'+id})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.menc {
		.clike{
			font-weight: bold;
			text-align: center;
			height: 50px;
			line-height: 50px;
			margin-top: 6px;
		}
		.recentsearch{
			font-weight: bold;
			text-align: center;
			height: 50px;
			line-height: 50px;
			margin-top: 6px;
			border-bottom:1px solid #666;
		    box-sizing: border-box;
		}
		.hot{
			font-weight: bold;
			text-align: center;
			height: 50px;
			line-height: 50px;
			margin-top: 6px;
			border-bottom:1px solid #666;
		    box-sizing: border-box;
		}
		
		>.hotsearch{
			margin-bottom: 50px;
			>ul{
				>li{
					padding-left: 30px;
					padding-right: 30px;				
					box-sizing: border-box;
					height: 40px;
					width: 100%;
					border-bottom:1px solid #666;
					line-height: 40px;
					>span{
						display: inline-block;
						float: left;
						}
					>i{
					display: inline-block;
					float: right;
				}
				}
			}
		}
		
	}
	.mint-swipe img {
		height: 160px;
		width: 100%;
	}	
	.carousel {
		margin-top: 6px;
		height: 160px;
	}
</style>