<template>
	<div>
		<div class="home-group">
			<div style="margin-top:0.3rem;">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="swiper-top"></div>
							<div class="swiper-bottom"></div>
						</div>
						<div class="swiper-slide">Slide 2</div>
						<div class="swiper-slide">Slide 3</div>
					</div>
					<!-- Add Pagination -->
					<!-- <div class="swiper-pagination"></div> -->
				</div>
			</div>
			<div class="left-news">
				
			</div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
	data() {
		return {};
	},
	//2.注册
	components: {},
	created() {},
	mounted() {
		this.$eventbus.$emit('headershowx');
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlidesBounds: true,
			centeredSlides: true,
			loop: true
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true
			// }
		});
	}
};
</script>

<style>
.home-group{
	/* position:relative; */
}
.swiper-container {
	width: 100%;
	height:2.43rem;
	background: red;
}
.swiper-slide {
	/* text-align: center; */
	margin-top: 0.3rem;
	font-size: 18px;
	background: #fff;
	height: 1.705rem;
/* 	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex; */
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
/* 	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center; */
	transition: 300ms;
	transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
	transform: scale(1.4, 1.2);
}
.left-news{
	width:2.5rem;
	height:0.22rem;
	background:pink;
	position:absolute;
	bottom:0rem;
}
.swiper-top{
	width:100%;
	height:0.5rem;
	background:pink;
}
</style>
