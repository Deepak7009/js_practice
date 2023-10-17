// array in javascripts 
// arrays are resizable and can contain a mix of differnet type of datatypes.
// arrays are not associative array and so means array elements cannot be using arbitary strings as indexes'
// array copy opertions creats shallow copies and deep copies 
// shallow copy which gives reference of real value 
//  deep  copies properties do not share same refernce 
    
                    // question1//
        // const array =[1,2,3,4,5,6,7,8,9,0]
        // array.forEach(function(val){
        //     console.log("hello ," +val);
        // })
                        //question 2
        //arrar ki saare number print karo aur unhe chod do jo 5 se bade h
        // array.forEach(function(val){
        //     if(val <= 5){
        // console.log(val);
        //     }
        // })


        // que => 3 saare elements jo array main h unka sum karo 
        // let sum =0; 
        // var a =[1,23,4,5,5,6,5,,7,54,]
        //   a.forEach(function(val)  {
        //     if(typeof val ==="number"){
        //         sum = sum+val;
        //         console.log("number", val)
        //         // console.log("the total sum is ",sum)
        //     }
        //     // console.log(val);
        //     // console.log("the total sum is ",sum)
        //   })
        //   console.log("the  sum of total number  is",sum)






        // let sum =0; 
        // var a =[1,23,4,85,5,"66",5,7,"54",]
        //   a.forEach(function(val)  {
        //     if(typeof val ==="number"){
        //         sum = sum+val;
        //         console.log("number", val)
        //         // console.log("the total sum is ",sum)
        //     }
        //     // console.log(val);
        //     // console.log("the total sum is ",sum)
        //   })
        //   console.log("the  sum of total number  is",sum)


        //   synchronous (phele run hota h code executes line by line and if line is not resolved the code execution will not move to thw nwxt line) vs 
        // asynchronous(badd m run hota h code awaits till code is not finished exucution then the synchronous code finishes executing  as the async means it probably can have some delay it also takes something called callback )
         var arr=[];

          for(let i = 0 ; i < 10 ; i++){
            arr.push(function(){
                setTimeout(function (){
                    console.log(i);
                },1000)
            })

          }

          for(var i = 0 ; i < 10 ; i++){
            arr[i]();
          }


