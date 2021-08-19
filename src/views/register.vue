<template>
	<html lang='en'>
		<head>
			<meta charset="utf-8">
			<title>注册页面</title>
		</head>
		<body>
			<div class='w'>
				<div class='header'>
					<a href='/'>
					<img src='../assets/img/miaologo.jpg' alt='' />
					</a>
				</div>
				<div class='area'>
					<h3>
						注册新用户
						<em>我有账号，去登录</em>
					</h3>
					<div class='info'>
						<!--有表单的地方就要有表单域，用来向后台提交数据-->
						<form action='demo.php'>
						<ul>
							<li>
								<!--li里面放行内块，展示是在同一行-->
								<!--label-for-id，只要保证label中的for值与input中的id值保持一致，点击label，光标跳转到对应的输入框中-->
								<label for='tel'>手机号：</label>
								<input type='text' value='' class='inp' id='tel'/>
								<span class='mes'>请输入大陆手机号，11位数</span>
							</li>
							<li>
								<label for=''>手机验证码：</label>
								<input type='text' value='' class='inp'/>
							</li>
							<li class='box'>
								<!--li里面放行内块，展示是在同一行-->
								<label for=''>登录密码：</label>
								<input type='password' value='' class='inp' id='psw'/>
								<img src='../assets/upload/close_eye.jpg' id='pic'/>
								<span class='success'><i class='icon_2'></i>密码输入正确</span>
							</li>
							<!--<li class='safe'>
								安全程度 
								<em class='ruo'>弱</em>
								<em class='zhong'>中</em>
								<em class='qiang'>强</em>
							</li>
							<li>-->
								<!--li里面放行内块，展示是在同一行-->
								<label for=''>确认密码：</label>
								<input type='text' value='' class='inp'/>
								<span class='success'><i class='icon_2'></i>密码输入正确</span>
							</li>
							<li class='agree'>
								<input type='checkbox' /> 同意协议并注册
								<a href='#'>《用户协议》</a>
							</li>
							<li>
								<input type='submit' value='完成注册' class='over'/>
							</li>
						</ul>
						</form>
					</div>
				</div>
			</div>
		</body>
	</head>
	</html>
</template>

<style scoped>
	@import "../assets/css/base.css";
	@import "../assets/css/register.css";
</style>

<script>
	export default{
		name:'register'
	}
</script>
