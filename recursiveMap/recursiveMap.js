/*
* rewriting the Arrays.map() function using recursion to take an array and a function
* going recursivly down for each index altering it and adding it to a new array and 
* when we get to the last index we break out of the recursion and return the new array
*/


//in functioning code we will put this whole thing in its own function
//we will pass the same stuff in but keep everything in a simple scope
//we will break out of this loop and just return the newArray

//for now though we will do it a little different 

let count = 1;
let position = 0;
let newArray =[];

let myRecursiveFunctionLoop = function(arrayToMap, fn){
  //arrayToFilter is just that the array you are going to filter
  //fn is the function we will apply to each element to arraToMap
  
 
  //may need to wrap in a try catch block if the function is a bitch
  
  //use an if statement to check if we have gotten to the end of the array
  if(arrayToMap[arrayToMap.length - count] >= 0){
    
   
    //is the array we will return after its been mapped
    //we will go down the stack or up the array and apply the function to each value
    newArray[position] = fn(arrayToMap[position])
    
    

    //this value will be used to work our way up the array 
    //so we dont have reverse the array that we get
    position += 1;
    count += 1;

    //this statement may not work can we directly pass in the values like this
    myRecursiveFunctionLoop(arrayToMap, fn)
    
  }else{
    
    //in here we break out or continue
    //how ever we just skip going back up the recursive stack
     
    //maybe just return the newArray all the way up the stack so when it gets to the first call we will also return out 
    //side of this another return with the new array so this else is only called for the last loop
    return newArray
    
  }


  return newArray
  
  
  
  //then we return the newArray
  
}



module.exports = myRecursiveFunctionLoop








