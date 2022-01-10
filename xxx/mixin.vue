<template>
  
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
    methods: {
        ...mapActions('Recipes', ['getRecipes'])
    },
    computed: {
        ...mapState('Recipes', ['recipes']),
    },
}
</script>

<style>

</style>