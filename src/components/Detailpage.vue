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
			<detailtu v-bind:shangping="goods"></detailtu>
			<goodsinfo v-bind:shangping="goods"></goodsinfo>
			<particularly></particularly>
		</div>

		<div class="btn">
			<div>
				<router-link to="/cart">
					<input type="button" name="" id="" value="加入购物袋" @click="addcart()"/>						
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import detailtu from './Detailpages/detailtu';
	import goodsinfo from './Detailpages/goodsinfo';
	import particularly from './Detailpages/particularly';

	export default {
		data() {
			return {
				goods: {priceInfo:{},images:{}},
			}
		},
		components: {
			detailtu,
			goodsinfo,
			particularly
		},
		 methods:{
		 	myback(){
		 		 this.$router.go(-1);
		 	},
		 	addcart(){
    //设置名称为name,值为value的Cookie
    			var expdate = new Date();   //初始化时间
    			expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间单位毫秒    		
    			var data =this.goods;
   				 var str = data.toString();
    			 //将json转为字符串；
   				 var str = JSON.stringify(data);
   				 //设置cookie
// 				 document.cookie = 'username=' + _username + ';expires=' + date.toUTCString();  
			 document.cookie = name + '=' + str + ';expires=' + expdate;			 
// 		 document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";
   //即document.cookie= name+"="+value+";path=/";  时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
		 	}	 	
		 },
		created() {
			this.$axios.get('http://localhost:4008/farapi/cn/plpslice/listing-api/products-facets').then(res => {
				let data = res.data.products;
				let id = this.$route.params.id
				for (var i =0;i<data.length;i++) {
						if(data[i].id==id){
							this.goods = data[i];
						}
				}
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
			background: #eee;
			flex: 1;
			overflow-x: hidden;
			>.detailtu {
				width: 100%;
				height: 300px;
				>.mint-swipe {
					width: 100%;
					height: 100%;
					>.mint-swipe-items-wrap {
						width: 100%;
						height: 100%;
						>.mint-swipe-item {
							width: 100%;
							height: 100%;
							>img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
			>.goodsinfo {
				background: #fff;
				/*display: flex;
				flex-direction: column;*/
				width: 100%;
				height: 160px;
				/*background: #0077AA;*/
				>.goodsdiv1 {
					height: 20px;
					width: 100%;
					color: orange;
					font-size: 12px;
					line-height: 20px;
					text-indent: 2em;
				}
				>.goodsdiv2 {
					height: 30px;
					width: 100%;
					line-height: 30px;
					>p {
						padding: 0 10px 0 10px;
						height: 100%;
						display: inline-block;
						font-size: 16px;
						font-weight: 900;
						>i {
							font-size: 12px;
						}
						>span {
							font-size: 12px;
						}
					}
					.fl {
						float: left;
					}
					.fr {
						float: right;
					}
				}
				>.goodsdiv3 {
					height: 30px;
					width: 100%;
					line-height: 30px;
					>p {
						display: inline-block;
						float: left;
						font-size: 14px;
						margin-left: 10px;
					}
					>span {
						display: inline-block;
						float: right;
						font-size: 12px;
						margin-right: 10px;
					}
				}
				>.goodsdiv4 {
					position: relative;				
					height: 80px;
					width: 100%;
					>input {
						width: 100px;
						height: 40px;
						font-weight: 700;
						line-height: 30px;
						background: #fff;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
			>.particularly {
				background: #eee;
				width: 100%;
				padding-top: 10px;
				>.biaoti {
					width: 100%;
					height: 50px;
					background: #fff;
					font-size: 16px;
					line-height: 50px;
					>p {
						text-indent: 2em;
					}
				}
				>.good {
					background: #eee;
					padding: 10px;
					width: 100%;
					box-sizing: border-box;
					>ul {
						background: #eee;
						list-style: none;
						>li {
							padding: 20px 20px 10px 20px;
							box-sizing: border-box;
							background: #fff;
							height: 300px;
							width: 140px;
							list-style: none;
							float: left;
							text-align: center;
							margin: 5px;
							>img {
								height: 160px;
								width: 100%;
							}
							>h4 {
								line-height: 30px;
							}
							>p {
								line-height: 30px;
							}
							>.yuanjia {
								color: red;
							}
						}
					}
				}
			}
		}
		>.btn {
			width: 100%;
			height: 60px;
			border-top: 1px solid #bbb;
			box-sizing: border-box;
			>div {
				width: 100%;
				height: 100%;
				padding: 10px;
				box-sizing: border-box;
				input{
					font-size: 14px;
					color: #fff;
					font-weight: 900;
					width: 100%;
					height: 100%;
					background: #0080ff;
					border: 0px;
				}
			}
		}
	}
</style>