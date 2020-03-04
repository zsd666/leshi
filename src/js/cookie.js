function setCookie(key,value,expires){
	if(expires){
		var time = new Date()
		time.setTime(time.getTime() - 1000 * 60 * 60 * 8 +1000 * expires)
		document.cookie=key+"="+value+";expires="+time
	}else{
		document.cookie=key+"="+value
	}
}
function getCookie(key){
	var str=''
	
	var temp=document.cookie.split(';');
	temp.forEach(function(item){
		var t=item.split('=')
		if(t[0]==key){
			str=t[1]
		}
	})
	return str
}
