var myName = "Gildo Neto";

let language = "JavaScript";

const pattern = "ECMAScript"

document.write(myName + '<br />')
document.write(language  + '<br />')
document.write(pattern  + '<br />')
console.log(myName)

/* ESCOPO GLOBAL E LOCAL */

/* EXEMPLO DE ESCOPO GLOBAL */
/*  Variáveis declaradas com o var 
    ficam no escopo Global e podem ser acesadas
    mesmo que fora de um bloco de código.*/

    // {
    //     var age = 32
    // }

    // console.log(age)

/* EXEMPLO DE ESCOPO LOCAL */
/*  Variáveis declaradas com o let 
    ficam no escopo Local e não podem ser acesadas
    fora de um bloco de código.*/
    // {
    //     let age = 32
    // }
    
    // console.log(age)