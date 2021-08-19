<template>
	<div class='shortcut'>
		<div class='w'>
			<div class='fl'>
				<ul>
					<li>种草喵欢迎您！</li>
					<li>
						<a href='#' id='loginlink'>请登录</a>
					    <div class='divv'>
					    <ul>
					    	<em class='xfonts'></em>
					    	<li>
					    		<label for='username'>用户名：</label>
					    		<input type='text' value='' id='username' class='inputt' />
					    	</li>
					    	<li>
					    		<label for='mima'>密&emsp;码：</label>
					    		<input type='password' value='' id='mima' class='inputt' />
					    	</li>
					    	<li>
					    		<input type='submit' value='登录' class='tijiao'/>
					    	</li>
					    </ul>
					    </div>
						<a href='/register' class='style-red'>免费注册</a>
					</li>
				</ul>
			</div>
			<div class='fr'>
				<ul>
					<li><a href='#'>我的订单</a></li>
					<li class='spacer'></li>
					<li>
						<a href='#'>我的种草</a>
						<i class='icomoon'></i>
					</li>
					<li class='spacer'></li>
					<li><a href='#'>种草喵会员</a></li>
					<li class='spacer'></li>
					<li><a href='#'>企业采购</a></li>
					<li class='spacer'></li>
					<li>
						<a href='#'>关注种草喵</a>
						<i class='icomoon'></i>
					</li>
					<li class='spacer'></li>
					<li>
						<a href='#'>客户服务</a>
						<i class='icomoon'></i>
					</li>
					<li class='spacer'></li>
					<li>
						<a href='#'>网站导航</a>
						<i class='icomoon'></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'shortcut',
	}
</script>


