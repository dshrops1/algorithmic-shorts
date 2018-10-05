// basic bubble sort implementation 

function bubbleSort(array){
	
	//finished check? go through and if every previous number is less than next number you are done
	//loop that is ran with conditonal to check if is sorted 

	let temp;	

	while(!sorted(array)){
		
		for(let i = 0; i < array.length - 1; i++){
			
			if(array[i] > array[i + 1]){
				
				//for hackerrank we will just add a count here
				temp = array[i + 1]
				array[i + 1] = array[i]
				array[i] = temp
			}	
				
		}
	}

}

function sorted(array){

	for(let i = 0; i < array.length - 1; i++){
		
		if(array[i] < array[i + 1]){
			
			continue;	
		}else{
			
			return false;	
		}	
	}

	return true;
}



let testArray = [1,2,5,3,7,8,6,4]
console.log("test array: " + testArray)
console.log("is sorted: " + sorted(testArray))
bubbleSort(testArray)
console.log("sorted array: " + testArray)


