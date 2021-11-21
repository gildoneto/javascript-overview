# JavaScript Overview

## INTRODUÇÃO

### 1. O que é Javascript?

> "JavaScript é uma das linguagens de programação mais populares atualmente. É conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo sem a instalação de qualquer plugin."

Loiane Groner
**Estruturas de dados e algoritmos com JavaScript, 2018**

### 2. Variáveis

Variáveis são usadas para armazenar dados, que podem ser atualizados ou recuperados sempre que necessário.

Variáveis servem para guardarmos dados de vários tipos. Javascript é uma liguagem fracamente tipada, ou seja, não é necessário definir o tipo quando declaramos uma variável.
O que define o tipo de uma variável é o valor atribuído a ela.
Uma variável declarada com as palavras reservadas `let` ou `var`, pode receber qualquer outro valor de qualquer tipo a qualquer momento, sempre respeitando o escopo.

#### Identificadores

- Podem começar com `letra`, `$` ou `_`
- Não podem começar com números
- É possível usar `letras` ou `números`
- É possível usar `acentos` e `símbolos`
- Não podem conter `espaços`
- Não podem ser `palavras reservadas` 

**Dicas:**

- `Maiúsculas` e `minúsculas` fazem a diferença
- Tente escolher `nomes coerentes` para as variáveis
- Após 2015 [ES6] surguram novas formas de declarar variáveis `let` e `const`

|          :computer:          |         VAR        |               LET              |             CONST            |
| ---------------------------- | ------------------ | ------------------------------ | ---------------------------- |
|       Escopo<br> Global      | :heavy_check_mark: |               :x:              |              :x:             |
|      Escopo<br> de Função    | :heavy_check_mark: |       :heavy_check_mark:       |      :heavy_check_mark:      |
|      Escopo<br> Bloqueado    |         :x:        |       :heavy_check_mark:       |      :heavy_check_mark:      |
| Pode ser<br> ressignificado? | :heavy_check_mark: |       :heavy_check_mark:       |              :x:             |
|   Pode ser<br> redeclarado?  | :heavy_check_mark: |               :x:              |              :x:             |
|    Pode ser<br> hospedado?   | :heavy_check_mark: |               :x:              |              :x:             |

#### Escopo

Variáveis declaradas com a palavra reservada `var` ficam disponíveis no escopo Global e podem ser acesadas mesmo que fora de um bloco de código.

```javascript
{
    var age = 32
}

console.log(age) //-> 32
```

Variáveis declaradas com a palavra reservada `let` (ou `const`) ficam disponíveis apenas no escopo Local, portanto não podem ser acesadas de fora de um bloco de código.

```javascript
{
    let age = 32
}

console.log(age) //-> Uncaught ReferenceError: age is not defined
```

Variáveis declaradas com a palavra reservada `const` não podem ser declaradas sem ser inicializadas, ou seja, é obrigatório declarar um valor no momento da declaração.

```javascript
const myLastName //-> Uncaught SyntaxError: Missing initializer in const declaration

const name = "João"
console.log(name) //-> João
```

#### Hoisting

No JavaScript as variáveis declaradas com o `var` sofrem o que se chama de **Hoisting**. É como se o JavaScript declarasse aquela variável fora do bloco de código sem inicializá-la, e dentro do bloco ele atribui um valor. Exemplo:

```javascript
var age;
{
    age = 32
}

console.log(age) //-> 32
```

### 3. Tipos de dados

O JavaScript é uma linguagem dinamicamente tipada. O tipo de dado pode ser alterado conforme a necessidade do algoritmo.

#### **string**

O tipo string é uma cadeira de caracteres, texto, que é pode ser qualquer sequencia de caracteres desde que entre *aspas duplas* <code>"texto qualquer"</code>, *aspas simples* <code>'texto qualquer'</code> ou crases <code>&#96;Template string pode usar ${interpolation}&#96;</code> 

```javascript
var firstName = 'Kelvis' //string
let lastName = "Duran" //string
const regards = `Boas vindas` //string [Template String]
```

#### **number**

Qualquer valor númerico, seja ele inteiro(*int*) ou decimal(*float*).

