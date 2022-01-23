<template>
	<div id="app">
		<Header />
		<router-view/>
		<Login v-show="loginPOP" />
	</div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Login from '@/components/function/Login.vue';
import { mapState } from 'vuex';
export default {
	name: 'App',
	components: {
        // 'Navbar': () => import(`components/Nav.vue`)
		Header,
		Login
	},
	computed: {
		...mapState('User', ['loginPOP']),
	},
	data:() =>{
        return {
			defaultData: ['cuisine','diettype', 'foodtype']
        }
    },
	created: async function() {
		for (var i = 0; i < this.defaultData.length; i++) {
			this.defaultData[i] = await this.getCatalog({
													table: this.defaultData[i],
													keyword: "all"})
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


</style>
