<template>
	<div id="detail">
		<div class="detailtop">
			<i class="iconfont icon-fanhui" @click="myback"></i>
			<span>
				<router-link to="/search">
				<i class="iconfont icon-552cd42559c1a"></i>					
				</router-link>
				 <router-link to="/cart">
				<i class="iconfont icon-gouwudai" ></i>
				</router-link>
			</span>
		</div>
		
		<div class="mian">
			<div class="jingxi">
				<h6>新春惊喜八折优惠！&nbsp;代码：x2019</h6>
			</div>
			<ul>
				<li v-for="item in list" :key="item.id" @click="goto(item.id)">
					<img :src="item.images.cutOut"/>
					<h6>{{item.shortDescription}}</h6>
					<p class="yuanjia"><del><i class="iconfont icon-qian"></i><span>{{item.priceInfo.initialPrice}}</span></del></p>
					<p class="xianjia"><i class="iconfont icon-qian"></i><span>{{item.priceInfo.finalPrice}}</span></p>
				</li>
			</ul>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			list:[],
			}
		},
		components: {

		},
		methods: {
			myback() {
				this.$router.go(-1);
			},
			goto(id){
				this.$router.push({path:'/detailpage/'+id});
			}

		},
		created() {
			this.$axios.get('http://localhost:4008/farapi/cn/plpslice/listing-api/products-facets').then(res => {
				let data = res.data.products;
				this.list=data;
			})
		},
		
			
	

	}
</script>

<style lang="scss">
	#detail {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		>.detailtop {
			width: 100%;
			height: 40px;
			background: #0080FF;
			line-height: 40px;
			box-sizing: border-box;
			padding: 0 10px 0 10px;
			font-size: 20px;
			font-weight: 900;
			>i {
				margin-left: 10px;
			}
			>span {
				float: right;
				i {
					margin: 0 10px 0 10px;
				}
			}
		}
		>.mian {
			flex: 1;
			overflow-x: hidden;
			display: flex;
			flex-direction: column;
			background: #fff;
			>.jingxi{
				width: 100%;
				height: 30px;
				background: #eee;
				text-align: center;
				line-height: 30px;
				>h6{
					color: red;
					width: 100%;
					height:100%;
				}
			}
			>ul{
				height: 100%;
				width: 100%;
				
			>li{
				list-style: none;
				box-sizing: border-box;
				width: 50%;
				height: 300px;
				border: 1px solid #eee;
				float: left;
				text-align: center;
				padding: 20px 30px 0 30px;
			
				>img{
					height: 170px;
					width: 80px;
				}
				>h6{
					width: 100%;
					margin-top: 10px;
				}
				>.yuanjia{
					margin-top: 10px;					
					font-size: 12px;
					color: red;
					i{
					font-size: 10px;						
					}
				}
				>.xianjia{
					margin-top: 10px;					
					font-size: 12px;
						i{
					font-size: 10px;						
					}
				}
			}	
			}
		}
	}
</style>