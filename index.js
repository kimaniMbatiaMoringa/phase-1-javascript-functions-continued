// code your solution here
function saturdayFun(msg = "roller-skate"){

    const inFunction = function (){
        return `This Saturday, I want to ${msg}`+ "!"
    }

    return inFunction()
    
}
console.log(saturdayFun())

function mondayWork(activity="go to the office"){

    function inFunction2(){
        return "This Monday, I will "+ activity+"."
    } 
    return inFunction2();
}

console.log(mondayWork("work from home"))

function wrapAdjective(wrapper="*", special="a hard worker"){
     return function(){
        
        if (wrapper==="||"){
            return `You are ${wrapper}a dedicated programmer${wrapper}!`
        }

        else return `You are ${wrapper}${special}${wrapper}!`;
    };


}
console.log(wrapAdjective("||","program")())








function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  
  console.log(outer("Hello")("student", "JavaScript"));