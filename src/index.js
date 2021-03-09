
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = matrix;
  	let newArr = [];
  	if (matrix == undefined){
  		return newArr
  	}else {
  		for (let i = 0; i < arr.length; i++) {
    	if (i % 2) {
      		let a = arr[i].reverse();
      		newArr.push(...arr[i])
    	} else {
      		newArr.push(...arr[i])
    	}
  	}
  	return newArr
  	}
  	
}

