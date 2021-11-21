# JavaScript Overview

## INTRODUÇÃO

#### 1. O que é Javascript?

> "JavaScript é uma das linguagens de programação mais populares atualmente. É conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo sem a instalação de qualquer plugin."

Loiane Groner
**Estruturas de dados e algoritmos com JavaScript, 2018**

#### 2. Variáveis

Variáveis são usadas para armazenar dados, que podem ser atualizados ou recuperados sempre que necessário.

Variáveis servem para guardarmos dados de vários tipos. Javascript é uma liguagem fracamente tipada, ou seja, não é necessário definir o tipo quando declaramos uma variável.
O que define o tipo de uma variável é o valor atribuído a ela.
Uma variável declarada com as palavras reservadas `let` ou `var`, pode receber qualquer outro valor de qualquer tipo a qualquer momento, sempre respeitando o escopo.

###### Identificadores

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

###### Escopo

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

###### Hoisting

No JavaScript as variáveis declaradas com o `var` sofrem o que se chama de **Hoisting**. É como se o JavaScript declarasse aquela variável fora do bloco de código sem inicializá-la, e dentro do bloco ele atribui um valor. Exemplo:

```javascript
var age;
{
    age = 32
}

console.log(age) //-> 32
```

#### 3. Tipos de dados

#### 4. Operadores

#### 5. Condicionais

#### 6. Estrutura de Repetição

#### 7. Funções

#### 8. Classes

#### 9. Exercícios