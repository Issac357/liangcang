
//$(document).ready(function() {
//	// (1) 先获取cookie中用户名和密码值
//	var goods_id = $.cookie("goods_id");
//	
//	
//	// (2) 如何判断有没有 cookie
//	//         有： 登陆
//	//         没有:  不登陆
//	
//	var url = "http://h6.duchengjiu.top/shop/api_goods.php"
//var data ={"goods_id":goods_id}
//$.get(url,data,function(obj){
//	console.log(obj)
//})
//})

console.log(location.search)
var str = location.search
str = str.slice(1)
var arr = str.split("=")
console.log(arr[1])

	var url = "http://h6.duchengjiu.top/shop/api_goods.php"
	var data ={"goods_id":arr[1]}
	
	$.get(url,data,function(obj){
		console.log(obj)
	})

var i =0

var len=$(".small ul li").length
var ulwidth=len*80
$(".small ul").css("width",ulwidth+"px")

$('.small ul li').each(function(index){
	$(this).click(function(){
		var imgsrc = $(this).children('img').attr('src')
		$('.big img').attr('src',imgsrc)
		m=index
		$(".small ul li").eq(m).addClass("active").siblings().removeClass("active")
	})
})
	
	
	var n =0
	var m =0
	$('.goods-next').click(function(){
		
		if($('.small ul').is(":animated")){
			return
		}
		n+=80
		if(n > ulwidth-80){
			n=ulwidth-80
		}
		$('.small ul').animate({'marginLeft':-+n+'px'},300,function(){})
		
		m++
		if(m>=17){
			m=17
		}
		$(".small ul li").eq(m).addClass("active").siblings().removeClass("active")
		var imgsrc = $('.small ul li').eq(m).children('img').attr('src')
		$('.big img').attr('src',imgsrc)
	})
	
		$('.goods-pre').click(function(){
			
			if($('.small ul').is(":animated")){
			return
			}
		n-=80
		if(n <0){
			n=0
		}
		$('.small ul').animate({'marginLeft':-+n+'px'},300,function(){})
		m--
		if(m<=0){
			m=0
		}
		console.log(m)
		$(".small ul li").eq(m).addClass("active").siblings().removeClass("active")
		var imgsrc = $('.small ul li').eq(m).children('img').attr('src')
		$('.big img').attr('src',imgsrc)
	})