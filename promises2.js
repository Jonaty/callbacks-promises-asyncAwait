let users = [
	{
		id: 1,
		name: 'Naty'
	},
	{
		id: 2,
		name: 'Jhon'
	},
	{
		id: 3,
		name: 'Gio'
	}
];

let phones = [
	{
		id_user: 1,
		number: 3141219543
	},
	{
		id_user: 2,
		number: 3141040063
	}
];

function getUser(id) {
	return new Promise((resolve, reject) => {
		let user = users.find((_user) => {
			return _user.id == id;
		});
		if (user) {
			console.log('User exists');
			console.log(user.name);
			resolve(getPhone(user));
		} else {
			reject('User no exists');
		}
	});
}

function getPhone(user) {
	return new Promise((resolve, reject) => {
		let phone = phones.find((_phone) => {
			return _phone.id_user == user.id;
		});

		if (phone) {
			console.log('Phone exists');
			resolve(phone);
		} else {
			reject('Phone no exists');
		}
	});
}

getUser(1).then((resUser) => {
	return resUser;
}).then((resPhone) => {
	console.log(resPhone.number);
})
	.catch((error) => {
		console.error('Error', error);
	})
