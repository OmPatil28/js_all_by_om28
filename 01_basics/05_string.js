const name = "om"
const repocount = 20;

// console.log(name + repocount + "// ");


console.log(`my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("ompatil-op");

// console.log(gamename [0]);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(1));

const newstring = gamename.substring(0, 5);
console.log(newstring);


const anotherstring = gamename.slice(-9, 5);
console.log(anotherstring);

const newstringone = "     om        "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://ompatil.com/om%20patil"
console.log(url.replace('%20', '-'));

console.log(url.includes('simon'));
