 /**
maxData()返回给定整数数组的元素组成的最大值
	用sort方法降序
*/
var maxData = function(a){
   a.sort(
    function(e1,e2){
    	return e2-e1;
    }
    );
    console.log(a);
    for(var i = 0;i<a.length;i++){
    	var s = String(a[i]);
    	var str = a.join('');
    }
    return str;		    	
}
var result1 = maxData([9,5,6]);
console.log(result1);

/**
	用冒泡方法降序
*/
var maxData = function(a){
	console.log(a);
	for(var i =0;i<a.length;i++){
	    for(var j = 0;j<a.length-i-1;j++){
	    	if(a[j]<a[j+1]){
	    		var tmp = 0;
	    		tmp = a[j];
	    		a[j] = a[j+1];
	    		a[j+1] = tmp;
	    	}
	    }
	}
	for(var i = 0;i<a.length;i++){
	    var s = String(a[i]);
	    var str = a.join('');
	}
	return str;
}
var result2 = maxData([2,5,6]);
console.log(result2);
//console.log(str);
