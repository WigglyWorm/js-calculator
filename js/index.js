var display = document.getElementById('display');

function toScreen(x){
  display.value += x;
  if(x === 'c'){
    display.value = '';
  }
}

  function answer() {
    x = display.value
    x = eval(x);
    display.value = x;
  }

function power(){
  x = display.value;
  x = eval(x*x);
  display.value = x;
}
function percent(){
  x = display.value;
  x = eval(x /100);
  display.value = x;
}

 function backspace() {
   var num = display.value;
   var len = num.length -1;
   var newNum = num.substr(0, len);
   display.value = newNum;
 }