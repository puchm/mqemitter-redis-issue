import redis from 'mqemitter-redis';

const emitter = redis({
    host: '127',
    port: 6379
});

emitter.state.once('error', () => console.log("Error caught"));

console.log('running');

const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000);
});

async function start() {
    await p;
    console.log('Promise resolved');
}

start();