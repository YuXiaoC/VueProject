<template>
	<div id="cart">
		<div class="carttop"><i class="iconfont icon-fanhui" @click="myback"></i><span>我的购物袋</span><span class="num"></span></div>
		<div class="cartcontent">
			<div class="nullcart">
				<span class="iconfont icon-gouwudai"></span>
				<p>购物袋中暂无商品</p>
			</div>
			<div class="goodslist">
				
					<cgoods></cgoods>
			
				<div class="link">
					<div class="linktop">
						<div class="p10">
							<p class="f12">14天无理由免费退款（退款喊税）</p>
							<p class="f10">还在犹豫？别担心，我们提供14天无理由免费退货。来自中国内地的退货，你们的退款将包含下单时所支付的关税。</p>
							
						</div>
						<div>
							<p class="f12">需要帮助？</p>
							<p class="f12">请以如下方式联系我们的客服：</p>
						</div>
					</div>
					<div class="linkb">
						<p class="p1"> 
							<i class="iconfont icon-dianhua"></i>
						</p>
						<p>
							<i class="iconfont icon-informatiom"></i>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cartbtn">
			<div class="settlement">
				<div class="subtotal">
					<div>
							<div class="f_l xj">
								<span>小计</span>
								<span><i class="iconfont icon-qian"></i></span>
								<span>2318.50</span> 
							</div>
							<div class="f_r zj">
								<span>总计&nbsp;CNY</span>
								<span><i class="iconfont icon-qian"></i></span>
								<span>2335.50</span>
							</div>
					</div>
					<div>
							<div class="f_l ps">
								<span>配送</span>
								<span>
									<i class="iconfont icon-qian"></i>
								</span>
								<span>100</span>
							</div>

							<div class="f_r xj">(已含关税)</div>
					</div>
				</div>
				<input type="button" id="" value="立即结算" />
			</div>
			<div class="choose">
				<input type="button" id="" value="立即抢购" />
			</div>
		</div>
	</div>
</template>

<script>
	import iconfont from '../iconfont/iconfont.css';
	import mytop from './public/Header';
	import cgoods from './cart/goods';
	export default {
		data() {
			return {


			}
		},
		components: {
			mytop,
			cgoods
		},
		 methods:{
		 	myback(){
		 		 this.$router.go(-1);
		 	}
		 }
		
	}
</script>

<style lang="scss">
	#cart {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		&>.carttop {
			padding-left: 15px;
			height: 50px;
			line-height: 50px;
			color: #000000;
			font-size: 14px;
			font-weight: 700;
			&>i {
				margin-right: 20px;
				font-weight: 900;
			}
		}
		&>.cartcontent {
			flex: 1;
			overflow-x: hidden;
			background: #efffff;
			width: 100%;
			position: relative;
			&>.nullcart {
				display: none;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;
				&>span {
					font-size: 30px;
				}
				&>p {
					margin-top: 20px;
					font-size: 12px;
				}
			}
			&>.goodslist{
					width: 100%;
				&>.goods{
					box-sizing: border-box;
					padding: 10px 10px 0 10px;
					width: 100%;
					&>div{
					height: 230px;
					width: 100%;
					margin-bottom: 10px;
					background: #fff;
					}
				}
				&>.link{
					height: 200px;
					background: #fff;
					width: 100%;
					margin-bottom: 30px;
				    &>.linktop{
						height: 70%;
						width: 100%;
						padding: 12px;
						box-sizing: border-box;
						
					&>div{
							margin-bottom:15px;
						
						&>.f10{
							font-size: 10px;
						}
						&>.f12{
							font-size: 12px;
						}
					}	
					}
					&>.linkb{
						height: 30%;
						width: 100%;
						border-bottom: 1px solid #bbb;
						border-top: 1px solid #bbb;
						box-sizing: border-box;
						display: flex;
						.p1{
						border-right: 1px solid #bbb;							
						}
						p{
							flex: 1;
							text-align: center;
							line-height:48px;
							i{
								font-size: 25px;
							}
						}
					}
				}
			}
		}
		&>.cartbtn {
			display: flex;
			flex-direction: column;
			min-height: 60px;
			width: 100%;
			background: #efffff;
			box-sizing: border-box;
			line-height: 60px;
			text-align: center;
			padding: 0 20px 0 20px;
			background: #fff;
			&>div {
				&>input {
					height: 40px;
					width: 100%;
					border: 0;
					background: #0080ff;
					color: #FFFFFF;
					font-weight: 600;
				}
			}
			&>.settlement {
				/*display: none;*/
				
				height: 120px;
				&>.subtotal{
					box-sizing: border-box;
					padding: 20px;
					height: 60px;
					float: left;
					&>div {
						height:20px;
						float: left;
						width: 100%;
						
							&>div{
								float: left;
								height: 100%;
								text-align: center;
								line-height: 100%;
								
							}
						.xj{
							font-size: 10px;
								span{
								i{
									font-size: 10px;
								}
							}
						}
						.zj{
							font-size: 12px;
							font-family: "微软雅黑";
							font-weight: 700;
								span{
								i{
									font-size: 10px;
								}
							}
						}
						.ps{
							font-size: 10px;
							color: orange;
							span{
								i{
									font-size: 10px;
								}
							}
						}
						&>.f_l {
							float: left;
						}
						&>.f_r {
							float: right;
						}
					}
				}
				&>input {
					float: left;
				}
			}
			&>.choose {
				display: none;
			}
		}
	}
</style>