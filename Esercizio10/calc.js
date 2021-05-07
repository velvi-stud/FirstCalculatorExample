let display;
let display_current_value=NaN;
let display_old_value=NaN;
let operator_selected="?";
let current_decimal_part=1;
let result=NaN;

function calc_init(){
    display=document.getElementById("display_press");
    display_current_value= parseFloat(display.innerText);
}

function calc_keyClearPressed(){
    display.innerText=0;
    display_current_value=0;
    display_old_value=0;
    current_decimal_part=1;
}

/** controlla se il punto è presente nello span descritto in display
 * ritorna true se NON è presente (se indexOf lo trova ed è > -1)
 * ritorna false se NON è presente (se indexOf fallisce ed è = -1) **/
function is_dot_pressed(){
    return display.innerText.indexOf(".") > -1;
}

function calc_keyDotPressed() {
    if(!is_dot_pressed()){
        display.innerText +=".";
    }
}

function calc_keyNumPressed(num_pressed) {
    if(display.innerText.length===12){
        window.alert("numero massimo di elementi inseribili")
        return;
    }
    display = document.getElementById("display_press");
    display_current_value = parseFloat(display.innerText);
    if (is_dot_pressed() === false) {
        if (display_current_value === 0) {
            display_current_value = num_pressed;
            display.innerText = display_current_value.toString();
        } else if (display_current_value > 0) {
            display_current_value = (display_current_value * 10) + num_pressed;
            display.innerText += num_pressed;
        }
    }
    else{
        display_current_value+=(num_pressed*(Math.pow(10,current_decimal_part*-1)));
        display.innerText+=num_pressed;
        current_decimal_part++;
    }
    console.log(display_current_value);
}

// ricorda che quando si preme un operatore si devono necessariamente azzerare current_decimal_part
function calc_keyOperatorPressed(operator_pressed){
    display.innerText=0;
    display_old_value=display_current_value;
    current_decimal_part=1;
    operator_selected=operator_pressed;
}

function calc_keyCalcPressed(){
    switch (operator_selected){
        case "+":
            result = display_old_value + display_current_value;
            break
        case "-":
            result = display_old_value - display_current_value;
            break
        case "*":
            result = display_old_value * display_current_value;
            break
        case "/":
            result = display_old_value / display_current_value;
            break
        default:
            result = display_current_value;
    }
    display.innerText=result;
    console.log(result);
}