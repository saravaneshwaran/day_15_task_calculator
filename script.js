// function creatediv(tagname,classname){
//   let ele=document.createElement(tagname);
//   ele.className=classname;
//   return ele
// }

// let conatainer_div=creatediv("div","conatiner")
// document.body.append(conatainer_div)
// let calculator_div=creatediv("div","calculator")
// conatainer_div.append(calculator_div)

let outscreen=document.getElementById("screen")
function display(num){
  outscreen.value += num
}

function calculator(){
  try{
    outscreen.value =eval(outscreen.value)
  }
  catch(err){
    alert("invalid")
  }
}

function clear(){
  outscreen.value= ""
}

function del(){
  outscreen.value=outscreen.value.slice(0,-1)
}