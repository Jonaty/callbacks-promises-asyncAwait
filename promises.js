// function to response user requests by promises
// 
function resquestHandler(req, res) {
	User.findById(req.userId).then((user) => {
		// res.send(user) in case want to return just user
		//this is async operation, because take time in bd, then will continue with another promise and returns value (return)
		return Tasks.findById(user.tasksId);
	}).then((tasks) => {
		tasks.completed = true;
		//this is async operation, because take time in bd, then will continue with another promise and returns value (return)
		return tasks.save();
	}).then(() => {
		res.send('Tasks completed');
	}).catch((errors) => {
		return res.send(errors);
	});
}