<template>
	<div id="app">
		<h1 class="count">Count: {{ count1 }}</h1>
		<div class="main-button" @click="showPopUp" >Show POP up window</div>
		<PopUp v-show="popUpShow"  
			@close-edit="closeEdit()"
			@count="Increment"/>
	</div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

import PopUp from '@/components/function/PopUp.vue';

export default {
	name: 'App',
	components: {
		PopUp
	},
	computed: {
		// ...mapState('Store', ['count']),
       
	},
	data:() =>{
        return {
			popUpShow: false,
			count1: 0,
        }
    },
	created: async function() {
		
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
	}


</style>
