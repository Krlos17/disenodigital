console.log('-----------------------------------------------Ejercicio 1--------------------------------------------------------------------------------------------')
//Genere una lista que contenga solo los autores de dicha lista en una variable llamada: autores. 
const libros = [{titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 
1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, { 
titulo: "1984", autor: "George Orwell", año: 1949 } ]

const autores = [];
libros.forEach((e)=>{
    autores.push(e.autor)
}) 
console.log(autores);
console.log('')
console.log('-----------------------------------------------Ejercicio 2--------------------------------------------------------------------------------------------')  
//Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el aumento será del 10%. Imprima los nuevos valores.

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

if ( empleado.antiguedad > 5)
    empleado.salario = empleado.salario * 1.10

console.log(empleado)
console.log('')
console.log('-----------------------------------------------Ejercicio 3--------------------------------------------------------------------------------------------') 
//imprima el número mayor de la lista (sin ordenarla)
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
let mayor = 0
numeros.forEach((e)=>{
    if (e > mayor)
        mayor = e
})

console.log(mayor)
console.log('')
console.log('-----------------------------------------------Ejercicio 4--------------------------------------------------------------------------------------------')
//Con el listado anterior, calcule el promedio de todos los números impares
let suma = 0
let cont = 0
numeros.forEach((e)=>{
    if (e % 2 != 0)
        {cont = cont + 1
        suma = suma + e }   
})
const promedio = suma / cont
console.log(promedio)
console.log('')
console.log('-----------------------------------------------Ejercicio 5--------------------------------------------------------------------------------------------')
//Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas en consola
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

const { nombre, edad, ciudad } = persona
console.log(nombre)
console.log(edad)
console.log(ciudad)
console.log('')