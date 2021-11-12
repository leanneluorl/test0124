<template>
    <div class="nav-box">
        <router-link v-for="item in navItem"
            :to="item.link" :key="item.key"
            v-slot="{ href, route, navigate, isActive }">
            <div class="nav-item" :class="{ 'active': isActive }">
                <a class="nav-link" @click="navigate">
                    <span class="text">{{ $t(`HomeContent.nav.${item.key}`) }}</span>
                </a>
            </div>
        </router-link> 
    </div>
</template>

<script>
export default {
    data: {
        navItem:[
        {
            link: "/info"
        },
        {   
            link: "/sight"
        },
        {
            link: "/food"
        },
        {
            link: "/accommodation"
        },
        {
            link: "/festival"
        }],
    }
}
</script>

<style>

</style>