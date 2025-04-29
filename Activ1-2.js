const numeros = [3, 7, 12, 5, 2]

const cuadrados = numeros.map(num => num ** 2)
console.log("Números al cuadrado:", cuadrados)
console.log (" ")

const mayoresA5_1 = numeros.filter(num => num > 5.1)
console.log("Números mayores a 5.1:", mayoresA5_1)
console.log (" ")

const ParOImpar = num => num % 2 === 0 ? "Par" : "Impar"
console.log(`7 es un número: ${ParOImpar(7)}`)
console.log(`12 es un número: ${ParOImpar(12)}`)
