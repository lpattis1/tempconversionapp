// variables:

let toFahrenheitBtn = document.querySelector(".farenheit__btn");
let toCelsiusBtn = document.querySelector(".celsius__btn");
let celsiusResetBtn = document.querySelector(".celsius__resetbtn");
let farenheitResetBtn = document.querySelector(".farenheit__resetbtn");


// -------------------------------

// celsius to farenheit calculator:

function celsiusToFarenheit(){
    let toFarenheitInput = document.querySelector(".fahrenheit__input").value;
    let cfConversion = toFarenheitInput * 9/5 + 32;

    let toFarenheitOutput = document.querySelector(".fahrenheit__output").value = cfConversion;
}

// celsius to farenheit thermometer animations:

function farenheitTherm1(){
    let fMeterGrow = document.querySelector(".f-fill").style.height = "6.5rem";
    fMeterGrow = document.querySelector(".f-fill").style.transition = "all .3s ease-out";
}

function farenheitTherm2(){
    let fMeterShrink = document.querySelector(".f-fill").style.height = "1rem";
    fMeterShrink = document.querySelector(".f-fill").style.transition = "all .4s ease-out";
}


// c to f conversion and reset buttons:
toFahrenheitBtn.addEventListener("click", function(){
    celsiusToFarenheit();
    farenheitTherm1();
})

farenheitResetBtn.addEventListener("click", function(){
    document.querySelector(".fahrenheit__conversion").reset();
    farenheitTherm2();
})

// ----------------------------------------

// ----------------------------------------

// celsius to farenheit calculator:

function farenheitToCelsius(){
    let toCelsiusInput = document.querySelector(".celsius__input").value;
    let fcConversion = ((toCelsiusInput -32) * 5 / 9).toFixed(2);

    let toFarenheitOutput = document.querySelector(".celsius__output").value = fcConversion;
}

// celsius to farenheit thermometer animations:

function celsiusTherm1(){
    let cMeterGrow = document.querySelector(".c-fill").style.height = "6.5rem";
    cMeterGrow = document.querySelector(".c-fill").style.transition = "all .3s ease-out";
}

function celsiusTherm2(){
    let cMeterShrink = document.querySelector(".c-fill").style.height = "1rem";
    cMeterShrink = document.querySelector(".c-fill").style.transition = "all .4s ease-out";
}


// c to f conversion and reset buttons:
toCelsiusBtn.addEventListener("click", function(){
    farenheitToCelsius()
    celsiusTherm1();
})

celsiusResetBtn.addEventListener("click", function(){
    document.querySelector(".celsius__conversion").reset();
    celsiusTherm2();
})

// ----------------------------------------