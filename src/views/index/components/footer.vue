<template>
	<div class='footer'>
		<div class='w'>
			<!--mod_service-->
			<div class='mod_service'>
				<ul>
					<li>
						<i class="mod_service_1"></i>
						<div class='mod_service_title'>
							<h5>正品保障</h5>
							<p>正品保障，提供发票</p>
						</div>
					</li>
					<li>
						<i class="mod_service_1"></i>
						<div class='mod_service_title'>
							<h5>超值好物</h5>
							<p>超值好物，精致服务</p>
						</div>
					</li>
					<li>
						<i class="mod_service_1"></i>
						<div class='mod_service_title'>
							<h5>低价优选</h5>
							<p>天天低价，畅选无忧</p>
						</div>
					</li>
					<li>
						<i class="mod_service_1"></i>
						<div class='mod_service_title'>
							<h5>极速物流</h5>
							<p>急速物流，提供发票</p>
						</div></li>
					<li>
						<i class="mod_service_1"></i>
						<div class='mod_service_title'>
							<h5>客户至上</h5>
							<p>放心购买，服务超棒</p>
						</div>
					</li>
				</ul>
			</div>
			<!--mod_help-->
			<div class='mod_help'>
				<dl class='mod_help_list'>
					<dt>购物指南</dt>
					<dd><a href="#">购物流程</a></dd>
					<dd><a href="#">会员介绍</a></dd>
					<dd><a href="#">生活旅行/团购</a></dd>
					<dd><a href="#">常见问题</a></dd>
					<dd><a href="#">大家电</a></dd>
					<dd><a href="#">联系客服</a></dd>
				</dl>
				<dl class='mod_help_list'>
					<dt>购物指南</dt>
					<dd><a href="#">购物流程</a></dd>
					<dd><a href="#">会员介绍</a></dd>
					<dd><a href="#">生活旅行/团购</a></dd>
					<dd><a href="#">常见问题</a></dd>
					<dd><a href="#">大家电</a></dd>
					<dd><a href="#">联系客服</a></dd>
				</dl>
				<dl class='mod_help_list'>
					<dt>购物指南</dt>
					<dd><a href="#">购物流程</a></dd>
					<dd><a href="#">会员介绍</a></dd>
					<dd><a href="#">生活旅行/团购</a></dd>
					<dd><a href="#">常见问题</a></dd>
					<dd><a href="#">大家电</a></dd>
					<dd><a href="#">联系客服</a></dd>
				</dl>
				<dl class='mod_help_list'>
					<dt>购物指南</dt>
					<dd><a href="#">购物流程</a></dd>
					<dd><a href="#">会员介绍</a></dd>
					<dd><a href="#">生活旅行/团购</a></dd>
					<dd><a href="#">常见问题</a></dd>
					<dd><a href="#">大家电</a></dd>
					<dd><a href="#">联系客服</a></dd>
				</dl>
				<dl class='mod_help_list'>
					<dt>购物指南</dt>
					<dd><a href="#">购物流程</a></dd>
					<dd><a href="#">会员介绍</a></dd>
					<dd><a href="#">生活旅行/团购</a></dd>
					<dd><a href="#">常见问题</a></dd>
					<dd><a href="#">大app家电</a></dd>
					<dd><a href="#">联系客服</a></dd>
				</dl>
				<dl class='mod_help_list mod_help_app'>
					<dt>帮助中心</dt>
					<dd>
						<i @click='change'></i>
						<img v-bind:src='erweima' id='erweima'/>
						<p>种草喵客户端</p>
					</dd>
				</dl>
			</div>
		    <!--mod_copyright-->
			<div class='mod_copyright'>
				<p class='mod_copyright_links'>
					关于我们 | 联系我们 | 联系客服 | 商家驻入
				</p>
				<p class='mod_copyright_info'>
					地址：南京市江宁区；联系方式：188-4572-1685；邮箱:1587992411@qq.com
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'common-footer',
		data(){
			return { erweima:require('../../../assets/upload/erweima.jpg')}
		},
		methods:{
			change(){
				erweima.style.display='none';
			}
		},
	}
</script>