```javascript
let age = 35 //number
let height = 1.80 //number
```

#### **boolean**

Valor lógico representado apenas por duas palavras reservadas.
`true` para verdadeiro e `false` para falso.

```javascript
let isStudent = false //boolean
let isDev = true //boolean
```

#### **null**

Um objeto vazio, que não possui dados.

```javascript
let price = null // Objeto Vazio
```

#### **undefined**

Valor ainda não definido.

```javascript
let price;
console.log(price) // undefined
```

#### **objeto**

Objetos são uma forma de mapeamento chave x valor.
É representado por chaves `{}`, e dentro delas definimos o identificador(chave) como uma `"string"` seguida de *dois pontos* `:` e logo após o valor, que pode ser de qualquer tipo. Havendo mais de uma chave x valor, deve se adicionar uma *vírgula* `,` ao final de cada um, com a exceção do último.

```javascript
let person = {
    "name": "Gildo Neto",
    "age": 35,
    "isDev": true
}
```

#### **array**

Um conjunto de informações para representar listas e/ou conjuntos.

```javascript
let artists = ["Alceu Valença", "Chico Science", "Zé Ramalho", "Otto"]
```

#### **function**

Um objeto que tem a capacidade de ser chamado (ser executado).
Após declarado, pode ser chamado a qualquer momento usando o nome da função seguido de parêntes e opcionalmente com parâmetros dentro dos parênteses. `nomeDaFuncao(parametros)`

```javascript
function sum(num1, num2){
    return num1 + num2
}

console.log(sum(3,7)) //-> 10

```

#### typeof

Operador que retorna o tipo do dado.

```javascript
console.log(typeof firstName) //-> string
console.log(typeof height) //-> number
console.log(typeof isDev) //-> boolean
console.log(typeof price) //-> undefined
console.log(typeof person) //-> object
console.log(typeof artists) //-> object [Array é objeto]
console.log(typeof sum) //-> function
```


### 4. Operadores

#### TIPOS DE OPERADORES

- **ARITMÉTICOS**
- **de ATRIBUIÇÃO**
- **RELACIONAIS (de comparação)**
- **LÓGICOS**
- **TERNÁRIO**

#### OPERADORES ARITMÉTICOS

```javascript
5 + 2 //-> 7 [SOMA]
5 - 2 //-> 3 [SUBTRAÇÃO]
5 * 2 //-> 10 [MULTIPLICAÇÃO]
5 / 2 //-> 2.5 [DIVISÃO]
5 % 2 //-> 1 [RESTO]
5 ** 2 //-> 25 [POTÊNCIA]
```

#### ORDEM DE PRECEDÊNCIA DE OPERADORES ARITMÉTICOS


1. Parênteses -> `()`
2. Potência -> `**`
3. Multiplicação, divisão e resto -> `*` `/` `%`
4. Soma e subtração -> `+` `-`


#### OPERADORES DE ATRIBUIÇÃO

##### Atribuição Simples

```javascript
var a = 5 + 3 //-> 8
var b = a % 5 //-> 3
var c = 5 * b ** 2 //-> 45
var d = 10 - a / 2 //-> 6
var e = 6 * 2 / d //-> 2
var f = b % e + 4 / e //-> 3
```

##### Auto-atribuição

```javascript
var n = 3

n = n + 4 //-> 7
n = n - 5 //-> 2
n = n * 4 //-> 8
n = n / 2 //-> 4
n = n ** 2 //-> 16
n = n % 5 //-> 1
```

##### Auto-atribuição SIMPLIFICADA

```javascript
var y = 3

y += 4 //-> y = y + 4 
y -= 5 //-> y = y - 5  
y *= 4 //-> y = y * 4 
y /= 2 //-> y = y / 2 
y **= 2 //-> y = y ** 2 
y %= 5 //-> y = y % 5
```

##### Operadores de Incremento

```javascript
var z = 5

z++ //-> z += 1 || z = z + 1
z-- //-> z -= 1 || z = z - 1
```

#### OPERADORES RELACIONAIS


