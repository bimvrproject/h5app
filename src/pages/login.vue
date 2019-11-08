<template>
	<div>
		<div id="form-group">
			<div class="form-groupz">
				<img src="../assets/images/logo.png" class="form-logo" alt="" />
				<p style="color: red; position: absolute; top:1rem" v-show="prompt">{{panduanphone}}</p>
				<div class="input-grouppho"><el-input v-model="inputphone" placeholder="请输入手机号" @focus="outfocus" id="input-phone"></el-input></div>
				<div class="input-grouppaw">
					<el-input v-model="inputyzm" placeholder="请输入验证码" @focus="outfocus" id="input-paw"></el-input>
					<p  v-show="sendCode" id="input-code" @click="ObtainCode()">获取验证码</p>
					<p v-show="!sendCode" id="input-code">{{authTime}} 秒后获取</p>
				</div>
				<div class="input-groupbottom">
					<router-link to="/home"><span class="tourist">游客登录</span></router-link>
					<router-link to="/logcode"><span class="switchpaw">切换至密码码登录</span></router-link>
				</div>
				<div class="input-button" @click="login()">登录</div>
				<div class="form-footer">
					<span class="form-footer1">还没有账号 ?</span>
					<router-link to="/register"><span class="form-footer2">立即注册</span></router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import api from '@/api/api.js'
	import axios from 'axios'
export default {
	data() {
		return {
			inputphone: '',	//手机号
			inputyzm:'',		//验证号
			sendCode: true, // 控制发送验证码按钮显示
			authTime: 0, // 倒计时
			panduanphone:""  ,//友情提示
			prompt:false,		//是否显示友情提示
		};
	},
	mounted() {
		this.$eventbus.$emit('headershowey');
	},
	methods:{
		//输入手机号的失焦事件
		outfocus(){
			this.prompt=false;
		},
		//发送验证码事件
		ObtainCode () {
			axios.get(api.GetPhone+"?phone"+"="+this.inputphone).then(result=>{
				if(this.inputphone==null || this.inputphone=="" || this.inputphone==undefined){
					this.panduanphone = "请输入手机号";
					this.prompt=true;
					return;
				}
				//判断手机号格式是否正确
				var re = /^1[3456789]\d{9}$/;
				if (!re.test(this.inputphone)) {
					this.panduanphone = "手机号格式不正确";
					this.prompt = true;
					return;
				} 	
				// 18306846355
					//发送验证码
				if(result.data!=""){
					axios.get(api.PhoneLogin+"?mobile="+this.inputphone).then(result=>{
						this.sendCode = false  // 控制显示隐藏
						this.authTime = 59;
						let timeInt = setInterval(() => {
							this.authTime--
							if (this.authTime <= 0) {
							  this.sendCode = true
							  window.clearInterval(timeInt)
							}
						}, 1000)
					})
				}else{
					this.panduanphone = "该账号未注册，请注册...";
					this.prompt = true;
				}
			})
		},
		//登录
		login(){
			if(this.inputphone==''){
				this.panduanphone = "请填写手机号...";
				this.prompt = true;
				return;
			}
			axios.get(api.LogincheckSmsCode+"?smsCode="+this.inputyzm+"&phone="+this.inputphone).then(result=>{
				if(result.data.code!=0){
					this.panduanphone = result.data.msg;
					this.prompt=true;
				}else{
					this.$router.push("/home");
					localStorage.setItem("phone",this.inputphone)
				}
			})
		}
	}
};
</script>
<style lang="scss">
#form-group {
	width: 100%;
	height: 100%;
	background: url(../assets/images/loginimg.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.form-groupz {
		// background:red;
		display:flex;
		flex-direction: column;
		align-items: center;
		.form-logo {
			width: 0.75rem;
			height: 0.75rem;
			display: inline-block;
			margin-top: 0.24rem;
			// position: absolute;
			// top: 0.3rem;
			// left: 2.1rem;
		}
		// 请输入手机号
		.input-grouppho {
			width: 3rem;
			height: 0.425rem;
			margin-top: 0.3rem;
			// position: absolute;
			// top: 1.43rem;
			// left: 1rem;
			display: flex;
			justify-content: center;
			#input-phone {
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
		.input-grouppaw {
			width: 3rem;
			height: 0.425rem;
			margin-top: 0.13rem;
			// position: absolute;
			// top: 2rem;
			// left: 1rem;
			display: flex;
			justify-content: space-between;
			#input-paw {
				width: 1.9616677rem;
				height: 0.425rem;
				border-radius: 0.25rem 0rem 0rem 0.25rem;
				background: rgba(255, 255, 255, 0.8);
				font-size: 0.15rem;
				border-right: 0;
			}
			#input-code {
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
		.input-groupbottom {
			width: 2.49rem;
			height: 0.22rem;
			margin-top: 0.03rem;
			// position: absolute;
			// top: 2.49rem;
			// left: 1.2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.tourist {
				font-size: 0.13rem;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				cursor: pointer;
			}
			.switchpaw {
				font-size: 0.13rem;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				cursor: pointer;
			}
		}
		// 登录
		.input-button {
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
		.form-footer {
			// width: 1.63rem;
			height: 0.2rem;
			// position: absolute;
			// top: 3.44rem;
			// left: 1.905rem;
			font-size: 0.13rem;
			display: flex;
			justify-content: space-between;
			line-height: 0.2rem;
			// background:red;
			.form-footer1 {
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}
			.form-footer2 {
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(33, 128, 237, 1);
				margin-left: 0.03rem;
			}
		}
	}
}
</style>
