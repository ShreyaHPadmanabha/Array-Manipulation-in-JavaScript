//******************User Data Array Manipulation******************************
const users = [
    { name: "John", age: 15, gender: "Male", location: "New York" },
    { name: "Emily", age: 30, gender: "Female", location: "Los Angeles" },
    { name: "David", age: 40, gender: "Male", location: "Chicago" },
    { name: "Sarah", age: 22, gender: "Female", location: "Houston" },
    { name: "Michael", age: 35, gender: "Male", location: "Miami" },
    { name: "Jessica", age: 18, gender: "Female", location: "Seattle" },
    { name: "Ryan", age: 33, gender: "Male", location: "Boston" },
    { name: "Michelle", age: 27, gender: "Female", location: "San Francisco" },
    { name: "Daniel", age: 15, gender: "Male", location: "Washington D.C." },
    { name: "Amanda", age: 19, gender: "Female", location: "Denver" },
    { name: "James", age: 31, gender: "Male", location: "Dallas" },
    { name: "Elizabeth", age: 26, gender: "Female", location: "Atlanta" },
    { name: "Matthew", age: 8, gender: "Male", location: "Philadelphia" },
    { name: "Rachel", age: 32, gender: "Female", location: "Phoenix" },
    { name: "Kevin", age: 34, gender: "Male", location: "San Diego" }
];
// Part 1: User Data array Manipulation

let isAdult = users.map((user)=>{
    if(user.age>=18){
        return{
            name:user.name,
            age:user.age,
            gender:user.gender,
            location:user.location,
            adult:'true',
        }
    }else{
        return{
            name:user.name,
            age:user.age,
            gender:user.gender,
            adult:'false',
        }
    }
    
})
// console.log(isAdult);

let adultUsers = isAdult.filter((user)=>{
    return user.adult=='true';
})

// console.log(adultUsers)


let getFullName = users.map((user)=>{
    return user.name + ": " + user.location;
})
// console.log(getFullName);

let userNames = users.map((user)=>{
    return user.name;
})
// console.log(userNames);


// Part 2

// chaining
let femaleUsers = users.filter((user)=>{
    return user.gender=='Female';
}).map((user)=>{
    return user.name + ": "+user.gender;
});

// console.log(femaleUsers);

// Part 3
// Movie Data array Manipulation
var movies = [
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3 },
    { title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2 },
    { title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0 },
    { title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9 },
    { title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8 },
    { title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7 },
    { title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', year: 2001, rating: 8.8 },
    { title: 'Schindler\'s List', genre: 'Biography', year: 1993, rating: 8.9 },
    { title: 'Fight Club', genre: 'Drama', year: 1999, rating: 8.8 },
];

let actionMovies = movies.filter((movie)=>{
    return movie.genre == 'Action';
})
// console.log(actionMovies);


let movieTitle = actionMovies.map((movie)=>{
    return movie.title;
})
// console.log(movieTitle);


// Part 5: Integration And Output
let combinedResult={
    AdultUsers : getFullName ,
    FemaleUsers : femaleUsers,
    ActionMovies : movieTitle,
}

console.log(combinedResult);