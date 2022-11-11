const compras = ["pan", "carne", "tomates", "naranjas", "papas"];

compras.push("Aceite de girasol");

console.log(compras);

compras.pop();

console.log(compras);

const movies = [
  { title: "Interestelar", director: "Christopher Nolan", date:2014},
  { title: "Lord of the rings", director: "Peter Jackson", date: 2001 },
  { title: "Avatar", director: "James Cameron", date:2009 },
];

const newArrayMovies = movies.filter(valor=>valor.date>2010)
console.log(newArrayMovies)

const directors = movies.map(valor=>valor.director)
console.log(directors)

const titles = movies.map(valor=>valor.title)
console.log(titles)

const titleAndDirector = titles.concat(directors)
console.log(titleAndDirector)

const propagArray = [...directors, ...titles]
console.log(propagArray)