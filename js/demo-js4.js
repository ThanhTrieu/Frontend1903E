// dinh nghia object trong js
let myCar = {
	name: 'BMW', // thuoc tinh - property cua doi tuong
	color: 'white',
	weight: 500,
	model: 'BMW i8',
	money: 1000,
	start: function(){
		// method - phuong thuc cua doi tuong
		console.log('khoi dong xe');
	},
	drive: function(){
		console.log('lai xe')
	},
	stop: function(){
		console.log('dung xe')
	}
}
// name : key cua object
// 'BMW' : value tuong ung voi key cua object
// kiem tra kieu du lieu cua object la gi ?
console.log(typeof myCar); // object
// kieu du lieu cua mang trong js cung la object
// truy cap vao gia tri nam trong object
// Array: nameArr[key];
// object: nameObject[key] || nameObject.key
// lay ra thuoc tinh name cua myCar
console.log(myCar['name'], myCar.name);
// truy cap vao 1 phuong trong object
// nameObject.nameMethod();
// in ra gia tri 'khoi dong xe' cua method start
console.log(myCar.start());

// object long nhau
let persons = {
	wroks : {
		name: 'DEV',
		money: 2000
	},
	name: 'NVA',
	add: 'HN'
}
// truy cap vao thuoc tinh money:
console.log(persons.wroks.money);
let student = [
	{
		msv: 113,
		name: 'NVA'
	},
	{
		msv: 114,
		name: 'NVB'
	},
	{
		msv: 115,
		name: 'NVC'
	}
];
console.log(student[2]['name']);
console.log(student[2].name); // khuyen khich dung cach nay
let animals = {
	name: 'dog',
	age: 2,
	weight: 3,
	color: 'black'
}
// duyet qua tat cac cac gia tri nam trong object
for (let val in animals) {
	console.log('key = ' + val);
	// val : key cua object
	// console.log(animals.val); // sai
	console.log('value = ' + animals[val]); // dung
	console.log(`key of ob : ${val}`); // template string
}
// ung dung cua object trong lap trinh thuc te : giup cho lap trinh co lua chon - format - convert du lieu ve chuan object de co the lam voi js





