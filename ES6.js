let num = 10;
console.log(num);

let Nombre = 'Soy Alan Babor'
let edad = 19;
let LibroFav = {
    titulo: 'Alicia en el pais de las maravillas',
    paginas: 200
}

console.log(Nombre);
console.log(LibroFav.paginas);
console.log(LibroFav.titulo);

const PaginasMinimas = 150;

if(LibroFav.paginas<PaginasMinimas) {
    console.log('Tu libro Favorito tiene menos cantidad que las necesarias');
}else {
    console.log('Felicidades, tu libro' + LibroFav.titulo + 'tiene la cantidad de paginas minimas');
}

const PrimerNombre = 'Claudia';
const PrimerApellido = 'Benik';

function getNombreCompleto(PrimerNombre,PrimerApellido)  {
    return `${PrimerNombre} ${PrimerApellido}` ;
}

const McGreetings =  `Hola ${getNombreCompleto(PrimerNombre,PrimerApellido) + num}` ;

console.log(McGreetings);

const Numeros = (...args) => console.log(args); 

Numeros(1,2,3,4,5,6);

let NumerosGrandes = [100,200,300,400,500,600];
let NumerosGrandes2 = [700,800,900,1000];

console.log(NumerosGrandes2);

 let NumerosGrandes3 = [...NumerosGrandes, ...NumerosGrandes2];

 console.log(NumerosGrandes3);

 const NumerosBingo = [36,45,65,76,89,90,12];

 let NuevoBingo = NumerosBingo.map((item,i) => {
    console.log(`item at pos: ${i} is ${item}` );
 });

NumerosBingo.reduce((acc,item2) => {
    console.log(item2);
    console.log(acc);
    return acc + 1;
}, 0) 

 const ResultadosBingo = NumerosBingo.filter(item => {
console.log(item);
return item % 2  === 0;

})

console.log(ResultadosBingo);

const ResultadoFiltrado  = NumerosBingo.find(item => {
    return item % 2  === 0 && item >= 0;
 } )

 console.log(ResultadoFiltrado);

 const ResultadoFiltrado2  = NumerosBingo.findIndex(item => {
    return item % 2  === 0 && item >= 0;
 } )

 console.log(ResultadoFiltrado2);

 
