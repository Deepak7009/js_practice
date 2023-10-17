const  coding =["js","ruby","java","python","cpp"]


// --------- forEach-----------  koi bi value return nahi karta h 
//      const values= coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);






const myNums=[1,2,3,44,55,6,7,8,65,54,]
// ----------------------filter---------------------- apne ander call back functio milta h,   jiske ander har value ko each acces kiya jayega or ek conditon de jayegi aur  jo jo item us condition ko satisfy karenge  and jo jo values true hogi   unhe return kiya jayega . 
//() jab aap perthencis laga k value dete ho to aapko return nahi deni hote h 

//  arrow function (()=>{})
//  const newNums=myNums.filter((num)=>num>4)
//  console.log(newNums); 
const newNums=myNums.filter((num)=>{
    num>5
})
  console.log(newNums);