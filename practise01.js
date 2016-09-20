var maxData = function(a){
 	a.sort(
		function(e1,e2){
			return e2-e1;
		}
	);// 数组降序 
	//console.log(a);
	for(var i = 0;i<a.length;i++){
		var s = String(a[i]);// 类型转换  
		var str = a.join('');// 连接字符 
	}
	return str;		    	
}
var b = maxData([9,5,6]); 连接字符 
console.log(b);
