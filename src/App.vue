<template>
    <div id="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    mounted() {
        // Event Listener attached to the app id instead of the window to avoid issues with clicks bubbling from the body
        // document.getElementById('app').addEventListener('click', closeAll);
    },
    beforeDestroy() {
        // document.getElementById('app').removeEventListener('click', closeAll);
    }
}
</script>

<style lang="scss">
@import 'main.scss';

#wrapper {
    width: 100vw;
}
</style>
