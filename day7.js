//activity 1

const books={
    tittle:"xyz",
    author:"abc",
    year:"dd/mm/yy",
    boookFunction: function(){
        return `${books.tittle} ${books.author}`
    },
    yearUpdate:function(){
        year:"mm/dd/yyyy"
        return `${books.year}`
    },
    thisKeyword:function(){
        return `${this.author} and ${this.tittle}`
    }
}
console.log(books)

console.log(books.tittle);
console.log(books.author);

//activity 2
console.log(books.boookFunction());
console.log(books.yearUpdate());

//activity 3
const library=[
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
    }
]

console.log(library);
library.map((library)=>{console.log(`${library.author} and ${library.title}`);})

//activity 4
console.log(books.thisKeyword());

//activity 5

for(const x in books){
    console.log(`${x}: ${books[x]}`);
}


const keys = Object.keys(books);
keys.forEach(key=>{
    console.log(`${key} : ${books[key]}`);
})