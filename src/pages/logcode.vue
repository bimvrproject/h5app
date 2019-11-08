<template>
	<div>
		<div id="form-groupc">
			<div class="form-groupzc">
				<img src="../assets/images/logo.png" class="form-logoc" alt="" />
				<div class="input-groupphoc"><el-input v-model="input" placeholder="请输入手机号" id="input-phonec"></el-input></div>
				<div class="input-grouppawc">
					<el-input v-model="input" placeholder="请输入密码" id="input-pawc"></el-input>
					<p id="input-codec">忘记密码</p>
				</div>
				<div class="input-groupbottomc">
					<router-link to="/home"><span class="touristc">游客登录</span></router-link>
					<router-link to="/"><span class="switchpawc">切换至验证码登录</span></router-link>
				</div>
				<div class="input-buttonc">登录</div>
				<div class="form-footerc">
					<span class="form-footer1c">还没有账号 ?</span>
					<router-link to="/register"><span class="form-footer2c">立即注册</span></router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			input: ''
		};
	},
	mounted() {
		this.$eventbus.$emit('headershowey');
	}
};
</script>
<style lang="scss">
#form-groupc {
	width: 100%;
	height: 100%;
	background: url(../assets/images/loginimg.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.form-groupzc {
		// background:red;
		display:flex;
		flex-direction: column;
		align-items: center;
		.form-logoc {
			width: 0.75rem;
			height: 0.75rem;
			display: inline-block;
			margin-top: 0.24rem;
			// position: absolute;
			// top: 0.3rem;
			// left: 2.1rem;
		}
		// 请输入手机号
		.input-groupphoc {
			width: 3rem;
			height: 0.425rem;
			margin-top: 0.3rem;
			// position: absolute;
			// top: 1.43rem;
			// left: 1rem;
			display: flex;
			justify-content: center;
			#input-phonec {
				border-radius: 0.25rem !important;
				width: 3rem;
				height: 0.425rem;
				background: rgba(255, 255, 255, 0.8);
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 0.15rem;
			}
		}
		// 请输入密码
		.input-grouppawc {
			width: 3rem;
			height: 0.425rem;
			margin-top: 0.13rem;
			// position: absolute;
			// top: 2rem;
			// left: 1rem;
			display: flex;
			justify-content: space-between;
			#input-pawc {
				width: 1.9616677rem;
				height: 0.425rem;
				border-radius: 0.25rem 0rem 0rem 0.25rem;
				background: rgba(255, 255, 255, 0.8);
				font-size: 0.15rem;
				border-right: 0;
			}
			#input-codec {
				width: 1.5477rem;
				height: 0.425rem;
				border-radius: 0rem 0.25rem 0.25rem 0rem;
				background: rgba(255, 255, 255, 0.8);
				font-size: 0.15rem;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1) !important;
				margin-left: -0.02rem;
				line-height: 0.425rem;
				text-align: center;
			}
		}
		// 游客登录 切换至密码登录
		.input-groupbottomc {
			width: 2.49rem;
			height: 0.22rem;
			margin-top: 0.03rem;
			// position: absolute;
			// top: 2.49rem;
			// left: 1.2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.touristc {
				font-size: 0.13rem;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				cursor: pointer;
			}
			.switchpawc {
				font-size: 0.13rem;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				cursor: pointer;
			}
		}
		// 登录
		.input-buttonc {
			width: 2.13rem;
			height: 0.43rem;
			margin-top: 0.28rem;
			// background: red;
			// position: absolute;
			// top: 2.995rem;
			// left: 1.475rem;
			font-size: 0.18rem;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			text-align: center;
			line-height: 0.43rem;
			background: url(../assets/images/denglu.png) no-repeat;
			background-size: 2.13rem 0.43rem;
		}
		// 还没有账号？立即注册
		.form-footerc {
			width: 1.63rem;
			height: 0.2rem;
			// position: absolute;
			// top: 3.44rem;
			// left: 1.905rem;
			font-size: 0.13rem;
			display: flex;
			justify-content: space-between;
			line-height: 0.2rem;
			.form-footer1c {
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}
			.form-footer2c {
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				margin-left: 0.03rem;
			}
		}
	}
}
</style>
