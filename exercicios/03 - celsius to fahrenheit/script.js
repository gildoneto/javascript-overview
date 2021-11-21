// Celsius

const btnRodar = document.querySelector('#btnRodar')

btnRodar.addEventListener("click", function(e){
    e.preventDefault();
});

function printConvert(){
    let input = Number(document.querySelector('#usrInput').value)
    let resultado = converttoFahrenheit(input)
    document.querySelector('#resposta').value = resultado
    console.log(`O Valor ${input} em Fahrenheit é ${resultado}`)
}

function converttoFahrenheit(value){
    return value * 1.8 + 32
}