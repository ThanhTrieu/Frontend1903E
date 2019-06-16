/* su dung dom element ID truy cap vao phan tu html */
let myButton = document.getElementById('btnClick');
// xem la da truy cap vao dc phan tu html do chua . Neu truy cap dc thi se tra ve chinh phan tu do
console.log(myButton); 

let myButton2 = document.getElementsByTagName('button');
console.log(myButton2[1]);

let myButton3 = document.getElementsByClassName('myBtn');
console.log(myButton3[0]);

let myButton4 = document.querySelectorAll('.title');
console.log(myButton4[0]);

// bat su kien cho cac phan tu html thong qua dom event va dom listener
// 1 : phai truy cap vao dc phan tu html do
// 2 : tao su kien - bat su kien cho phan tu
myButton.onclick = function(){
	//alert('ban vua click vao toi');
	console.log('AAAAA');
}
myButton.ondblclick = () => {
	console.log('ban vua click dup chuot vao toi')
}
//
myButton2[1].addEventListener('click', function () {
	console.log('addEventListener');
});

let myInput = document.getElementsByClassName('form-control');

myInput[0].onfocus = function() {
	console.log('onfocus');
}
myInput[0].addEventListener('blur', function(){
	console.log('blur');
});
myInput[0].onkeyup = function(){
	// con tro this : myInput[0]
	// value: thuoc tinh cua the input
	console.log(this.value);
}

document.getElementById('btnClick3').onclick = function (){
	let text = myInput[0].value;
	console.log(text);

	// truy cap vao the h1
	let myTitle = document.getElementsByTagName('h1');
	console.log(myTitle[0].innerHTML);
	myTitle[0].innerHTML = 'Demo PHP';
	myInput[0].setAttribute('type','button');
	document.getElementsByTagName('img')[0].src = "images/test.jpg";

	let myBox = document.getElementsByClassName('box');
	myBox[0].style.width = '300px';
	myBox[0].style.height = '300px';
	myBox[0].style.backgroundColor = 'yellow';
}

// bat su kien click vao button sum  number
document.getElementById('total').onclick = function () {
	// can lay ra gia tri cua the input 1 va 2 khi nguoi dung da nhap gia tri vao
	
	// truy cap vao the input
	let number1 = document.getElementById('number_1');
	let number2 =document.getElementById('number_2');

	let valNumber1 = number1.value;
	// chuyen ve kieu so
	valNumber1 = Number.parseInt(valNumber1);

	let valNumber2 = number2.value;
	valNumber2 = Number.parseInt(valNumber2);

	// kiem tra xem valNumber1 va valNumber2 : co phai so hay ko
	if(Number.isInteger(valNumber1) && Number.isInteger(valNumber2)){
		// tinh tong cho 2 so
		let total = valNumber1 + valNumber2;
		// hien thi ket qua 
		document.getElementById('result').innerHTML = `Tong cua ${valNumber1} va ${valNumber2} = ${total}`;
	} else {
		alert(' vui long nhap so');
	}
}

// bat su kien click me 4
document.getElementsByClassName('btnClick4')[0].addEventListener('click', function(){
	// lay ra kich thuoc cua trinh duyet dang lam viec (cua so trinh duyet)
	let wBrowser = window.innerWidth;
	let hBrowser = window.innerHeight;

	console.log(`with browser = ${wBrowser} - height browser = ${hBrowser}`);
	// tao ra 1 cua so moi tren trinh duyet
	// window.open('https://vnexpress.net','vnExpress.net','width=300,height=300');
	
	// reload lai trang web
	// window.location.reload(true); // tham so true reload tu server
	// di toi 1 trang web khac (giong nhu link the a html)
	// window.location.href = 'https://php.net';

	// Lấy width và height của màn hình
	let wScreen = screen.width;
	let hScreen = screen.height;

	console.log(`with Screen = ${wScreen} - height Screen = ${hScreen}`);
});

document.getElementById('historyForward').onclick = function(){
	history.forward(); 
};



