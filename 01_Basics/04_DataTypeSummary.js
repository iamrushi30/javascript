/*  # primitive Datatype

 7 types : String , Number , Boolean ,Null , Undefined , Symbol , Bigint*/

 const score=100
 const scoreValue=100.3

 const isLoggedIn=false
 const outsideTemp=null;
 let useremail;


 const id=Symbol('123')
 const anotherId=Symbol('123')

 console.log(id==anotherId)

 //const bigNumber=3232235113n


 /* # Refrence (non primitive datatype )
 Array , Objects , Functions
 */  

 const heros=["shaktiman","naagraj","doga"]
 let myobj={
    name:"rushi",
    age:19,
 }

 const myFunction=function(){
    console.log("hello world");
 }

 console.log(typeof bigNumber);

 //****************************************** */

 //stack(primitive)  and heap(non primitive)


 // stack eg primitive in stack we get copy of our data 

 let myyoutube="codewithrushi"

 let   anothername=myyoutube
 anothername="rushi"

 console.log(anothername);
 console.log(myyoutube);


// heap eg non primitive (array) : here we get refrence not copy 

let userOne={
    email:"user@goggle.com",
    upi:"usre@ybl"
}

let usertwo= userOne
    usertwo.email="rushi@gmail.com",
    usertwo.upi="hdfc@ybl"


console.log(userOne.upi);
console.log(usertwo.upi);