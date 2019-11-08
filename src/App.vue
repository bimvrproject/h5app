<template>
	<div class="container">
		<Header class="header" v-show="headershow"></Header>
		<router-view class="main"></router-view>
	</div>
</template>

<script>
import Header from './components/Header';
export default {
	data() {
		return {
			headershow: false
		};
	},
	//2.注册
	components: {
		Header
	},
	created(){
		this.$eventbus.$on('headershowx', () => {
			this.headershow = true;
		});
		this.$eventbus.$on('headershowey', () => {
			this.headershow = false;
		});
	},
	mounted() {
		this.$eventbus.$emit('headershowy')
	},
};
</script>
<style lang="scss">
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	background:url(assets/images/big.png) no-repeat no-repeat;
	background-size:100% 100%;
	.header {
		height: 0.55rem;
		background: url(assets/images/headerbig1.png) no-repeat;
		background-size: 100% 0.6rem;
	}
	.main {
		flex: 1;
		// background: pink;
	}
}
</style>
