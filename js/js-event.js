function myClick(){
	console.log('ban vua click vao toi');
	alert('Hello word');
}

function myBlur(obj){
	// obj chinh tham so dc nhan tu onblur="myBlur(this)"
	// obj chinh la tham so this truyen vao
	// this : tro chinh the input ma dang lam viec
	let data = obj.value;
	console.log(data);
}
function myFocus(obj){
	console.log(obj.value);
}
function myFn(nameClass){
	console.log(nameClass);
}

function myChange(obj){
	let gender = obj.value;
	if(gender == 1){
		console.log('Nam');
	} else {
		console.log('Nu');
	}
}

function myChangeEmail(obj){
	console.log(obj.value);
}

function mydbClick(){
	console.log('db click');
}

function myError(){
	console.log('ko load dc anh');
}

function myKeydown(){
	console.log('ban vua nhan tay xuong ban phim')
}

function myKeypress(){
	console.log('tay ban vua giu ban phim');
}

function myKeyup(){
	console.log('tay ban vua buong -  nha phim ra');
}

function myLoad(){
	console.log('trang web dc tai hoan tat');
}

function myMousedown(){
	console.log('mouse down')
}
function myMousemove(){
	console.log('mouse move');
}
function myMouseout(obj){
	console.log('mouse out');
	obj.width = 10;
	obj.height = 10;
}
function myMouseover(obj){
	console.log('mouse over');
	obj.width = 300;
	obj.height = 300;
}
function myResize(){
	console.log('cua so trinh duyet vua dc thay doi');
}
function mySelect(){
	console.log('ban vua boi den chon van ban');
}
window.onbeforeunload = function(){
	return 'exit';
}

function getNumber(obj){
	console.log(obj.value);
	return obj.value;
}

function totalNumber(){
	
}












