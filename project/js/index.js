
var i = 0;
function play(){
	$(".lunbo ul li").eq(i).fadeIn().siblings().fadeOut()
	$(".num span").eq(i).addClass("num-s").siblings().removeClass("num-s")
}
play()
var timer ;
function autoplay(){
	timer = setInterval(function(){
		i++;
		if(i>$(".lunbo ul li").length-1){
			i=0
		}
		play()
	},2000)
}

autoplay()

	


$(".pre").click(function(){
	i--;
	if(i<0){
		i=$(".lunbo ul li").length-1
	}
	play()
})

$(".next").click(function(){
	i++;
	if(i>$(".lunbo ul li").length-1){
		i=0
	}
	play()
})

$(".lunbo").hover(function(){
	clearInterval(timer)
},function(){
	autoplay()
})

$(".num span").each(function(index){
	$(this).click(function(){
		i=index
		play()
	})
})


var url = "http://h6.duchengjiu.top/shop/api_goods.php"
var data = {"page":1,"pagesize":9}
$.get(url,data,function(obj){
	console.log(obj)
	var arr = obj.data
	var h =""
	for(var j=0;j<arr.length;j++){
		if (j%3 == 0) {
			h+= '<li class="first thinngli"><img src="'
		} else{
			h+= '<li class="thinngli"><img src="'
		}
		
		h+=arr[j].goods_thumb
		h+='"/><div class="li-yin"><h2>￥'
		h+=arr[j].price
		h+='</h2><h1>'
		h+=arr[j].goods_desc
		h+='</h1>'
		
		h+='</div><p>'+arr[j].goods_name+'</p></a></li>'
		
	}
	console.log(h)
	$(".thing ul").html(h)
	
})



