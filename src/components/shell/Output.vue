<template>
    <div class="output-component">
        <div id="output"></div>
    </div>
</template>

<script>
export default {
    name: 'hex-output-component',
    props: {
        mudkit: Object
    },
    mounted() {
        const outputEl = document.getElementById('output');

        let currentLine = document.createElement('div');
        let currentLineNum = 1;

        currentLine.id = `line-${currentLineNum}`;

        outputEl.append(currentLine);

        this.mudkit.output = (data) => {
            console.log(data);

            const span = document.createElement('span');

            if (data.number > currentLineNum) {
                currentLineNum = data.number;

                currentLine = document.createElement('div');
                currentLine.id = `line-${currentLineNum}`;

                outputEl.append(currentLine);
            }

            span.textContent = data.chunk;

            if (data.sgr.color) {
                const {r, g, b} = data.sgr.color;

                span.style.color = `rgb(${r}, ${g}, ${b})`;
            }

            currentLine.append(span);
        };
    }
};
</script>

<style scoped lang="scss">
@import 'variables';
@import 'mixins';
</style>
