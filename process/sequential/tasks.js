const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {

	async taskOne() {
		try {
			/**
			 * We can produce a error (when an error occurs the program continues with the 
			execution of the following methods)
			 */

			//throw new Error('Some issue');
			await sleep(4000);
			return 'One value';
		} catch (error) {
			console.log(error);
		}
	},

	async taskTwo() {
		try {
			await sleep(2000);
			return 'Two value';
		} catch (error) {
			console.log(error);
		}
	}

}
