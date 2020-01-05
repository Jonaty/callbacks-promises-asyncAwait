const { taskOne, taskTwo } = require('./tasks');

// Function to execute sequential process, (plus time)
//Wait for every process no matter how long it takes and show them sequentially
async function main() {
    try {
        console.time('Measuring time');
        let valueOne = await taskOne();
        let valueTwo = await taskTwo();
        console.timeEnd('Measuring time');

        console.log('Value one:', valueOne);
        console.log('Value two:', valueTwo);
    } catch (error) {
        console.log(error);
    }
}

main();