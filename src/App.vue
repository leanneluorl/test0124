<template>
	<div id="app">
		<Header />
		<router-view/>
	</div>
</template>

<script>
import Header from './components/layout/Header.vue';
export default {
	name: 'App',
	components: {
        // 'Navbar': () => import(`components/Nav.vue`)
		Header
	},
	created: async function() {
		await this.getFoodType({
			table: "foodtype",
			order: "FoodTypeID"
		})
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
