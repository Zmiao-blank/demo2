<template>
	<div class='de_container w'>
		<div class='crumb_wrap'>
			<a href='#'>鞋靴</a>
			>  <a href='#'>时尚女鞋</a>
			>  <a href='#'>单鞋</a>
			>  <a href='#'>莱尔斯丹女鞋系类</a>
		</div>
		<!--产品介绍模块，大盒子里包含左右两个盒子，父盒子不设置高度和宽度（默认版心宽度），子盒子有浮动，因此父盒子需要清除浮动-->
		<div class='product_intro clearfix'>
			<!--左盒子，预览区域-->
			<div class='preview_wrap fl'>
				<div class='preview_img' @click='enlarge' ref='preview_img_1'>
					<img src='../../../assets/upload/shoe.png' alt='' />
					<div class='mask' ref='mask_1'></div>
					<div class='big' ref="big_1">
						<img src='../../../assets/upload/big_shoe.png' alt='' class='bigIMg' ref='bigIMg_1'>
					</div>
				
				</div>
			<div class='preview_list'>
					<a href='#' class='arrow_prev'></a>
					<a href='#' class='arrow_next'></a>
					<ul class='list_item'>
						<li>
							<img src='../../../assets/upload/pre_1.png' alt='' />
						</li>
						<li class='current'>
							<img src='../../../assets/upload/pre_2.png' alt='' />
						</li>
						<li>
							<img src='../../../assets/upload/pre_3.png' alt='' />
						</li>
						<li>
							<img src='../../../assets/upload/pre_4.png' alt='' />
						</li>
						<li>
							<img src='../../../assets/upload/pre_5.png' alt='' />
						</li>
					</ul>
				</div>
			</div>
			<!--右盒子，产品详细信息-->
			<div class='intem_info fr'>
				<div class='sku_name'>
					莱尔斯丹 女鞋时尚优雅通勤圆头套脚搭扣休闲深口粗跟低跟单鞋女乐福鞋 08002 军绿色 OLL 36
				</div>
				<div class='news'>
					推荐选择下方优惠购，支付方式任意选
				</div>
				<div class='summary'>
					<dl class='summary_price'>
						<dt>价格</dt>
						<dd>
							<i class='price'>￥299.0 </i>
							<a href='#'>降价通知 </a>
							<div class='remark'>累计评价612188</div>
						</dd>
					</dl>
					<dl class='summary_promotion'>
						<dt>促销</dt>
						<dd>
							<em>加购价</em>
							满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销产品，详情
						</dd>
					</dl>
					<dl class='summary_support'>
						<dt>支持</dt>
						<dd>
							放心购物，极速审核，质量保证，价格最低 还有超值抢礼品购
						</dd>
					</dl>
					<dl class='choose_color'>
						<dt>选择颜色</dt>
						<dd>
							<!--#实现点击后跳转到当前页面顶部的效果，javascript:;实现点击后在当前处跳转-->
							<a href='javascript:;' class='current'>军绿色</a>
							<a href='javascript:;'>黑色</a>
							<a href='javascript:;'>米白色</a>
							<a href='javascript:;'>枣红色</a>
						</dd>
					</dl>
					<dl class='choose_version'>
						<dt>选择尺码</dt>
						<dd>
							<a href='javascript:;'>35</a>
							<a href='javascript:;'  class='current'>36</a>
							<a href='javascript:;'>37</a>
							<a href='javascript:;'>38</a>
						</dd>
					</dl>
					<dl class='choose_type'>
						<dt>购买方式</dt>
						<dd>
							<a href='javascript:;' class='current'>支付宝</a>
							<a href='javascript:;'>微信</a>
							<a href='javascript:;'>颜值</a>
						</dd>
					</dl>
					<div class='choose_btns'>
						<div class='choose_amount'>
							<input class='inputcar' type='text' value='1'/>
							<a href='javascript:;' class='add'>+</a>
							<a href='javascript:;' class='reduce'>-</a>
						</div>
						<a href='#' class='addcar'>加入购物车</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'container',
		methods:{
			enlarge(){
				var preview_img=this.$refs.preview_img_1;
				var mask=this.$refs.mask_1;
				var big=this.$refs.big_1;
				var bigIMg=this.$refs.bigIMg_1;
				//1.当鼠标经过preview_img，就显示和隐藏  遮挡层mask和大盒子big
				preview_img.addEventListener('mouseover',function(){
					mask.style.display='block';
					big.style.display='block';
				})
				preview_img.addEventListener('mouseout',function(){
					mask.style.display='none';
					big.style.display='none';
				})
				//2.鼠标移动的时候，让黄色的盒子跟着鼠标走
				//获得鼠标在父盒子preview_img内的坐标，将它给遮挡层mask
				preview_img.addEventListener('mousemove',function(e){
					//鼠标在页面上的距离减去盒子（注意父盒子有没有定位，如果有则是preview_img到父盒子的距离）到页面的距离，得出鼠标在盒子内的坐标
					var x=e.pageX-this.offsetLeft;
					var y=e.pageY-this.offsetTop;
					//console.log(x,y);
					//把上面得到的坐标给遮挡层mask
					var maskX=x - mask.offsetWidth/2;
					var maskY=y -mask.offsetHeight/2;
					//遮挡层的最大移动距离
					var maskMax=preview_img.offsetWidth - mask.offsetWidth;
					if(maskX<=0){
						maskX=0;
					}else if(maskX>=maskMax){
						maskX=maskMax;
					}
					if(maskY<=0){
						maskY=0;
					}else if(maskY>=maskMax){
						maskY=maskMax;
					}
					mask.style.left= maskX+ 'px';
					mask.style.top= maskY+ 'px';
					
					//3.移动黄色遮挡层，大图片跟随移动功能，通过比例计算求得
					//遮挡层移动距离/遮挡层最大移动距离=大图片移动距离/大图片最大移动距离
					
					//遮挡层的最大移动距离
					//var maskMax=preview_img.offsetWidth - mask.offsetWidth;
					//大图片最大移动距离
					//var bigIMg=document.querySelector('.bigIMg');
					var bigMax=bigIMg.offsetWidth-big.offsetWidth;
					//算得大图片的移动距离X Y
					var bigX=maskX*bigMax/maskMax;
					var bigY=maskY*bigMax/maskMax;
					//图片必须设置定位，才能有top值和left值
					bigIMg.style.left= -bigX + 'px';
					bigIMg.style.top= -bigY + 'px';
				})
			}
		}
	}
</script>