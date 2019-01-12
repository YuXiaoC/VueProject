<template>
	<div class="searchbox">
		<mytop></mytop>
		<div class="mysearch">
			<input type="search" name="" required="" placeholder="请输入品牌或商品类别进行搜索" x-webkit-speech="" x-webkit-grammar="builtin:search" lang="zh-CN">
			<button>
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon/cross/white" fill="#FFFFFF"> <path d="M13.1421356,11.1421356 L21.1421356,11.1421356 C21.6944204,11.1421356 22.1421356,11.5898509 22.1421356,12.1421356 C22.1421356,12.6944204 21.6944204,13.1421356 21.1421356,13.1421356 L13.1421356,13.1421356 L13.1421356,21.1421356 C13.1421356,21.6944204 12.6944204,22.1421356 12.1421356,22.1421356 C11.5898509,22.1421356 11.1421356,21.6944204 11.1421356,21.1421356 L11.1421356,13.1421356 L3.14213562,13.1421356 C2.58985087,13.1421356 2.14213562,12.6944204 2.14213562,12.1421356 C2.14213562,11.5898509 2.58985087,11.1421356 3.14213562,11.1421356 L11.1421356,11.1421356 L11.1421356,3.14213562 C11.1421356,2.58985087 11.5898509,2.14213562 12.1421356,2.14213562 C12.6944204,2.14213562 13.1421356,2.58985087 13.1421356,3.14213562 L13.1421356,11.1421356 Z" id="icn_close" transform="translate(12.142136, 12.142136) rotate(45.000000) translate(-12.142136, -12.142136) "></path> </g> </g>  </svg>
			</button>
		</div>

		<mt-navbar v-model="selected">
			<mt-tab-item :id="tab.id" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>
		</mt-navbar>

		<div class="goodcon">
			<router-view/>
		</div>

	</div>
</template>

<script>
	import mytop from './public/Header';
	import iconfont from '../iconfont/iconfont.css';
	export default {

		data() {
			return {
				keyword: '',
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

				tabs: [{
					title: "女士",
					name: "womenc",
					id: "1"
				}, {
					title: "男士",
					name: "menc",
					id: "2"
				}, {
					title: "儿童",
					name: "childrenc",
					id: "3"
				}],
				selected: 'womenc'

			}
		},
		components: {
			mytop
		},
		methods: {
			goto(name) {
				this.$router.push({
					path: '/search/' + name
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.searchbox {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		.mysearch {
			display: flex;
			height: 68px;
			background: #222;
			padding: 12px;
			box-sizing: border-box;
			>input {
				border-radius: 5px;
				height: 44px;
				flex: 1;
			}
			>button {
				padding: 0;
				width: 36px;
				border-radius: 4px;
				border: 1px solid hsla(0, 0%, 71%, .25098);
				background: transparent;
				margin-left: 12px;
			}
		}
		>.goodcon {
			overflow-x: hidden;
			flex: 1;
		}
	}
</style>