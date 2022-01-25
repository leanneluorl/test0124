<template>
	<div id="app">
		<h1 class="count">Count: {{ count1 }}</h1>
		<div class="main-button" @click="showPopUp" >Show POP up window</div>
		<PopUp v-show="popUpShow"  
			@close-edit="closeEdit()"
			@count="Increment">
			<template v-slot:title>
				<p class="title"> 
					Custom Title 
				</p>
			</template>
			<template v-slot:content>
				<p class="content"> 
					Custom Content
				</p>
			</template>
		</PopUp>
		<p>Random Number: {{ randomNum }}</p>
	</div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

import PopUp from '@/components/function/PopUp.vue';

export default {
	name: 'App',
	components: {
		PopUp,
	},
	computed: {
		// ...mapState('Store', ['count']),
		
	},
	data:() =>{
        return {
			popUpShow: false,
			count1: 0,
			randomNum: 0,
			interval: 0,
        }
    },
	created: function() {
		this.printRandomNumber()
	},
	methods: {
		// ...mapActions('Store', ['getCount']),

		showPopUp() {
			this.popUpShow = true
		},
		closeEdit() {
			this.popUpShow = false
		},
		Increment(num){
			this.count1 += num
			// this.$store.dispatch('getCount',num)
			// console.log(this.count1)
		},
		printRandomNumber() {
		var min = 1,
			max = 5;
		this.randomNum = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
		
		setTimeout(this.printRandomNumber, this.randomNum * 1000);
		}
	}
}
</script>

<style lang="scss">
#app {
	@import url('https://fonts.googleapis.com/css2?family=Barlow');
	font-family: Lucida Sans Unicode;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;	
}

.main{
		&-button {
			cursor: pointer;
			text-align: center;
			margin: 100px auto;
			width: 200px;
			height: 60px;
			background-color: aquamarine;
			line-height: 60px;
			border-radius: 5px;
		}
		.title {
			width: 100%;
			background-color: gray;
		}
	}


</style>
