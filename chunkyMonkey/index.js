/*
* Problem on freeCodeCamp algorithms
* 
* Write a function that splits an array (first argument) 
* into groups the length of size (second argument) and returns them as a two-dimensional array.
* Example : chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
* Example2: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
*/





function chunkArrayInGroups(arr, size) {
  
  //the top array that will contain the nested arrays
  let endArray = []
  //itterable to go through all the values
  let itter = arr.values()
  //used to place the nested arrays in their positions
  let first = 0
  //finished condition
  let trueOrFalse = false
  let nextValue;

  //is itt finished
  while(!trueOrFalse){
    //at the start of this loop we clear both these to be used for the
    //next nested array
    let count = 0
    let thisArray =[]
    
    //size of values what that nested array should contain
    while(count < size)
    {
      
      nextValue = itter.next()
      trueOrFalse = nextValue.done
      //condition to prevent undefined array or undefined values
      if(trueOrFalse){
        break;
      }

      thisArray[count] = nextValue.value
      
      count++
    }
    //if its not and empty array we add it to our end array
    if(!(thisArray == false)){
    endArray[first] = thisArray
    }
    
    first++
  }
  return endArray;
}

