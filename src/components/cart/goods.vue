<template>
	<div class="goods">
			<div v-for="item in list" :key="item.id" class="imgbox">
     				<div class="goodst">
     							<p class="touxiang">
     								<img :src="item.images.model"  alt="" />
     							</p>
     							<p class="instructions">
     								从United kingdom配送的1项商品
     							</p>
     							<p class="freight">
     								预计运费
     								<i class="iconfont icon-qian"></i>
     								<span>0</span>
     							</p>	
     				</div>
     				<div class="goodsc">
     						<div class="goodscl">
     								<img :src="item.images.cutOut" alt="" />
     						</div>
     						<div class="goodscr">
     								<div class="xingxi">
     								  <p class="xingxip1">	<span class="mingchen">{{item.shortDescription}}</span><i class="iconfont icon-x"></i></p>
     									<p class="xingxip2">商品编号：<span>{{item.id}}</span></p>
     								</div>
     								<div class="num">
     									<p class="pr"><span>数量1</span><i class="iconfont icon-xia"></i></p>
     									<p><span>尺码34</span><i class="iconfont icon-xia"></i></p>
     								</div>
     						</div>
     				</div>
     				<div class="goodsb">
     					<div class="goodsb1"><p class="fl f10"><i class="iconfont icon-xingxing"></i><span>加入愿望单</span></p><p class="fr f12"><del><i class="iconfont icon-qian"></i><span>{{item.priceInfo.initialPrice}}</span></del><span class="red"><i class="iconfont icon-qian"></i>{{item.priceInfo.finalPrice}}</span></p></div>
     					<div class="goodsb2"><p class="fr f10">(已含关税)</p></div>		
     				</div>
   	 </div>
	</div>
</template>

<script>
	import Vue from "vue";
	 export default {
	 	data(){
	 			return {
	 			list:{}
	 		}
	 	},
	 	 created() {
		 	var shuju=document.cookie;
		 	var shuju=JSON.parse(shuju);
		 	this.list[0]=shuju;
		 	console.log(this.list);	
		 	
		 }
	 }
</script>

<style lang="scss">
			.goods{
			
				>div{
						box-sizing: border-box;
				padding: 10px;
					height: 100%;
					width: 100%;
					>.goodst{
						border-bottom: #bbb 1px solid;
						box-sizing: border-box;
						display: flex;
						width: 100%;
						height: 50px;
							>.touxiang{	
							height: 50px;
							width: 50px;
							border-radius: 50%;
							line-height: 50px;
								>img{
									
								width: 30px;
								height: 30px;
							border-radius: 50%;
								
							}
						}
						>.instructions{
								font-size: 8px;
								flex: 1;
						}
						>.freight{
							width: 100px;
							font-size: 8px;
							text-indent: 2em;
							>i{
								font-size: 8px;
							}
						}
					}
						>.goodsc{
							margin-top: 10px;
							display: flex;
					width: 100%;
					height: 120px;
					>.goodscl{
						float: left;
						width: 80px;
						height: 100px;
							>img{
							width: 100%;
							height: 100%;
						}
					}
					>.goodscr{
						flex: 1;
						float: left;
						>.xingxi{
							width: 100%;
							height: 50%;
							>.xingxip1{
									width: 100%;
									height:30px ;
									display: flex;
								>.mingchen{
								flex: 1;
									font-size:14px;
									font-weight: 700;
									margin-left: 20px;
								}
								>i{
									font-size: 16px;
									width: 20px;
							
								}
							}
							>.xingxip2{
								font-size: 12px;
								margin-left: 20px;
							}
						}
						>.num{
								width: 200px;
							height: 60px;
							display: flex;
							box-sizing: border-box;
							padding: 18px 10px 18px 10px;
							>.pr{
								margin-right: 15px;
							}
							>p{
								line-height: 21px;
								text-align: center;
								border:1px solid #bbb;
								flex: 1;
								>span{
									font-size: 12px;
								}
								>i{
									font-size: 12px;
									text-indent: 1em;
									display: inline-block;
							
								}
							}
							
						}
					}
				}
				&>.goodsb{
						
						display: flex;
						flex-direction: column;
						&>.goodsb1{
							flex: 1;
								p{
									i{
										font-size: 12px;
									}
								}
								.red{
									
									margin: 15px;
									color: red;
								}
								&>.fl{
									float: left;
								}
								&>.fr{
									float: right;
								}
								.f10{
									font-size: 10px;
								}
								.f12{
									font-size: 12px;
								}
						}
						>.goodsb2{
							flex: 1;
							&>.fr{
									float: right;
								}
									.f10{
									font-size: 10px;
								}
								.f12{
									font-size: 12px;
								}
						}
				}
			}
			
			}
</style>