- **`>`** -> Maior que
- **`<`** -> Menor que
- **`>=`** -> Maior ou igual
- **`<=`** -> Menor ou igual
- **`==`** -> Igual
- **`!=`** -> Diferente
- **`===`** -> Igual e do mesmo tipo?
- **`!==`** -> Diferente e tipos diferentes?


```javascript
5 > 2 //-> true
7 < 4 //-> false
8 >= 8  //-> true
9 <= 7  //-> false
5 == 5  //-> true
4 != 4  //-> false
```

#### OPERADORES LÓGICOS

- **`!`** -> Negação
- **`&&`** -> E (conjunção)
- **`||`** -> OU (disjunção)

```javascript
// NEGAÇÃO -> Operador Unário
!true //-> false
!false //-> true
```

```javascript
// CONJUNÇÃO -> Operador Binário
true && true //-> true
true && false //-> false
false && true //-> false
false && false //-> false
```

```javascript
// DISJUNÇÃO -> Operador Binário
true || true //-> true
true || false //-> true
false || true //-> true
false || false //-> false
```

#### PRECEDÊNCIA DE OPERADORES DE TIPOS DIFERENTE

1. Operadores Aritméticos `()` `**` `/` ...
2. Operadores Relacionais `>` `<` `>=` ... 
3. Operadores Lógicos<br>
    3.1 **`!`**<br>
    3.2 **`&&`**<br>
    3.3 **`||`**

```javascript
// EXEMPLOS
idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?
```

#### OPERADOR TERNÁRIO

Composto pelos caracteres **`?`** e **`:`**
Primeiro vem o teste lógico.
Se o teste for `true` o valor após a interrogação **`?`** será retornado.
Se o teste for `false` o valor após os 'dois pontos' **`:`** será retornado.

```javascript
let media = 8
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Aprovado
media = 5.7
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Reprovado
```

### 5. Estruturas Condicionais

Estruturas que são executadas apenas se atenderem as condições definidas no código.

#### **if** 

```javascript
let num = 1;

if (num === 1){
    console.log("num é igual a 1")
}
```

#### **if else** 

```javascript
let num = 1;

if (num === 1){
    console.log("num é igual a 1")
} else {
    console.log("num não é igual a 1")
}
```

#### **if else if** 

```javascript
let num = 1;

if (num === 1){
    console.log("num é igual a 1")
} else if (num === 2) {
    console.log("num é igual a 2")
} else {
    console.log("num não é igual a 1 nem a 2")
}
```

#### **switch case** 

```javascript
let month = "janeiro"

switch (month) {
    case "fevereiro":
        console.log("Mês 2")
        break

    case "março":
        console.log("Mês 3")
        break
    
    case "janeiro":
        console.log("Mês 1")
        break

    default:
        console.log("nenhum caso foi atendido")
}
```

### 6. Estruturas de Repetição

#### for

```javascript
var colors = ["black", "white", "yellow", "green", "blue"]

for (let i = 0; i < colors.length; i++){
    console.log(colors[i])
}
```

```javascript
for (let i = 0; i < 10; i++){
    console.log(i)
}
```

#### while

```javascript
let i = 0;

while (i < 10){
    console.log(i);
    i++;
}
```

#### do while

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10)
```

### 7. Funções

Função sem parâmetro
```javascript
function sayHello() {
    console.log('Hello')
}

sayHello()
```

Função com parâmetro(argumento)
```javascript
function sayHello(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

sayHello('Chico', 'Science')
```

Função com return
```javascript
function sum(a,b) {
    return a + b
}

console.log(sum(40,60))
```

### 8. Classes

Desde de 2015 que é possível trabalhar com orientação a objetos no JavaScript.

```javascript
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos', 'Brian', 500);
let otherBook = new Book('Exu em Nova York', 'Cidinha da Silva', 100);

console.log(book.read())
```

#### Herança

```javascript
class ITBook extends Book {
    constructor(title, author, pages, technology){
        super(title, author, pages)
        this.technology = technology;
    }
}

let itBook = new ITBook('Algoritmos for living', 'Brian', 500, 'Algoritmos');

console.log(itBook)
```

#### Encapsulamento

```javascript
class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }
}

let person = new Person('Gildo')
person.name = 'Neto'
console.log(person.name)
```


### 9. Exercícios Introdução