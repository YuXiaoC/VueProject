<template>
	<div class="womenc">
		<div class="clike">
			猜您会喜欢
		</div>
		<div class="carousel">
			<mt-swipe :auto="2000">
				<mt-swipe-item v-for="item in list" :key="item.id">
					<img :src="item.url" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="recentsearch">
			近期搜索
		</div>
		<div class="hotsearch">
				<ul>
					<li v-for="hs in hotsearch" :title="hs" :key="hs"><span>{{hs}}</span> <i class="iconfont icon-right"></i> </li>
				</ul>
		</div>
		<div class="hot">
			热门搜索
		</div>
		<div class="hotsearch">
				<ul>
					<li v-for="hs in hotsearch" :title="hs" :key="hs"><span>{{hs}}</span><i class="iconfont icon-right"></i> </li>
				</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						url: require("@/HomeImages/1.jpg"),
						id: 1
					},
					{
						url: require("@/HomeImages/2.jpg"),
						id: 2
					},
					{
						url: require("@/HomeImages/3.jpg"),
						id: 3
					}
				],
				hotsearch:['Gucci','Alexander','Saint Laurent','Dsquared2','Valentino']
			};
		},
		methods: {

		}
	};
</script>

<style lang="scss" scoped>
	.womenc {
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