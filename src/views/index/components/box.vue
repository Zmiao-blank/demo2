<template>
	<div class='floor w'>
		<div class='box-hd'>
			<h3>家用电器</h3>
			<!--tab栏切换，指点这个连接，下面就会切换到这个连接所指的内容，用法是div>ul>li>a-->
			<div class='tab-list'>
				<ul>
				    <li>
					    <a href='#' class='style-red'>热门</a>|
				    </li>
					<li>
					    <a href='#'>大家电</a>|
					</li>
					<li>
					    <a href='#'>生活电器</a>|
					</li>
					<li>
					    <a href='#'>厨房电器</a>|
					</li>
					<li>
					    <a href='#'>个护健康</a>|
					</li>
					<li>
					    <a href='#'>应季电器</a>|
					</li>
					<li>
					    <a href='#'>空气/净水</a>|
					</li>
					<li>
					    <a href='#'>新奇特</a>|
					</li>
					<li>
					    <a href='#'>高端电器</a>
					</li>
			    </ul>
			</div>
		</div>
	    <div class='box-bd'>
			<!--实际上这个div中包含了若干个ul，分别对应tab-list中的热门、大家电、生活电器等，当指定大家电时，显示对应的ul;
			目前只写大家电对应的ul-->
			<ul class='tab-list-1'>
				<li class='w209'>
					<ul class='w209-list'>
						<li>
							<a href='#'>
								节能补贴
							</a>
						</li>
						<li>
							<a href='#'>
								4K电视
							</a>
						</li>
						<li>
							<a href='#'>
								空气净化器
							</a>
						</li>
						<li>
							<a href='#'>
								IH电饭煲
							</a>
						</li>
						<li>
							<a href='#'>
								滚筒洗衣机
							</a>
						</li>
						<li>
							<a href='#'>
								电热水器
							</a>
						</li>
					</ul>
					<img src="../../../assets/upload/floor-1-1.png" alt=''/>
				</li>
				<li class='w329'>
					<img src='../../../assets/upload/floor-1.png' alt='' />
					<ol class='circle-3'>
						<li></li>
						<li class='current'></li>
						<li></li>
					</ol>
				</li>
				<li class='w219'>
					<div class='tab-item'>
						<a href='#'>
							<img src='../../../assets/upload/floor-1-2.png' alt=''/>
						</a>
					</div>
					<div class='tab-item'>
						<a href='#'>
							<img src='../../../assets/upload/floor-1-3.png' alt=''/>
						</a>
					</div>
				</li>
				<li class='w220'>
					<div class='tab-item'>
						<a href='#'>
							<img src='../../../assets/upload/floor-1-4.png' alt=''/>
						</a>
					</div>
				</li>
				<li class='w220'>
					<div class='tab-item'>
						<a href='#'>
							<img src='../../../assets/upload/floor-1-5.png' alt=''/>
						</a>
					</div>
					<div class='tab-item'>
						<a href='#'>
							<img src='../../../assets/upload/floor-1-6.png' alt=''/>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index-box',
	}
</script>


