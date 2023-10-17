// Arrays	Two Sum	Find two numbers that add up to a target sum.	Input: [2,7,11,15], target = 9, Output: [0,1]
arr=[2,7,11,15]
target =9


var  twoSum = function(arr,target){
    var map={};
    for(var i=0;i<arr.length;i++){
        
        var value=arr[i];
        var complementpair= target +value;
        if(map[complementpair]!==undefined)
{
    return[map[complementpair],i];
} 
 else {
map[value]=i;
}
  }
     
};