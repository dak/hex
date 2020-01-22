<template>
    <div class="view main-view">
        <div class="input-output">
            <hex-chat class="chat" :mudkit="mudkit"></hex-chat>
            <hex-output class="output" :mudkit="mudkit"></hex-output>
            <hex-stats class="stats" :mudkit="mudkit"></hex-stats>
            <hex-input class="input" :mudkit="mudkit"></hex-input>
        </div>
        <div class="info">
            <hex-map class="map" :mudkit="mudkit"></hex-map>
            <hex-date class="date" :mudkit="mudkit"></hex-date>
            <hex-surroundings class="surroundings" :mudkit="mudkit"></hex-surroundings>
            <hex-shields class="shields" :mudkit="mudkit"></hex-shields>
        </div>
    </div>
</template>

<script>
import MUDKit from 'mudkit';

import HexChat from 'components/shell/Chat';
import HexDate from 'components/shell/Date';
import HexInput from 'components/shell/Input';
import HexMap from 'components/shell/Map';
import HexOutput from 'components/shell/Output';
import HexShields from 'components/shell/Shields';
import HexStats from 'components/shell/Stats';
import HexSurroundings from 'components/shell/Surroundings';

export default {
    name: 'hex-main',
    components: {
        HexChat,
        HexDate,
        HexInput,
        HexMap,
        HexOutput,
        HexShields,
        HexStats,
        HexSurroundings
    },
    data() {
        return {
            mudkit: new MUDKit()
        };
    },
    mounted() {
        this.mudkit.connect();
    }
};
</script>

<style scoped lang="scss">
@import 'variables';
@import 'mixins';

.main-view {
    display: flex;
}

.input-output {
    border: 0.2rem solid color(gray, 600);
    border-right-width: 0.1rem;
    display: flex;
    flex: 7 7 70vw;
    flex-direction: column;
    max-height: 100vh;

    > .chat {
        flex: 1 1 28vh;
    }

    > .output {
        flex: 3 1 67vh;
    }

    > .stats {
        position: absolute;
        display: none;
    }

    > .input {
        flex: 0 0 4rem;
    }
}

.info {
    border: 0.2rem solid color(gray, 600);
    border-left-width: 0.1rem;
    display: flex;
    flex: 3 3 30vw;
    flex-direction: column;
    max-height: 100vh;

    > .map {
        flex: 4 1 45vh;
    }

    > .date {
        flex: 0 0 3rem;
    }

    > .surroundings {
        flex: 4 1 40vh;
    }

    > .shields {
        flex: 1 0 7rem;
    }
}
</style>
