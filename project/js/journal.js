var url = "http://h6.duchengjiu.top/shop/api_goods.php"
var data = {
	"page":2,
	"pagesize":18
}
$.get(url,data,function(obj){
	console.log(obj)
	var arr = obj.data
	var h =""
	for(var j=0;j<arr.length;j++){
		if (j%3 == 0) {
			h+= '<li class="first-j thinngli-j"><a href="javascript:"><img src="'
		} else{
			h+= '<li class="thinngli-j"><a href="javascript:"><img src="'
		}
		
		h+=arr[j].goods_thumb
		h+='" alt="'
		h+=arr[j].goods_desc
		h+='" title="'
		h+=arr[j].goods_desc
		h+='"/></a>'
		
		h+='<p>'+arr[j].goods_name+'</p></a></li>'
		
	}
	console.log(h)
	$(".thing-j ul").html(h)
	
})


