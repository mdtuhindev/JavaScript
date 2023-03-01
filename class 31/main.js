function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1,6))

const students = ["Erfat", "Nayeem", "Sabbir", "Nafis", "Arafat"];

console.log(students.sort());