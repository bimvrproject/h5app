<template>
	<div>
		<div class="form-groupr">
			<img src="../assets/images/logo.png" class="form-logor" alt="" />
			<div class="input-groupphor"><el-input v-model="input" placeholder="请输入手机号" id="input-phoner"></el-input></div>
			<div class="input-grouppawr">
				<el-input v-model="input" placeholder="请输入验证码" id="input-pawr"></el-input>
				<p id="input-coder">获取验证码</p>
			</div>
			<div class="input-paswr">
				<el-input v-model="input" placeholder="请输入密码" id="input-passr"></el-input>
			</div>
			<div class="input-buttonr">完成注册</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			input: ''
		};
	}
};
</script>
<style lang="scss">
.form-groupr {
	margin: 0 auto;
	width: 5rem;
	height: 100%;
	background: url(../assets/images/background.png) no-repeat;
	background-size: 5rem 118%;
	background-position: center center;
	// background-color: red;
	position: relative;
	.form-logor {
		width: 0.75rem;
		height: 0.75rem;
		display: inline-block;
		position: absolute;
		top: 0.3rem;
		left: 2.1rem;
	}
	// 请输入手机号
	.input-groupphor {
		width: 2.92rem;
		height: 0.425rem;
		position: absolute;
		top: 1.43rem;
		left: 1rem;
		display: flex;
		justify-content: center;
		#input-phoner {
			border-radius: 0.25rem !important;
			width: 2.92rem;
			height: 0.425rem;
			background: rgba(255, 255, 255, 0.8);
			font-family: Microsoft YaHei;
			font-weight: 400;
			font-size: 0.15rem;
		}
	}
	// 请输入验证码
	.input-grouppawr {
		width: 2.92rem;
		height: 0.425rem;
		position: absolute;
		top: 1.99rem;
		left: 1rem;
		display: flex;
		justify-content:space-between;
		#input-pawr {
			width: 1.62rem;
			height: 0.425rem;
			border-radius: 0.25rem 0rem 0rem 0.25rem;
			background: rgba(255, 255, 255, 0.8);
			font-size: 0.15rem;
			border-right:0;
		}
		#input-coder {
			width:2.3rem;
			height: 0.425rem;
			border-radius: 0rem 0.25rem 0.25rem 0rem;
			background:rgba(33,128,237,1);
			font-size: 0.15rem;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(255,255,255,1);
			margin-left:-0.02rem;
			line-height:0.425rem;
			text-align:center;
		}
	}
	// 请输入密码
	.input-paswr{
		width: 2.92rem;
		height: 0.425rem;
		position: absolute;
		top: 2.63rem;
		left: 1rem;
		display: flex;
		justify-content: center;
		#input-passr{
			border-radius: 0.25rem !important;
			width: 2.92rem;
			height: 0.425rem;
			background: rgba(255, 255, 255, 0.8);
			font-family: Microsoft YaHei;
			font-weight: 400;
			font-size: 0.15rem;
		}
	}
	// 完成注册
	.input-buttonr {
		width: 2.33rem;
		height: 0.443rem;
		background: red;
		position: absolute;
		top: 3.295rem;
		left: 1.345rem;
		font-size: 0.18rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 0.443rem;
		background: url(../assets/images/denglu.png) no-repeat;
		background-size: 2.33rem 0.443rem;
	}
}
</style>
