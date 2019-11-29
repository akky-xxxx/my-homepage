$(function() {
	myDate = new Date;
	myYear = myDate.getFullYear();
	$("#copyright").text(myYear);
	
	$('#contents').fullpage({
		anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Top', 'Profile', 'Web Design', 'Graphic Design', 'Photo' , 'Contact'],
		
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//controlArrows: true,
		verticalCentered: true,
		resize : true,
	});
	
	$(".boxer").boxer();
	
	$("#form").submit(function(){
		
		$("#form_name").removeClass("err");
		$("#form_mail").removeClass("err");
		$("#form_content").removeClass("err");
		flg = 0;
		
		if(!$("#form_name").val().match(/\S/g)){
			$("#form_name").addClass("err");
			flg = 1;
		}
		
		if(!$("#form_mail").val().match(/\S/g)){
			$("#form_mail").addClass("err");
			flg = 1;
		}
		
		if(!$("#form_content").val().match(/\S/g)){
			$("#form_content").addClass("err");
			flg = 1;
		}
		
		if(flg == 0){
			$.post(
	        	"/sys/mail/",
	        	{ 'form_name':$("#form_name").val() , 'form_mail':$("#form_mail").val() , 'form_url':$("#form_url").val() , 'form_content':$("#form_content").val() },
	        	function(data){
	            	alert("お問合せを受け付けいたしました。\nご返信まで今しばらくお待ち下さい。");
	            }
	        );
		}else{
			alert("必須項目が入力されていません。");
		}
	});
});
jQuery(window).load(function(){
	$('.items').masonry({
	    itemSelector: '.items li',
    });
});