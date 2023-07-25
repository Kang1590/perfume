$(document).ready(function(){
	
	$("header button").click(function(){
		if( $(this).text() == "menu" ){
			$("nav").stop().slideDown( 800,function(){
				$("header button").text("close");	
			} );			
		} else {
			$("nav").stop().slideUp();
			$(this).text("menu");			
		}
	});//버튼클릭: 끝
	
	$("a").click(function(){
		$("nav").stop().slideUp();
		$("header button").text("menu");
	});
	
	//연습부분
	const x = ["삼성" , "직업" , "전문" , "학교"];
	//setInterval( y, 2500);
	function y(){
		console.log(x);
	}
	
	//오른쪽방향으로 자동 슬라이드
	const area1 = $("#slide");
	const imgWidth = area1.children().width();
	console.log(imgWidth);
	
	//setInterval( leftMove ,2700 );
	area1.click(function(){  leftMove()  });
	function leftMove(){
		area1.stop().animate({left : imgWidth * (-1) },
		function(){
			area1.append( area1.children().first()  );
			area1.css("left" , 0);
			let j = $("#circle button.blue").index();
			console.log( j );
			j++;
			console.log(j);
			if(j>=4){
				$("#circle button").eq(0).addClass("blue").siblings().removeClass("blue");
			}else{
				$("#circle button").eq(j).addClass("blue").siblings().removeClass("blue");
			}
		});
	}
	
});/////전체: 끝