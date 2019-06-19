/* su dung ham khoi tao trong JQ */
$(function() {
	/* se doi cac ma html va css duoc load het roi moi thuc thi cac ma lenh JS o ben trong nay */

	/*
	sau nay toan bo code theo thu vien JQ se dat o trong nay
	 */
	
	// bat su kien click cho button
	$('.myBtn').click(function(){
		alert('AAAA')
	});
	// $ : keyword cua JQ
	// $ tuong duong voi jQuery
	// ('.myBtn') : selector JQ - tuong duong selector CSS
	// .click() : trieu goi 1 su kien
	/*
		function(){
			callback function - la hanh dong de thuc thi cho su kien dang duoc goi
		}
	*/

	$('input[name="user"]').keydown(function(){
		let data = $(this).val();
		// $(this) = $('input[name="user"]');
		// .val() = .value
		console.log(data);
	});

	$('.myBtn2').click(function(){
		let id = $('#title').prop('id');
		let classVal = $('#title').prop('class');
		console.log(id, classVal);

		$('img.icon').attr('src', 'images/test.jpg');

		//$('#myBox').removeAttr('class');

		// if($('#myBox').hasClass('box')){
		// 	console.log('Y');
		// 	// xoa class 
		// 	$('#myBox').removeClass('box');
		// } else {
		// 	console.log('N');
		// 	// them class
		// 	$('#myBox').addClass('box');
		// }
		
		$('#myBox').toggleClass('box');
		// lay gia tri cua the input
		console.log($('input[type=text]').val());

	});

	$('button.myBtn3').click(function(){
		// css cho div class content
		// single css
		// $('div.content').css('width', '300px');
		// $('div.content').css('height', '300px');
		// $('div.content').css('background-color', 'yellow');
		
		// multi css
		$('div.content').css({
			width: '300px',
			height: '300px',
			backgroundColor: 'yellow',
			border: '3px solid red',
			padding: 100
		});

		// lay ra kich thuoc cua div class content
		// let w = $('div.content').width();
		// let h = $('div.content').height();
		$('div.content').width(500); // xet lai kich thuoc
		$('div.content').height(500);
		let w = $('div.content').width(); // lay ra kich thuoc
		let h = $('div.content').height();
		console.log(w, h);

		let innerW = $('div.content').innerWidth();
		let innerH = $('div.content').innerHeight();
		console.log(innerW, innerH);


		$('ul li a').eq(2).css('color', 'red');
		// eq(index) : index dem tu 0
		// 
		
		if($('input[type=checkbox]').is(':checked')){
			console.log('ban vua tich chon')
		} else {
			console.log('ban chua tich chon');
		}

		$('div.test').find('div.test-2 > p').css('color', 'red');

		$('div.test').next().next().css({
			width: '300px',
			height: '300px',
			border: '1px sloid red'
		});
		
		$('div.test').prev().prev().css({
			width: '300px',
			height: '300px',
			border: '1px sloid red'
		});

		$('div.test-2').parent().parent().css({
			width: '300px',
			height: '300px',
			border: '1px sloid red'
		});
	});
});




