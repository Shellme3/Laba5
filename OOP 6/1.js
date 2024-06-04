class User {
	show(name, surn) {
		return user.name + ' ' + user.salary;
	}
}

let user = new User;
user.name = 'john';
user.salary = '1000'

console.log(user.show(user.salary, user.name));


