<template>
	<div class='header w'>
		<div class='logo'>
			<h1>
				<!--链接可以返回首页，连接设置logo大小和背景图片；title作用是鼠标放到logo上，会显示文字-->
				<a href='/' title='种草喵'>种草喵</a>
			</h1>
		</div>
		<div class='search'>
			<input type='text' class='text' id='inpText' :value='msg' @click='focus' @blur='blurF' />
			<button class='btn'>搜索</button>
		</div>
		<div class='hotwords'>
			<a href="#" class='style-red'>优惠购首发</a>
			<a href="#">低价开卖</a>
			<a href="#">9.9元团购</a>
			<a href="#">美满99减30</a>
			<a href="#">办公用品</a>
			<a href="#">旅行好物</a>
			<a href="#">通信</a>
		</div>
		<div class='shopcar'>
			<i class='car'></i>
			我的购物车
			<i class='arrow'></i>
			<i class='count'>8</i>
		</div>
	</div>
</template>

<script>
	export default{
		name:'commonHeader',
		data(){
			return {msg:'请输入搜索内容'}
		},
		methods:{
			focus(){
				//console.log("AAAAA");
				var tt=document.getElementById("inpText");
				//console.log(tt.value);
				//console.log("--------");
				if(tt.value =='请输入搜索内容'){
					//console.log("--------");
					//console.log(tt.value);
					tt.value='';
					tt.style.color="pink";
				}
			},
			blurF(){
				var tt=document.getElementById("inpText");
				if(tt.value==''){
					tt.value='请输入搜索内容';
					tt.style.color="purple";
				}
			}
			
		}
			
	}
</script>

