<template>
    <div class="input-component">
        <div
            class="input-box"
            ref="input-box"
            contenteditable="contenteditable"
            @keyup.enter="send"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'hex-input-component',
    props: {
        mudkit: Object
    },
    methods: {
        send() {
            const input = this.$refs['input-box'].textContent;

            this.mudkit.sendText(input);
        }
    }
};
</script>

<style scoped lang="scss">
@import 'variables';
@import 'mixins';

.input-component {
    background-color: #0C2B2B;
    border-top: 0.2rem solid color(gray, 600);
    display: flex;
}

.input-box {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    margin: 0.2rem 0.5rem;
}
</style>
