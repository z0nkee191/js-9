// let a = 1;
// const array1 = ['Mango', 'Poly', 'Ajax'];
// const logItems = (arrayFunc) => {
//     for (let i = 0; i < arrayFunc.length; i++) {
//         console.log(`${a} - ${arrayFunc[i]}`);
//         a++;
//     }
//     return;
// }
// console.log(logItems(array1));

// function calculateEngravingPrice(message, pricePerWord) {
//     const trimmedMessage = message.trim();
//     if (trimmedMessage === '') {
//         return 0;
//     }
//     let spaceCount = 0;
//     for (let i = 0; i < trimmedMessage.length; i++) {
//         if (trimmedMessage[i] === ' ') {
//             spaceCount++;
//         }
//     }
//     const wordCount = spaceCount + 1;
//     const totalPrice = wordCount * pricePerWord;
//     return totalPrice;
// }

// const userMessage = prompt(`enter message`);
// const userPricePerWord = prompt(`enter price per word`);
// const funcReturn = calculateEngravingPrice(userMessage, userPricePerWord);
// console.log(funcReturn);