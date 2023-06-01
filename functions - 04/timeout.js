/*
  setTimeout  -> syntax : (setTimeout(function name,time in milliseconds,parameter1,parameter2..))
  we can set the id for the timer also
  we can set the id for setTimeout : let id = setTimeout(func,1000,"its interval");
  clearTimeout(id) -> is used to clear the timeout
  */

/*
 
 // eg -1 

function hello(str1,str2)
{
    alert(str1+str2);
}
setTimeout(hello,10000,"this is an timeout function","it takes 10000 milli seconds to show the alert message");

 // eg - 2

let id = setTimeout(()=>alert("hello this is an timer function"),1000);
clearTimeout(id);
alert(id);
*/

/* 
  setInterval -> syntax : setInterval(function name,time in milliseconds,parameter1,parameter2,..)
  same as setTimeout but setTimeout performs only one when the time is to be end but setInterval repeatedly performs until we didn't clear the setInterval
  we can set the id for setInteral : let id = setInterval(func,1000,"its interval");
  clearInterval(id) -> we can stop the setInterval using this method
*/
/*
function func(str)
{
  alert(str);
}
let id = setInterval(func,2000,"Hello i repeatedly perfomrs");
alert(id);
setTimeout(()=>{clearInterval(id),alert("Stop this repeatation")},10000);
*/  