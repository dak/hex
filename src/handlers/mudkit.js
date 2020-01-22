import MUDKitWorker from 'worker-loader!mudkit';

export default class MUDKitHandler {

    constructor() {
        this.mudkit = new MUDKitWorker();

        const outputel = document.getElementById('output');

        this.mudkit.addEventListener('message', ((e) => {
            const json = JSON.parse(e.data);

            outputEl.textContent += json.chunk;
        }));
    }

    send(message) {
        this.mudkit.postMessage(message);
    }

}
