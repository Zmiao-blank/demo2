<template>
	<html lang='zh-CN'>
		<head>
			<meta charset="utf-8">
			<title>女鞋详情页</title>
			<meta name='description' content='种草miao.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务!'>
			<meta name='keywords' content='网上购物,网上商城,网上超值购物'>
		</head>
		<body>
			<!--顶部快捷导航(shortcut)start-->
			<shortcut></shortcut>
			<!--header制作-->
			<common-header></common-header>
			<detailnav></detailnav>
			<container></container>
			<container2></container2>
		</body>
	</html>
</template>

<style scoped>
	@import "../../assets/css/base.css";
	@import "../../assets/css/common.css";
	@import "../../assets/css/details.css";
</style>

<script>
	import shortcut from '../index/components/shortcut.vue';
	import commonHeader from '../index/components/header.vue';
	import detailnav from './components/detailnav.vue';
	import container from './components/container.vue';
	import container2 from './components/container2.vue';
	export default{
		name:'detail',
		components:{
			shortcut,
			commonHeader,
			detailnav,
			container,
			container2,
		}
	}
</script>