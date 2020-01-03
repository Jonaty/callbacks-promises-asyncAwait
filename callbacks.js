function requestHandler(req, res) {
	User.findById(req.userId, function (error, user) {
		if (error) {
			return res.send(error);
		} else {
			Tasks.findById(user.tasksId, function (error, tasks) {
				if (error) {
					return res.send(error);
				} else {
					tasks.completed = true;
					tasks.save(function (error) {
						if (error) {
							return res.send(error);
						} else {
							res.send('Tasks completed');
						}
					})
				}
			})
		}
	})
};

// Arrow function

function requestHandler(req, res) {
	User.findById(req.userId, (error, user) => {
		if (error) {
			return res.send(error);
		} else {
			Tasks.findById(user.tasksId, (error, tasks) => {
				if (error) {
					return res.send(error);
				} else {
					tasks.completed = true;
					tasks.save((error) => {
						if (error) {
							return res.send(error);
						} else {
							res.send('Tasks completed');
						}
					});
				}
			});
		}
	});
}