<template>
	<div>
	<div class="top">
		<div class="topleft">
			<div class="topleft-imgbox"><img src="" alt=""></div>
			<h2></h2>
		</div>
		<div class="topright">	
		
		</div>
	</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style lang="scss" scoped>
	.top{
		display:flex;
		justify-content:space-between;
		.topleft{
			width:1.33rem;
			height:0.52rem;
			background:red;
			.topleft-imgbox{
				width:0.3rem;
				height:0.3rem;
				background:rgba(204,228,255,1);
				border:1px solid rgba(251,251,251,1);
				margin-top:0.093rem;
				margin-left:0.093rem;
				img{
					width:100%;
					height:100%;
				}
			}
		}
	}
</style>
