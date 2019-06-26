// ham khoi tao
// code JQ nam trong nay
$(function(){
	// bat su kien cho button click me
	$('button[class=btn]').click(function(){
		// empty() : xoa noi dung cua the html(phan text nam ben trong the html)
		//$('#title').empty();
		//$('#title').html('');
		
		// xoa bo di han phan tu html
		//$('#title').remove();
		
		// lay ra noi dung cua the html
		
		//let data = $('#title').html(); // tra ve ca the html
		
		//let data = $('#title').text(''); //xoa noi dung

		//let data2 = $('#title').text();// tra ve text nam ben trong the html

		//alert(data2);
		// $('#title').html('Learning demo PHP');
		// let dt = $('#title').text();
		// console.log(dt);
		

		//$('div.box').fadeOut('slow');
		//$('div.box').fadeOut('fast');
		//$('div.box').fadeOut(1000);
		//$('div.box').hide(3000);
		//$('div.box').slideUp(3000);
		//$('div.box').fadeToggle(3000);
		$('div.box').slideToggle(3000);
	});
	// event click me 2
	$('.myBtn').click(function(){
		//$('div.box').fadeIn(1000);
		//$('div.box').show(3000);
		$('div.box').slideDown(3000);
	});
});


