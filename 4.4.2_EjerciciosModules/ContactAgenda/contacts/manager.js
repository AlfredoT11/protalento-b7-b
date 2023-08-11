const { capitilize } = require('../utilities/strings');
const { randomNumber } = require('../utilities/numbers');
const { names, numbers } = require('./data');

function getRandomContact(){
    const index = randomNumber() % names.length;
    const randomName = capitilize(names[index]);
    const randomPhoneNumber = numbers[index];
    return `${randomName}: ${randomPhoneNumber}`;
}

module.exports = getRandomContact;
/*module.exports = {
    getRandomContact,
}*/