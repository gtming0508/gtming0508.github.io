console.log(123456798);
    
$.ajax({
	url:'./js/data.json',
	dataType:'json',
	success:function(data){
		console.log(data);
	}
})