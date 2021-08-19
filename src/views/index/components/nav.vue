<template>
	<div class='nav'>
		<div class='w'>
			<div class='dropdown fl'>
				<div class='dt'>全部商品分类</div>
				<div class='dd'>
					<ul>
						<li class='menu_item'><a href='#'>家用电器</a><i></i></li>
						<li class='menu_item'>
							<a href='#'>手机</a>
							<a href='#'>数码</a>
							<a href='#'>通信</a>
							<i></i>
						</li>
						<li class='menu_item'><a>电脑、办公</a><i></i></li>
						<li class='menu_item'><a>家居、家具、家装、厨具</a><i></i></li>
						<li class='menu_item'><a>男装、女装、童装、内衣</a><i></i></li>
						<li class='menu_item'><a>个户化妆、清洁用品、宠物</a><i></i></li>
						<li class='menu_item menu_item_now' @click='list'>
						鞋靴、箱包、珠宝、奢侈品</a><i></i></li>
						<li class='menu_item'><a>运动户外、钟表</a><i></i></li>
						<li class='menu_item'><a>汽车、汽车用品</a><i></i></li>
						<li class='menu_item'><a>母婴、玩具乐器</a><i></i></li>
						<li class='menu_item'><a>食品、酒类、生鲜、特产</a><i></i></li>
						<li class='menu_item'><a>医药保健</a><i></i></li>
						<li class='menu_item'><a>图书、音像、电子书</a><i></i></li>
						<li class='menu_item'><a>彩票、旅行、充值、票务</a><i></i></li>
						<li class='menu_item'><a>理财、众筹、白条、保险</a><i></i></li>
					</ul>
				</div>
			</div>
			<!--右侧导航-->
			<div class='navitems fl'>
				<ul>
					<li><a href='#'>家电家具</a></li>
					<li><a href='#'>个护</a></li>
					<li><a href='#'>美食零嘴</a></li>
					<li><a href='#'>旅行好去处</a></li>
					<li><a href='#'>美妆</a></li>
					<li><a href='#'>团购</a></li>
					<li><a href='#'>拍卖</a></li>
					<li><a href='#'>有趣灵魂</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index-nav',
		methods:{
			list(){
				//var nn=document.getElementsByClassName("menu_item menu_item_now")[0];
				this.$router.push("/list");
				//onsole.log(this);
			}
		}
	}
</script>

