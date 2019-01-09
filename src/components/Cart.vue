<template>
	<div id="cart">
		<div class="carttop"><i class="iconfont icon-fanhui"></i><span>我的购物袋</span><span class="num"></span></div>
		<div class="cartcontent">
				<div class="nullcart">
					<span class="iconfont icon-gouwudai"></span>
					<p>购物袋中暂无商品</p>
				</div>
		</div>
		<div class="cartbtn">
				<div class="settlement">
					<div class="subtotal">
						<p><span class="xiaoji"></span><i class="iconfont icon-qian"></i><span>总计&nbsp;CNY</span><i class="iconfont icon-qian"></i><span>2335.50</span></p>
						<p><span>配送</span><i class="iconfont icon-qian"></i><span>100</span><span>(已含关税)</span></p>
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
	
	export default {
		data(){
			return{
				
			}
		},
		 components:{
     		 mytop
   			 }
	}
</script>

<style scoped lang="scss">
		#cart{
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			
			>.carttop{
				padding-left: 15px;
				height: 50px;
				line-height: 50px;
				color: #000000;
				font-size: 14px;
				font-weight: 700;
				>i{
					margin-right: 20px;
					font-weight: 900;
					
				}
			}
			>.cartcontent{
				flex: 1;
				overflow-x: hidden;				
				background:#efffff;
				width: 100%;
				position: relative;
				>.nullcart{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					text-align: center;
					
					>span{
						font-size: 30px;
					}
					>p{
						margin-top: 20px;
						font-size: 12px;
					}
				}
			}
			>.cartbtn{				
				min-height: 60px;	
				width: 100%;
				background:#efffff;
				box-sizing: border-box;
				line-height: 60px;
				text-align: center;
				padding: 0 20px 0 20px;
				>div{
					
					input{
					height: 40px;
					width: 100%;
					border: 0;
					background: #0080ff;
					color: #FFFFFF;
					font-weight: 600;
					}
				}
						
				>.settlement{
					
					>.subtotal{
						height: 40px;
						float: left;
					}
					>input{
						float: left;
					}
				}
				>.choose{
					display: none;		
				}
			}
		}
</style>