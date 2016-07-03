
var equation = "";
var empty_field = true;
var textbox = document.getElementById("field");
var whole_unit = document.getElementById("base");
var temp_eval;
var current_eval;



var calc = function (val) {
  whole_unit.classList.remove("shake");
  if (empty_field) {
    equation += val;
    textbox.value = textbox.value + val;  
  }
}

function clearAll() {
  
  equation = "";
  textbox.value = "";
  whole_unit.classList.add("shake");
}

function clearEntry() {
 equation = equation.substring(0, equation.length-1);
  textbox.value = equation;
}

function ans() {
  temp_eval = equals(equation);
  equation = temp_eval;
  console.log(equation);
  
}

function equals() {
  current_eval = eval(equation);
  textbox.value = current_eval;
  return current_eval;
}

