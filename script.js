// const tempC = document.querySelector('.temperature');

const message = prompt('Enter temperature for conversion');

let celsius = Number(message);

let cToFahr = celsius * (9/5) + 32;

console.log(`${celsius}\xB0C is converted to ${cToFahr}\xB0F`);
alert(celsius + '\xB0C is converted to ' + cToFahr + '\xB0F');
document.write(`${celsius}\xB0C is converted to ${cToFahr}\xB0F`)

