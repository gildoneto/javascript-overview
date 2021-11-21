// Reverse a string

const btnRodar = document.querySelector('#btnRodar')

btnRodar.addEventListener("click", function(e){
    e.preventDefault();
});

function printReverse(){
    let input = document.querySelector('#usrInput').value
    let resultado = reverseAString(input)
    document.querySelector('#resposta').value = resultado
    console.log(resultado)
}


function reverseAString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}
