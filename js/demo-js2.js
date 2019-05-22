// thuc ve ham (function) trong js
// dinh nghia ham loai 1 - rat hay su dung
function myFunction(name, age) {
	// function: keyword bat buoc phai co
	// myFunction: ten ham do lap trinh vien tu dinh nghia
	// toan bo code xu ly logic nam trong cap ngoac nhon
	// name va age : tham so (bien) truyen vao ham (co the co hoac khong)
	
	return "my name " + name + ", my age " + age;
	// + : toan tu noi chuoi trong js
	// return : tra ket qua ve cho ten ham
	// ham co the co hoac khong co return
	// khi gap tu khoa return trong ham thi se dung ham va thoat khoi ham - nhung ma lenh ben duoi tu khoa return se khong duoc thuc thi nua
	console.log(name, age); // cai nay se ko dcc thuc thi
}

// cach su dung ham
let test = myFunction('LPHP1903', 2019);
console.log(test, typeof(test));

function sumNumber(number1, number4 = 30){
	console.log(number1 + number4);
	// ham khong co return
}

sumNumber(10, 20);
// tham so bi thieu khi truyen vao ham se la mac dinh: undefined
// viet ham kiem tra so nguyen to
function kiemTraSoNguyenTo(number){
	if(number <= 1){
		return false;
	}

	if(number == 2){
		return true;
	}

	// xu ly tu 2 cho den can bac hai cua number
	let flagCheck = true;
	for(let i = 2; i <= Math.sqrt(number); i++){
		if(number % i == 0){
			flagCheck = false;
			break;
		}
	}
	return flagCheck;
}

let check = kiemTraSoNguyenTo(11);
if(check){
	console.log('la so nguyen to');
} else {
	console.log('khong phai la so nguyen to');
}

// viet ham kiem tra tu 1 den 100 co bao nhieu so chia het cho 2 va 3.
function timBoiSoChung(a,b, i,j){
	let count = 0;
	for(let n = i; n <= j; n++){
		if(n % a == 0 && n % b == 0){
			count++;
		}
	}
	return count;
}

let count = timBoiSoChung(2,3, 1,100);
console.log(count);

/*********** Cach dinh nghia ham thu 2 ****************/
// dinh nghia ham khong ten ma ten ham thong qua 1 bien
let kiemTraChanLe = function(number){
	if(number % 2 == 0){
		return true;
	}
	return false;
}
console.log(typeof(kiemTraChanLe));

let checkNumber = kiemTraChanLe(11);
// () : dung de truyen tham so vao ham va thuc thi ham
if(checkNumber){
	console.log('la so chan');
} else {
	console.log('la so le');
}
// viet ham khong ten kiem tra xem 1 nam co phai la nam nhuan duong lich ko?
let kiemTraNamNhuanDL = function(year){
	if(year % 400 == 0){
		return true;
	}
	if(year % 4 == 0 && year % 100 != 0){
		return true;
	}
	return false;
}
// viet ham khong ten : giai ptb2
let giaiPhuongTrinhBacHai = function(a, b, c){
	let delta = (b*b) - (4*a*c);
	if(delta < 0){
		return "PT vo nghiem";
	} else if(delta == 0){
		return "PT co nghiem kep x1 = x2 = " + (-b/2*a);
	} else {
		let x1 = (-b+Math.sqrt(delta))/(2*a);
		let x2 = (-b-Math.sqrt(delta))/(2*a);;
		return "PT co nghiem x1 = " + x1 + " va nghiem x2 = " + x2;
	}
}
let nghiem = giaiPhuongTrinhBacHai(-3,9,-6);
console.log(nghiem);
/******************* loai ham thu ba **************************/
// arrow function
let demoArrowFN = (name) => {
	console.log('Hello ' + name);
}
demoArrowFN('PHP1903E');

let demoArrowFN2 = age => {
	console.log('my age ' + age);
}
demoArrowFN2(19);

let demoArrowFN3 = add => 
	console.log('my address ' + add);

demoArrowFN3('HN');

// viet ham arrow function - chia nho thanh cac ham con, tinh dien tich hinh thang

let tinhDienTichHinhThang = (a,b,h) => {
	let tongHaiDay = () => {
		return a + b;
	}
	let tinhDT = () => {
		return (tongHaiDay() * h) / 2;
	}
	return tinhDT();
}
let dt = tinhDienTichHinhThang(1,2,3);
console.log(dt);
// viet ham arrow function
// giai he pt bach nhat hai 2 an

let giaiHPTBNHA = (a,b,c,a1,b1,c1) => {
	let tinhD = () => {
		return (a*b1 - a1*b);
	}

	let tinhDX = () => {
		return (c*b1 - c1*b);
	}

	let tinhDY = () => {
		return (a*c1 - a1*c);
	}

	let tinhKetQua = () => {
		if(tinhD() != 0){
			// D # 0
			let x = tinhDX() / tinhD();
			let y = tinhDY() / tinhD();
			return "nghiem x = " + x + " va nghiem y = " + y;
		} else {
			// D == 0
			if (tinhDX() != 0 || tinhDY() != 0) {
				return "Vo nghiem"
			} else if(tinhDX() == 0 && tinhDY() == 0) {
				return "Vo so nghiem";
			}
			
		}
	}

	return tinhKetQua();
}




