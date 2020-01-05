async function requestHandler(req, res){

    // try function is like .then in promises
    try {
        // for every request in bd we need to use 'await' and add 'async' in main function
        //when request returns something we can save it in variable
        let user = await User.findById(req.userId);
        let tasks = await tasks.findById(user.tasksId);
        tasks.completed = true;
        // when request doesn't return something we just add 'await'
        await tasks.save();
        res.send('Tasks completed');

    } catch (error) {
        res.send(error);
    }
}