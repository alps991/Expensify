const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [drink, , medPrice, largePrice] = item;

console.log(`The medium ${drink} costs ${medPrice}`);