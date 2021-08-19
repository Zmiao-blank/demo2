<template>
	<div class='w'>
		<div class='main'>
			<div class='focus fl'><!--包含4个部分，左按钮，右按钮，中间图片，下面滚动的点，四个为并列关系-->
				<!--左侧按钮-->
				<a href='javascript:;' class='arrow-l'><i></i></a>
				<!--右侧按钮-->
				<a href='javascript:;' class='arrow-r'><i></i></a>
				<!--核心的滚动区域-->
				<ul>
					<li>
						<a href='#'><img src='../../../assets/upload/focus-1.png' alt=''></a>
					</li>
					<li>
						<a href='#'><img src='../../../assets/upload/focus-2.png' alt=''></a>
					</li>
					<li>
						<a href='#'><img src='../../../assets/upload/focus-3.png' alt=''></a>
					</li>
					<li>
						<a href='#'><img src='../../../assets/upload/focus-4.jpg' alt=''></a>
					</li>
				</ul>
				<!--设置小圆圈的方式，通过ol中的li实现-->
				<ol class='circle'>
					
				</ol>
			</div>
			<div class='newsflash fr'>
				<div class='news'>
					<div class='news-hd'>
						种草喵快报
						<a href='#'>更多</a>
					</div>
					<div class='news-bd'>
						<ul>
							<li><a href='#'>【特惠】爆款耳机5折秒！</a></li>
							<li><a href='#'>【特惠】健康好礼低至5折！</a></li>
							<li><a href='#'>【特惠】游玩门票大打折！</a></li>
							<li><a href='#'>【特惠】零食低价来啦！</a></li>
							<li><a href='#'>【特惠】健身器材随意挑！</a></li>
						</ul>
					</div>
				</div>
				<div class='lifeservice'>
					<ul>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>云朵</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>心情</p>
							</a>
							<span class='miaosha'></span>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>大象</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>盒纸</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>包包</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>球球</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>工厂</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>嘿嘿</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>纳尼</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>热情</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>嗨皮</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i class='service_ico'></i>
								<p>欧耶</p>
							</a>
						</li>
					</ul>
				</div>
				<div class='bargin'>
					<img src='../../../assets/upload/miaosha.jpg' />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index-page',
	}
</script>

