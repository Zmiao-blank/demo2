<template>
	<html lang='zh-CN'>
		<head>
			<meta charset="utf-8">
			<title>列表页</title>
			<meta name='description' content='种草miao.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务!'>
			<meta name='keywords' content='网上购物,网上商城,网上超值购物'>
		</head>
		<body>
			<!--顶部快捷导航(shortcut)start-->
			<shortcut></shortcut>
			<!--header制作-->
			<common-header></common-header>
			<!--导航nav开始-->
			<listnav></listnav>
			<!--列表内容list开始-->
			<list-content></list-content>
			<!--底部footer制作-->
			<common-footer></common-footer>
		</body>
	</html>
</template>

<style scoped>
	@import "../../assets/css/base.css";
	@import "../../assets/css/common.css";
	@import "../../assets/css/list.css";
</style>

<script>
	import shortcut from '../index/components/shortcut.vue';
	import commonHeader from '../index/components/header.vue';
	import listnav from './components/listnav.vue';
	import listContent from './components/listcontent.vue';
	import commonFooter from '../index/components/footer.vue';
	export default{
		name:'list',
		components:{
			shortcut,
			commonHeader,
			listnav,
			listContent,
			commonFooter,
		}
	}
</script>
