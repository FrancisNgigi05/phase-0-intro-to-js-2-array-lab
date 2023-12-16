// Write your solution here!
let cats;
cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop()
    console.log(cats);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

function appendCat(name) {
    let newCatArray = [...cats, name];
    return (newCatArray);
}

function prependCat(name) {
    let newCatArray = [name, ...cats];
    return (newCatArray);
}

function removeLastCat() {
    let newCatArray = cats.slice(0, cats.length - 1);
    return (newCatArray);
}

function removeFirstCat() {
    let newCatArray = cats.slice(1);
    return (newCatArray);
}
