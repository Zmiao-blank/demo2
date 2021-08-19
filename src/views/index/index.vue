<template>
	  <html lang='zh-CN'>
	  	<head>
	  		<meta charset="utf-8">
	  		<title>种草喵-综合超值商品首选-正品低价、品质保障、配送及时、轻松购物</title>
	  		<meta name='description' content='种草miao.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务!'>
	  		<meta name='keywords' content='网上购物,网上商城,网上超值购物'>
		</head>
	  	<body>
	  		<!--顶部快捷导航(shortcut)start-->
	  		<shortcut></shortcut>
	  		<!--header制作-->
	  		<common-header></common-header>
	  		<!--导航nav开始-->
	  		<index-nav></index-nav>
	  		<!--首页index制作-->
	  		<index-page></index-page>
	  		<!--推荐服务模块start-->
	  		<index-recommend></index-recommend>
	  		<!--楼层区start-->
	  		<index-box></index-box>
	  		<!--固定电梯导航，侧边栏start    用到固定定位的知识-->
	  		<index-fixedtool></index-fixedtool>
			<!--底部footer制作-->
	  		<common-footer></common-footer>
	  	</body>
	  </html>
</template>

<style scoped>
	@import "../../assets/css/base.css";
	@import "../../assets/css/common.css";
	@import "../../assets/css/index.css";
</style>

<script>
	import commonFooter from './components/footer';
	import indexFixedtool from './components/fixedtool';
	import indexBox from './components/box';
	import indexRecommend from './components/recommend';
	import indexPage from './components/indexpage';
	import indexNav from './components/nav';
	import commonHeader from './components/header';
	import shortcut from './components/shortcut';
	export default{
		name:'index',
		components:{
			commonFooter,
			indexFixedtool,
			indexBox,
			indexRecommend,
			indexPage,
			indexNav,
			commonHeader,
			shortcut ,
		}
	}
</script>


