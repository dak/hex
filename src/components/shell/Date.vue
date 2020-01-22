<template>
    <div class="date-component">
        {{time}}
    </div>
</template>

<script>
function getTime() {
    return new Date().toLocaleString();
}

export default {
    name: 'hex-date-component',
    data() {
        return {
            time: new Date().toLocaleString()
        };
    },
    mounted() {
        setInterval(() => {
            this.time = new Date().toLocaleString();
        }, 1000);
    }
};
</script>

<style scoped lang="scss">
@import 'variables';
@import 'mixins';

.date-component {
    align-items: center;
    border-bottom: 0.1rem solid color(gray, 600);
    border-top: 0.1rem solid color(gray, 600);
    display: flex;
    justify-content: center;
}
</style>
