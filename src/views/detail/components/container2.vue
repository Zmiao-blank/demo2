<template>
	<div class='de_container w'>
		<div class='product_detail clearfix'>
			<!--左盒子-->
			<div class='aside fl'>
				<div class='tab_list'>
					<ul>
						<li class='first_tab current'>相关分类</li>
						<li class='second_tab'>推荐品牌</li>
					</ul>
				</div>
				<div class='tab_con'>
					<ul>
						<li>
							<img src='../../../assets/upload/aside_1.png' alt='' />
							<h5>这鞋真不错，姐妹们快买呀，冲呀，哈哈哈</h5>
							<div class='aside_price'>￥439</div>
							<a class='aside_addcar'>加入购物车</a>
						</li>
						<li>
							<img src='../../../assets/upload/aside_2.png' alt='' />
							<h5>这鞋真不错，姐妹们快买呀，冲呀，哈哈哈</h5>
							<div class='aside_price'>￥499</div>
							<a class='aside_addcar'>加入购物车</a>
						</li>
						<li>
							<img src='../../../assets/upload/aside_3.png' alt='' />
							<h5>这鞋真不错，姐妹们快买呀，冲呀，哈哈哈</h5>
							<div class='aside_price'>￥429</div>
							<a class='aside_addcar'>加入购物车</a>
						</li>
						<li>
							<img src='../../../assets/upload/aside_3.png' alt='' />
							<h5>这鞋真不错，姐妹们快买呀，冲呀，哈哈哈</h5>
							<div class='aside_price'>￥399</div>
							<a class='aside_addcar'>加入购物车</a>
						</li>
						<li>
							<img src='../../../assets/upload/aside_5.png' alt='' />
							<h5>这鞋真不错，姐妹们快买呀，冲呀，哈哈哈</h5>
							<div class='aside_price'>￥409</div>
							<a class='aside_addcar'>加入购物车</a>
						</li>
					</ul>
				</div>
			</div>
			<!--右盒子-->
			<div class='detail fr'>
				<div class='detail_tab_list'>
					<ul>
						<li class='current'>商品介绍</li>
						<li>规格与包装</li>
						<li>售后保障</li>
						<li>商品评价</li>
					</ul>
				</div>
				<div class='detail_tab_con'>
					<!--对应商品介绍的item，上面的li应该和item一一对应，目前只写1个-->
					<div class='item'>
						<ul class='item_info'>
							<li>商品名称：莱尔斯丹 女鞋时尚优雅单鞋系列</li>
							<li>商品编号：10021446603559</li>
							<li>店   铺： 种草喵的宝藏小店</li>
							<li>商品毛重：450.00g</li>
							<li>风   格： 通勤</li>
						</ul>
						<p>
							<a href="#" class='more'>查看更多参数</a>
						</p>
						<img src='../../../assets/upload/detail-1.png' alt='' />
						<img src='../../../assets/upload/detail-2.png' alt='' />
					</div>
					<div class='item'>
						规格与包装的内容
					</div>
					<div class='item'>
						售后保障的内容
					</div>
					<div class='item'>
						<textarea name='' id=''></textarea>
						<button id='fabu'>发布</button>
						<ul id='pingjia'>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'container2'
	}
</script>