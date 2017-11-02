console.log(location.search)
var str = location.search
str = str.slice(1)
var arr = str.split("=")
console.log(arr[1])
var txt = arr[1]
var url = "http://h6.duchengjiu.top/shop/api_goods.php"
var data = {
	search_text:txt,
	page:1,
	pagesize:18
	
}
$.get(url,data,function(obj){
	console.log(obj)
	var arr = obj.data
	var h =""
	var shuju = []
	for(var j=0;j<arr.length;j++){
		if (j%3 == 0) {
			h+= '<li class="first-j thinngli-j"><a href="goods.html?goods_id='+arr[j].goods_id+'"><img src="'
		} else{
			h+= '<li class="thinngli-j"><a href="goods.html?goods_id='+arr[j].goods_id+'"><img src="'
		}
		shuju[j] = arr[j].goods_id
		h+=arr[j].goods_thumb
		h+='" alt="'
		h+=arr[j].goods_desc
		h+='" title="'
		h+=arr[j].goods_desc
		h+='"/></a>'
		
		h+='<p>'+arr[j].goods_name+'</p></a></li>'
		
	}
	console.log(shuju)
	$(".thing-j ul").html(h)
	
})