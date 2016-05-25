var test_arr = [5,5,5,7,7,3,4,7];
var test_arr2 = [1,2,3,4,5,6,7,8,9,0,0];

console.log(pack(test_arr));
console.log(pack(test_arr2));

function pack(arr){
	var result_arr = [];

	for(var i=0;i<arr.length;i++){
		var element = arr[i];

		if(arr[i+1] === element){
			var packed = '';
			var count = 1;

			while(arr[i+1] === element){				
				count++;
				i++;
			}
			packed = element + ':' + count;
			result_arr.push(packed);
		} else {
			result_arr.push(element);
		}
	}

	return result_arr;	
}