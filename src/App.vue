<template>
<Header />
<router-view/>
</template>

<script>
import Header from './components/Header.vue';
export default {
	components: {
        // 'Navbar': () => import(`components/Nav.vue`)
		Header
	}
}
</script>

<style lang="scss">
#app {
	font-family: "PingFang TC", " Noto sans", "Crimson Text";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	
	
}


</style>
