<template>
	<div class="home-box">
		
		<section class="main-wrap">
			<img src="./../img/main.png" alt="">
			<p>便。告全禱我王劈有哇汐懇久給，分網呢瑄度不期清？資空有，沾對路韜空文近建回屠樞快錯樣沒卻遂人到騷不胡辨音次結，盪陳車，比反網己使。它栽！虛四是甚首；翩鏢社果捐貨話買啊？炭沾強三管期、同題己我己…、鵰章措秩合到公話慈在期不金議是曹搬大愛成以章陳要喜區跨，星退傑狗市蓉都利娟車龍人廿西美法沖憐為誰提嗜？裊張前廬狸中定，老靶五嘉慶卸太神戰經我重的，直看意澡每崎入因北用厚；要便，平是直找頒徊核艱至又放想工。</p>
		</section>
		<section class="news-wrap news">
			<div class="section-title">最新消息</div>
			<div class="news-items-content" v-for="{news, index} in $store.state.news" :key="'news'+index " :style="{ backgroundImage: `url(${news.image})` }">
				<p class="news-items-content-date">{{ news.date }}</p>
				<p class="news-items-content-title">{{ news.title }}</p>
				<a class="news-items-content-read-more">+Read more</a>
			</div>
			
			<div class="news-page-link-wrap">
				<a href="" class="news-page-link page-link">更多最新消息
					<img src="./../img/svg/arrow-right-circle.svg" alt="">
				</a>
			</div>
		</section>
		<section class="route-wrap">
			<div class="section-title">探索路線</div>
			<div class="route-main divx2">
				<p class="route-main-txt">自動定位、手動輸入都方便！ 快速找到離您最近的車道路線</p>
				<a href="" class="route-page-link page-link">立刻搜尋
					<img src="./../img/svg/arrow-right-circle.svg" alt="">
				</a>
			</div>
			<div class="route-image"></div>
		</section>
		<section class="station-wrap">
			<div class="section-title">尋找站點</div>
			<div class="station-image divx2"></div>
			<div class="station-main ">
				<p class="station-main-txt">自動定位、手動輸入都方便！ 快速找到離您最近的車道路線</p>
				<a href="" class="route-page-link page-link">立刻搜尋
					<img src="./../img/svg/arrow-right-circle.svg" alt="">
				</a>
			</div>
			
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
//import HomeContent from '@/components/HomeContent.vue'

export default {
	name: 'Home',
	components: {
		//HomeContent
	}
}
</script>

<style lang="scss">
	.home-box {
		.section-title {
			width: 17.5%;
			color: $primary-o;
			font-size: 1.5rem;
			font-weight: 500;
		}
		.divx2 {
			width: 55%;
		}
		div {
			float: left;
			width: 27.5%;
			height: 472px;
			@extend .flex-nowrap;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border: 0.5px solid $border ;
		}
		
		a.page-link{
			width: 11rem;
			height: 3rem;
			line-height: 3rem;
			border-radius: 50px;
			border: solid 1px $primary-g;
			vertical-align: middle;
			img{
				height: 16px;
				filter: $primary-g-filter;
				vertical-align: middle;
			}
		}
		
		

		.main-wrap {
			margin: 0 auto 69px;
			padding: 0 20%;
		}
		
		.news-wrap {
			.news-items-content{
				background-color: $primary-g;
				color: #fff;
				p:first-of-type{
					margin-bottom: 30px;
				}
				p:nth-of-type(2){
					margin-bottom: 60px;
				}
				&-title {
					font-weight: bold;
				}
				background-size: auto 100%;
				background-position: center;
			}
			.news-page-link-wrap {
				
				
				
			}
		}
		.route-wrap {
			.route-main{
				padding: 53px;
				align-items: flex-start;
				p{
					margin-bottom: 30px;
					position: relative;
					&::after{
						content:url(./../img/stroke.png);
						position: absolute;
						bottom: -30px;
						right: -40px;
						z-index: -1;
					}
				}
			}
			.route-image {
				background: url(./../img/index_route.jpg) no-repeat center left/auto 100% ;
			}
		}
	}	
</style>
