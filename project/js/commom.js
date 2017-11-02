$(".cont h4 img").mouseover(function(){
		$(this).animate({"right":50},1000,function(){
			$(this).animate({"right":0},1000)
		})
	})

$(".back").click(function(){
	$("body,html").animate({scrollTop:0},function(){
		$(".header-s").animate({"top":0},100)
	})
})

$(document).scroll(function(){
	var top = $(document).scrollTop()
	if(top==0){
		$(".header-s").animate({"top":0},100)
	}
	
	if(top>100){
		$(".back").fadeIn()
		$(".lianxi").fadeIn()

	}else{
		$(".back").fadeOut()
		$(".lianxi").fadeOut()

	}
	
})

$(document).mousewheel(function(e){
	if($(".header-s").is(":animated")){
		return
	}
	//var a = 
	if(e.deltaY<0){
		$(".header-s").animate({"top":-56},200)
	}else{
		$(".header-s").animate({"top":0},200)
	}
	console.log(e.deltaY)
})

var searchA = 0
$(".search-in").focus(function(){
	$(this).keydown(function(e){
		if(e.keyCode==13){
			var txt = $(".search-in").val()
			location.href="search.html?search="+txt
			return
		}
	})
})


$(".search-in").click(function(e){
	e.stopPropagation()
	
})
$(".search-a").click(function(e){
	e.stopPropagation()
	
	if( $(".search-in").val() !=""){
		var txt = $(".search-in").val()
		location.href="search.html?search="+txt
		return
	}
	
	if(searchA == 0){
		$(".search-div").animate({"left":0},500,function(){
			searchA = 1
			
		})
	}else{
		$(".search-div").animate({"left":260},500,function(){
			searchA = 0
		})
	}
	
	
	
})
$(document).click(function(){
	if(searchA == 1){
		$(".search-div").animate({"left":260},500,function(){
			searchA = 0
		})
	}else{
		return
	}
})

$(document).ready(function() {
	// (1) 先获取cookie中用户名和密码值
	var u = $.cookie("u");
	var p = $.cookie("p");
	
	// (2) 如何判断有没有 cookie
	//         有： 登陆
	//         没有:  不登陆
	
	if (p != undefined && u != undefined) {
		$("#login-index").html(u); // 放到 input 中
		//$("#reg-index").html("注销")
		//$("#reg-index").attr("href","#")
		// 放到 input 中
		
		
		// 再发  ajax 向服务器发送登陆请求
		
	}
})





//$(".search-a").click(function(){
//	var txt = $(".search-in").val()
//	location.href="search.html?search="+txt
//})