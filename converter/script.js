btn = document.getElementById("btn")
input = document.getElementById("text")
selectfrst = document.getElementById("select1")
selectscnd = document.getElementById("select2")
Result = document.getElementById("result")
num = Number(input.value)


btn.onclick = function(){
    if(selectfrst.value == "Fahrenheit" && selectscnd.value == "Fahrenheit"){
        console.log(Result.textContent=input.value)
    }
    else if(selectfrst.value == "Fahrenheit" && selectscnd.value == "Celsius"){
        console.log (Result.textContent = (input.value - 32) * 5/9 )
    }
    else if(selectfrst.value == "Fahrenheit" && selectscnd.value == "Kelvin"){
        console.log (Result.textContent = (input.value - 32) * 5/9 + 273.15 )
    }
    else if(selectfrst.value == "Celsius" && selectscnd.value == "Fahrenheit"){
        console.log (Result.textContent = (input.value * 9/5) + 32 )
    }
    else if(selectfrst.value == "Celsius" && selectscnd.value == "Celsius"){
        console.log (Result.textContent = input.value )
    }
    else if(selectfrst.value == "Celsius" && selectscnd.value == "Kelvin"){
        console.log (Result.textContent =  Number(input.value) + (273.15))
    }
    else if(selectfrst.value == "Kelvin" && selectscnd.value == "Fahrenheit"){
        console.log (Result.textContent = (input.value - 273.15) * 9/5 + 32)
    }
    else if(selectfrst.value == "Kelvin" && selectscnd.value == "Celsius"){
        console.log (Result.textContent = (input.value  - 273.15))
    }
    else if(selectfrst.value == "Kelvin" && selectscnd.value == "Kelvin"){
        console.log (Result.textContent = input.value )
    }
    else{
        console.log(Result.textContent="Invalied Number")
    }


}