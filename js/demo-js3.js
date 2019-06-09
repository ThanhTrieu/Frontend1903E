// cac ky thuat xu ly voi doi tuong number trong js
// ep - chuyen ve kieu so
// string a = '123';
// a = (int)a; // ngon ngu C/C++
// int b = 10;
// b = 30;

let numberString = '123';
console.log(typeof(numberString));

// chuyen ve kieu so nguyen
numberString = Number.parseInt(numberString);
// chuyen ve kieu so thuc
numberString = Number.parseFloat(numberString);
console.log(typeof(numberString));

// kiem tra xem co phai thuc su la so hay ko
// co phai la so nguyen ko
if(Number.isInteger(numberString)){
	console.log('yes');
} else {
	console.log('No');
}

let myNumber = 0/0;
// NaN : not a number
let myNumber2 = 10/2;
// Number
// myNumber va myNumber2 : kieu du lieu van la number
let myNumber3 = {}; // not a number : object rong

console.log(typeof(myNumber));

if(Number.isNaN(myNumber)){
	console.log('y');
} else {
	console.log('N');
}

let a = 10;
let b = '20';
b = Number.parseInt(b);
let c = a + b;
console.log(c);
/////////////////////////
// let n1 = prompt('moi nhap he so a');
// let n2 = prompt('moi nhap he so b');
// ax+b = 0; // tim x
// console.log(typeof n1); // typeof(n1);
// n1 = Number.parseInt(n1);
// n2 = Number.parseInt(n2);
// // tinh toan - giai pt
// let nghiem = -n2/n1;
// console.log('nghiem la :' + nghiem);
/*********************************************************/
// mang trong c/c++
// int arr = [];
// string arr2 = [];

// mang trong js
// 1 - mang don : (mang 1 chieu)
// khong yeu cau cung kieu du lieu giua cac phan tu trong mang
// full syntax
let arr = new Array('tao','le','man','oi',1,2,3,4,5, true, false);
// short syntax
let arr2 = [1,2,3,4,5,'cam','quyt','mit','dua'];
// 2 - mang da chieu
let arr3 = [[1,2,3],'age','name',['cam','le']];
// kiem tra so luong phan tu nam trong mang
let countArr = arr3.length;
console.log(countArr);
console.log(arr.length);
// so luong phan tu cua mang : dem tu 1
// vi tri - so thu tu cu phan tu nam trong mang : dem tu 0
// truy cap vao 1 gia tri cua phan tu nam trong mang
// cu phap : nameArray[vi_tri_phan_tu];
// in ra ngoai trinh duyet tu cam trong mang arr2
console.log(arr2[5]);
// in ra ngoai trinh duyet tu 'le' trong mang arr3
console.log(arr3[3][1]);

// truy cap vao tat ca cac phan tu nam trong mang
// duyet mang trong js
let arrNumber = [1,2,3,4,5,6,7,8,9];
// dung for
let elements = arrNumber.length;
for(let i = 0; i < elements; i++){
	console.log(arrNumber[i]);
}

// dung forEach
// tham so truyen vao forEach lai la 1 ham ( tham so do la callback function)
arrNumber.forEach(function(item, index, array){
	// item : tham so do ltv tu dinh nghia - chi ra gia tri cac phan tu nam trong mang
	// index: tham so do ltv tu dinh nghia - chi ra vi tri (thu tu) cua cac phan tu nam trong mang
	// array: tham so option (tuy chon - co the ko can truyen) - chinh la mang ban dau dang duyet
	// can in ra stt va gia tri cua cac phan tu.
	console.log('STT ' + index + ' GT ' + item);
});
console.log(arrNumber);

let arrNumber2 = [100,200,300,400,500,600];
for(let e of arrNumber2){
	console.log(e);
	// ko ho tro xac dinh key(vi tri - stt) cua phan tu nam trong mang
}
// Cac ham xu ly trong mang cua js - cac ham co san
//1 : them phan tu 700 vao cuoi mang arrNumber2
arrNumber2.push(700);
console.log(arrNumber2);
// 2: xoa phan tu cuoi cung cua mang arrNumber2 - tra ve dung phan bi xoa do
let lastElement = arrNumber2.pop();
console.log(lastElement, arrNumber2);
// 3: them phan 700 vao dau mang
arrNumber2.unshift(lastElement);
console.log(arrNumber2);
// 4: xoa bo di phan tu dau tien cua mang
let firstElement = arrNumber2.shift();
console.log(firstElement, arrNumber2);
// kiem tra 1 phan tu co nam trong mang hay ko
let arrNumber3 = [1,2,3,4,5,10,11,12,13,14,15];
// cho biet so 10 co nam trong mang ko?
let pos = arrNumber3.indexOf(1);
console.log(pos); // in ra vi tri : 0

