const { taskOne, taskTwo } = require('./tasks');

// Function to execute sequential process, (plus time)
//Wait for every process no matter how long it takes and show them sequentially
async function main() {
    try {
        console.time('Measuring time');

        let results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('Measuring time');

        console.log('Value one:', results[0]);
        console.log('Value two:', results[1]);
    } catch (error) {
        console.log(error);
    }
}

main();