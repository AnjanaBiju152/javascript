const movies=[
    {name:"Sookshmadarshini",release:2024,language:"malayalam"},
    {name:"Marco",release:2024,language:"malayalam"},
    {name:"Sookshmadarshini",release:2007,language:"hindi"},
    {name:"Tera Zameen Par",release:2005,language:"malayalam"},
    {name:"Roja",release:2007,language:"tamil"},
]
// add a new movie

movies.push({name:"I am Kadhalan",release:2024,language:"malayalam"})
console.log(movies);

// filter movies name that release after 2024
let moviesnames2010=[];
const moviesname =  movies.forEach((item)=>{
 if(item.release > 2010){
    moviesnames2010.push(item.name)
    return item.name
 }
})
console.log("movies released after 2010");
console.log(moviesnames2010);

console.log("---------------------------------------------------");

const sortedmovies = movies.sort((a,b)=>a.release-b.release);
console.log("invalid movies");
console.log(sortedmovies);


