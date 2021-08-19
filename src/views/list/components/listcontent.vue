<template>
	<div class='sk-container w'>
		<div class='sk_hd'>
			<img src='upload/bg_1.png' alt=''>
		</div>
		<!--父盒子sk_bd没有指定高度，子盒子li里面右浮动，会造成所以要清除浮动，可以用clearfix或者overflow:hodden-->
		<div class='sk_bd clearfix'>
			<ul>
				<li class='sk_goods sk_goods_now' @click='detail'>
					<img src='../../../assets/upload/shoe_1.png' alt=''/>
					<h5 class='sk_goods_title'>莱尔斯丹  女鞋时尚优雅通勤圆头套脚搭扣休闲深口粗跟低跟单鞋女乐福鞋  08002  军绿色</h5>
					</a>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥299.00</em> <del>￥435.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>87%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>29</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_2.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女复古方头珍珠扣乐福鞋女粗跟增高显瘦女鞋可踩脚两穿鞋  K170  米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥145.00</em> <del>￥158.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>92%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>15</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_3.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女英伦风舒适方头乐福鞋女增高两穿粗跟小皮鞋女猪皮鞋垫透气舒适 K196 米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥178.00</em> <del>￥238.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>71%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>129</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_4.png' alt=''/>
					<h5 class='sk_goods_title'>古奇天伦  GUCIHEAVEN  韩版休闲尖头粗跟金属装饰防水台女单鞋子 G9235 金色推荐 </h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥128.00</em> <del>￥139.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>56%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>219</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods' @click='detail'>
					<img src='../../../assets/upload/shoe_1.png' alt=''/>
					<h5 class='sk_goods_title'>莱尔斯丹  女鞋时尚优雅通勤圆头套脚搭扣休闲深口粗跟低跟单鞋女乐福鞋  08002  军绿色</h5>
					</a>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥299.00</em> <del>￥435.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>87%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>29</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_2.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女复古方头珍珠扣乐福鞋女粗跟增高显瘦女鞋可踩脚两穿鞋  K170  米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥145.00</em> <del>￥158.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>92%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>15</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_3.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女英伦风舒适方头乐福鞋女增高两穿粗跟小皮鞋女猪皮鞋垫透气舒适 K196 米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥178.00</em> <del>￥238.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>71%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>129</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_4.png' alt=''/>
					<h5 class='sk_goods_title'>古奇天伦  GUCIHEAVEN  韩版休闲尖头粗跟金属装饰防水台女单鞋子 G9235 金色推荐 </h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥128.00</em> <del>￥139.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>56%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>219</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods' @click='detail'>
					<img src='../../../assets/upload/shoe_1.png' alt=''/>
					<h5 class='sk_goods_title'>莱尔斯丹  女鞋时尚优雅通勤圆头套脚搭扣休闲深口粗跟低跟单鞋女乐福鞋  08002  军绿色</h5>
					</a>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥299.00</em> <del>￥435.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>87%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>29</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_2.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女复古方头珍珠扣乐福鞋女粗跟增高显瘦女鞋可踩脚两穿鞋  K170  米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥145.00</em> <del>￥158.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>92%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>15</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_3.png' alt=''/>
					<h5 class='sk_goods_title'>单鞋女英伦风舒适方头乐福鞋女增高两穿粗跟小皮鞋女猪皮鞋垫透气舒适 K196 米色</h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥178.00</em> <del>￥238.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>71%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>129</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
				<li class='sk_goods'>
					<img src='../../../assets/upload/shoe_4.png' alt=''/>
					<h5 class='sk_goods_title'>古奇天伦  GUCIHEAVEN  韩版休闲尖头粗跟金属装饰防水台女单鞋子 G9235 金色推荐 </h5>
					<!--在文字内容上面添加删除线，可以用s标签或者del标签-->
					<p class='sk_goods_price'><em>￥128.00</em> <del>￥139.00</del> </p>
					<div class='sk_goods_progress'>
						已售<i>56%</i>
						<div class='bar'>
							<div class='bar_in'>
								
							</div>
						</div>
						剩余<em>219</em>件
					</div>
					<a href='#' class='sk_goods_buy'>立即抢购</a>
				</li>
			</ul>
		</div>
	    <div class='page'>
			<!--使用span行内元素-->
			<span class='page_num'>
				<a href='#' class='pn_prev'>&lt;&lt;上一页</a>
				<a href='#'>1</a>
				<a href='#' class='current'>2</a>
				<a href='#'>3</a>
				<a href='#'>4</a>
				<a href='#'>5</a>
				<a href='#' class='current'>...</a>
				<a href='#' class='pn_next'>下一页&gt;&gt;</a>
			</span>
			<span class='page_skip'>
				<!--表单和按钮都属于行内块，可以直接在同一行显示-->
				共10页  到第
				<input type='text' />
				页
				<button>确定</button>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'list-content',
		methods:{
			detail(){
				this.$router.push("/detail");
			}
		}
	}
</script>