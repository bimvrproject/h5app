<template>
	<div>
		<div class="top">
			<div class="topleft">
				<div class="topleft-imgbox"><img src="" alt="" /></div>
				<div class="topleft-login">
					<p class="topleft-logintop">18306846355</p>
					<div class="topleft-loginbtom">
						<p><i class="loginvip">黄金会员</i></p>
						<p class="loginvipimg"><img class="leftvip" src="../assets/images/vipleft.png" alt="" /></p>
					</div>
				</div>
			</div>
			<div class="topright">
				<ul class="topright-group">
					<li class="topright-group1"><img src="../assets/images/vipright.png" alt="" /></li>
					<li class="topright-group2"><img src="../assets/images/peo.png" alt=""></li>
					<li class="topright-group3"><img src="../assets/images/post.png" alt=""></li>
					<li class="topright-group4"><img src="../assets/images/set.png" alt=""></li>
					<li class="topright-group5"><img src="../assets/images/more.png" alt=""></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
	display: flex;
	justify-content: space-between;
	.topleft {
		width: 1.7rem;
		height: 0.52rem;
		// background:red;
		display: flex;
		// align-items:center;
		padding-left: 0.123rem;
		padding-top: 0.09rem;
		justify-content: space-between;
		.topleft-imgbox {
			width: 0.36rem;
			height: 0.36rem;
			background: rgba(204, 228, 255, 1);
			border: 1px solid rgba(251, 251, 251, 1);
			img {
				width: 100%;
				height: 100%;
			}
		}
		.topleft-login {
			display: flex;
			width: 1.23rem;
			height: 0.36rem;
			// background:pink;
			flex-direction: column;
			justify-content: space-between;
			.topleft-logintop {
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 228, 255, 1);
				font-size: 0.172rem;
				// background:red;
				line-height: 0.19rem;
			}
			.topleft-loginbtom {
				// background:blue;
				// height:0.26rem;
				width: 0.79rem;
				display: flex;
				justify-content: space-between;
				// margin-top:-0.02rem;
				.loginvip {
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(204, 228, 255, 1);
					font-size: 0.13rem;
					line-height: 0.23rem;
					padding-left: 0.02rem;
					// float:left;
					// background:pink;
				}
				.loginvipimg {
					display: flex;
					align-self: center;
				}
				.leftvip {
					width: 0.18rem;
					height: 0.13rem;
					// background:red;
				}
			}
		}
	}
	// 头部右边
	.topright {
		width:2.7rem;
		height: 0.36rem;
		// background: red;
		.topright-group{
			display:flex;
			justify-content:space-around;
			.topright-group1{
				width:0.4rem;
				height:0.36rem;
				// background:pink;
				display:flex;
				flex-direction:column;
				img{
					width:0.4rem;
					height:0.33rem;
					// background:blue;
				}
				}
			}
			.topright-group2{
				width:0.3rem;
				height:0.36rem;
				// background:blue;
				line-height:0.36rem;
				display:flex;
				align-items:center;
				img{
					width:0.3rem;
					height:0.22rem;
				}
			}
			.topright-group3{
				width:0.3rem;
				height:0.36rem;
				// background:pink;
				display:flex;
				align-items:center;
				img{
					width:0.3rem;
					height:0.22rem;
				}
			}
			.topright-group4{
				width:0.3rem;
				height:0.36rem;
				// background:blue;
				display:flex;
				align-items:center;
				img{
					width:0.276rem;
					height:0.25rem;
				}
			}
			.topright-group5{
				width:0.3rem;
				height:0.36rem;
				// background:pink;
				display:flex;
				align-items:center;
				img{
					width:0.26rem;
					height:0.253rem;
				}
			}
		}
}
</style>
