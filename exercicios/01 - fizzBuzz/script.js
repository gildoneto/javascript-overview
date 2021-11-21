// FizzBuzz
// Divisível por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisível por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número',
// Se não for divisível nem por 3 e nem por 5 => Entrada

const btnRodar = document.querySelector('#btnRodar')

btnRodar.addEventListener("click", function(e){
    e.preventDefault();
});

function printFizzBuzz(){
    let input = Number(document.querySelector('#usrInput').value)
    let resultado = fizzBuzz(input)
    document.querySelector('#resposta').value = resultado
    console.log(resultado)

}

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Não é um número'
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'
    if (input % 3 === 0)
        return 'Fizz'
    if (input % 5 === 0)
        return 'Buzz'

    return input
}