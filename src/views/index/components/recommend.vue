<template>
	<div class='recommend w'>
		<div class='recommend_hd'>
			<img src='../../../assets/img/clock.png' alt=''/>
			<h3>
			<span class='hour'>1</span>
			<span class='spot'>:</span>
			<span class='minute'>2</span>
			<span class='spot'>:</span>
			<span class='second'>3</span>
			</h3>
		</div>
		<div class='recommend_bd'>
			
			<ul>
				<li>
					<a href='#'>
						<img src='../../../assets/upload/pic1.jpg' alt=''/>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='../../../assets/upload/pic2.png' alt=''/>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='../../../assets/upload/pic3.jpg' alt=''/>
					</a>
				</li>
				<li class='last'>
					<a href='#'>
						<img src='../../../assets/upload/pic4.png' alt=''/>
					</a>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'index-recommend',
		mounted(){
			var hour=document.querySelector('.hour');
			var minute=document.querySelector('.minute');
			var second=document.querySelector('.second');
			var inputTime=+new Date('2022-5-1 18:00:00');
			nowtime();
			setInterval(nowtime,1000);
			function nowtime(){
				var nowTime=+new Date();//获取当前时间，为毫秒数
				var times=(inputTime-nowTime)/1000;
				var h=parseInt(times/60/60%24);
				 h = h < 10 ? '0' + h : h;
				hour.innerHTML=h;
				var m=parseInt(times/60%60);
				m = m < 10 ? '0' + m : m;
				minute.innerHTML=m;
				var s=parseInt(times%60);
				s = s < 10 ? '0' + s : s;
				second.innerHTML=s;
				
			}
		}
	}
</script>


