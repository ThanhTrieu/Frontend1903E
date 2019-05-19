// comment tren 1 dong trong js
/*
comment tren nhieu dong trong js
 */

// viet chuong trinh hello word bang js
//alert('Hello word');
//alert : tao ra 1 hop thoai thong bao
console.log('Hello word');
//confirm('ban co muon thoat chuong trinh ko ?');
// confirm: tao ra 1 hop thoai thong bao - co 2 button de xu ly thong tin
// if(confirm('ban co muon thoat chuong trinh ko ?')){
// 	alert('ban vua thoat ra ngoai');
// } else {
// 	console.log('ban van o lai trang web');
// }
// var name = prompt('moi nhap ho ten');
// console.log(name);
// prompt : tao ra 1 hop thoai - cho phep nguoi dung nhap du lieu
// keyword : var : tu khao khai bao 1 bieb trong js

/* cac kieu du lieu co ban trong js */
/* trong js khong quy dinh san kieu du lieu cho bien - ma bien chi nhan kieu du lieu khi duoc gan gia tri (va nhan kieu du lieu tuong ung voi gia tri do) */

// 1 - kieu number
var a = 10;
// kiem tra kieu du lieu cua bien
console.log(typeof(a));
// 2 - string
var b = 'LPHP1903E';
console.log(typeof(b));
// 3 - boolean
var c = true;
console.log(typeof(c));

// 4 - null va undefined
var e = null;
var d; // chua dc gan gia tri : undefined
console.log(typeof(d));

var n1 = 100;
var n2 = '10'; // trong chuoi chi chua so : number string
var sum = n1+n2;
console.log(sum);
// + : trong js la toan tu noi chuoi va phep cong
var str1 = 'Hom nay troi nong qua';
var str2 = 'Sao khong duoc nghi hoc';
console.log(str1 + str2); // phep noi chuoi

 /******** cac tu khoa khai bao bien trong js ******************/
 // 1 : quy tac khai bao bien trong js
 // khong bat dau bang so - khong trung tu khoa trong lap trinh
 
 // 2: quy tac dat ten bien trong js
 var myNameIsNguyenVanTung = 'A';
 // var MyNameIsNguyenVanTung : js ko tuan thu
 // var my_name_is_nguyen_van_tung : js ko tuan thu 
 
 // 3: trong js bien phan biet chu hoa chu thuong
 var age = 10;
 var Age = 10;
 // 2 bien nay khac nhau hoan toan
 
 // Cac tu khoa - keyword khai bao bien
 // 1 - keyword var
 // bien toan cuc khai bao voi tua khoa var ==> khai bao bien o ngoai ham (su dung o bat ky dau)
 // bien cuc bo khai bao voi tu khoa var ==> khai bao bien o trong ham (bien do co pham vi su dung noi bo trong ham do thoi - ra khoi ham ko con y nghia(ton tai))

// khi khai bao 1 bien voi tu khoa var chung ta khong nen su dung lai tu khoa var khi goi bien ra su dung (override)
var money  =1000;
money = 2000;
// khi code js tren phien ban ES6 thi ko nen dung tu khoa var

// 2 - keyword let
let nameClass = 'js';
//let nameClass = 'php'; // sai
console.log(nameClass);
// khi khai 1 bien bang tu khoa let - ma 2 bien do co cung pham vi hoat dong thi khong duoc phep dung tu khoa let de override lai bien do
// trong ham thi 1 bien khai bao voi tu khoa let se co pham vi hoat dong gan voi cap ngoac nhon bao lay no nhat
// Moi bien khai bao voi tu khoa let ma co pham vi hoat dong khac nhau thi 2 bien do hoan toan doc lap voi nhau
function Test()
{
	let x = 100;
	if(true){
		let x = 90;
		console.log(x);
	}
	console.log(x);
	// hai bien x nay doc lap hoan toan voi nhau
}
// goi ham ra su dung
Test();

// 3 : keyword - const
const PI = 3.14;
const MY_NAME_CLASS = 'php';
//  PI = 3.15; // sai
console.log(PI);


/************************ CAC MENH DE DIEU KIEN  *********************************/
let test = ''; 
// khi so sanh ve gia tri : '' == false == 0
// true == 1
// == : so sanh tuong doi - chi so sanh ve gia tri
// === : so sanh tuyet doi - so sanh ve gia tri va kieu du lieu
if(test == null){
	console.log('Yes');
} else {
	console.log('No');
}
/*
var ck = null;
var ck = '';
 */

if(100 >= 90){
	// do something
} else if(100 == 100){
	// do something
	console.log('AAAAA');
} else if(100 == 170){
	// do something
	console.log('BBBBBB');
} else {
	// do something
}

let myNymber = 300;
switch (myNymber) {
	case  90:
		// statements_1
		break;
	case  200:
		console.log('CCCCC');
		break;
	case  590:
		console.log('DDDD');
		break;
	default:
		console.log('EEEE');
		break;
}

// vong lap for
for(let  i = 0; i <= 100; i++){
	console.log(i);
}
// vong lap while
let j = 1;
while(j <= 100){
	console.log(j);
	j++;
}

// vong lap do while
do {
	console.log(j);
	j++;
} while(j <= 100);

let n = 100;
let m = 99;
let k = (n-m % 2 == 0) ? (m-n) : (n-m > m -n ? n : m);
//console.log(k);
if(n-m % 2 == 0){
	let k = m-n;
} else {
	if(n-m > m -n){
		let k = n;
	} else {
		let k = m;
	}
}
//
let u = 100;
let v = 90;
//let l = (u++) - (++v) + (--u) - (--v) + (++u) + (v--);
 //l = 100   - 91    +   99  -   89  + 101   + 90
//console.log(l);

let g = (((++u)-(--v)) % 2 == 0) ? ((--v) + (++u) + (v--)) : (u++) - (++v) + (--u);
console.log(g);
// 89 + 101 + 90
// 100 - 91 + 99










