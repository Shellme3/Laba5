class Student {
	show() {
		return this.cape(this.name);
	}
	
	cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}