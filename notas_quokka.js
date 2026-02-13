// devulve el PRIMER ELEMENTO QUE NO SEA TRUE  y si NO devuelve el ultimo elemento
console.log(0 && 'Hello World' && 5)

if (0 && 'Hello World' && 5) {
  console.log('IF')
} else {
  console.log('la condición no se cumple')
}

// funcionamineto del operador &&
// devulve el PRIMER ELEMENTO QUE SEA TRUE  y si NO devuelve el ultimo elemento
const resultado = 5 && 3
console.log(resultado)  // 3

const resultado2 = "pepito" && 0 "" 3

console.log(resultado2)  // 0

const resultado3 = 0 && "pepito" && " "
console.log(resultado3)
console.log(0 && "pepito" && " ")
//da false

if ("pepito" && 0 "" 3) {
  console.log('IF')
} else {
  console.log('la condición no se cumple')
}



// devulve el PRIMER ELEMENTO QUE SEA TRUE  y si NO devuelve el ultimo elemento
const resultado = 0 && 3;
console.log(resultado);


// devuelve el PRIMER ELEMENTO QUE NO SEA TRUE  y si NO devuelve el ultimo elemento
const resultado2 = "pepito" || 0 || 3;
console.log(resultado2);




// restructuring
const alumnos = [
    {name: "Pepito", nota: 5},
    {name: "Luis", nota: 6},
    {name: "Luis", nota: 6},
    {name: "Pedro", nota: 5},
]

const [alumno1, alumno2, alumno3, alumno4] = alumnos

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)
console.log(alumno4)

// ejemplo de spread operator
const alumnos2 = [...alumnos]
console.log(alumnos2)  

