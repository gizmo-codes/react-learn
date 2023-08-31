
// Four examples of writing functions in React
// The last one is the most concise and modern approach.
// The third one is best when having multiple lines of code in the function. (?)

function Hello(firstname, lastname) {
   console.log(`Hello ${firstname} ${lastname}`);
}
Hello('John', 'Doe')

const Hello2 = function (firstname, lastname) {
    console.log(`Hello ${firstname} ${lastname}`);
}
Hello2('Jane', 'Doe')

const Hello3 = (firstname, lastname) => {
    console.log(`Hello ${firstname} ${lastname}`);
}
Hello3('Jimmy', 'Doe')

const Hello4 = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`);
Hello4('Jason', 'Doe')

export { Hello, Hello2, Hello3, Hello4 }

// My fucntion calls are calling properly, but then afterwards...
// These fucntions are being called twice at a time once each, with no invokation on my end why?