let pos2 = arrNumber3.lastIndexOf(1);
console.log(pos2); // 0

// kiem tra 1 bien co phai la array hay ko
if(Array.isArray(arrNumber3)){
	console.log('OK');
} else {
	console.log('Fail');
}
// sap xep mang trong js 
let arrNumber4 = [10,1,9,3,7,6,2,4,8,5,11,20];
// xap sep mang theo thu tu tang dan hoac giam dan cua cac gia tri nam trong mang
arrNumber4.sort(function(a, b){
	// tham so truyen vao ham sort la 1 callback function
	// a, b do LTV tu dinh nghia
	//return a - b; // tang dan
	return b - a; // giam dan
});
console.log(arrNumber4);
// viet 1 ham sap xep mang - su dung thuat toan noi bot
let arrNumber5 = [10,1,9,3,7,6,2,4,8,5,11,20];

let myOderArray = (arr) => {
	for(let i = 0; i < arr.length; i++){
		for(let j = i + 1; j < arr.length; j++){
			if(arr[i] < arr[j]){
				let tmt = arr[i];
				arr[i] = arr[j]
				arr[j] = tmt;
			}
		}
	}
	return arr;
}
myOderArray(arrNumber5);
console.log(arrNumber5);
// viet cho ham tra ve 1 mang chua toan so le;
let myOddArray = (arr) => {
	let newArray = [];

	// 1 - duyet mang
	// for(let i = 0; i < arr.length; i++){
	// 	// 2 - kiem tra so le
	// 	if(arr[i] % 2 != 0){
	// 		//3 - luu vao 1 mang cac so le
	// 		newArray.push(arr[i]);
	// 	}
	// }
	
	// for(let e of arr){
	// 	if(e % 2 != 0){
	// 		newArray.push(e);
	// 	}
	// }
	
	arr.forEach(function(item,index){
		if(item % 2 != 0){
			newArray.push(item);
		}
	});

	
	return newArray;
}
console.log(myOddArray(arrNumber5));

let arrNumber6 = [10,1,9,3,7,6,2,4,8,5,11,20];
// tim trong mang so 8 co nam trong mang ko ? neu co thi thay no bang 1 so bat ky ko nam trong mang, neu ko thi them no vao dau mang.
// viet ham xu ly.
function demo(arr, m = 8, n = 0)
{
	//1 - kiem tra m = 8 nam trong mang ko?
	let pos = arr.indexOf(m);
	if(pos === -1){
		// ko ton tai trong mang
		arr.unshift(m);
		return arr;
	} else {
		// co ton tai trong mang
		// n : so can thay the cho m
		// kiem tra n ko giong nhung phan tu khac nam trong mang
		// neu ko giong moi thay the. Neu ko thi thoi ko lam gi ca
		let flagCheck = false;
		for(let i = 0; i < arr.length; i++){
			if(arr[i] == n){
				flagCheck = true;
				break;
			}
		}
		if(!flagCheck){
			// moi thay the
			arr[pos] = n;
			return arr;
		}
		return arr;
	}
}

console.log(demo(arrNumber6, 8, 9999));
// cho mang chua cac nam 
let arrYear = [2012,2013,2014,2015,2016,2018,2019,2020];
// kiem tra trong mang co nam nao la nuam nhuan DL ko ? neu co thay cac nam do bang nam lon hon nam nhuan do 5 don vi . Neu ma trong mang ko co nam nhuan nao thi ko xu ly gi het.
// viet ham
// viet ham bo tro kiem tra nam nhuan
function kiemTraNamNhuanDL(year){
	if(year % 400 == 0){
		return true;
	} else if( year % 4 == 0 && year % 100 != 0){
		return true;
	}
	return false;
}

function demo2(arr){
	//1 kiem tra xem co nam nao nam nhuan ko?
	for(let i = 0; i < arr.length; i++){
		if(kiemTraNamNhuanDL(arr[i])){
			arr[i] += 5;
		}
	}
	return arr;
}

console.log(demo2(arrYear));








