let a = 1;
const array1 = ['Mango', 'Poly', 'Ajax'];
const logItems = (arrayFunc) => {
    for (let i = 0; i < arrayFunc.length; i++) {
        console.log(`${a} - ${arrayFunc[i]}`);
        a++;
    }
}
logItems(array1);

const calculateEngravingPrice = (message, pricePerWord) => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
        return 0;
    }
    let spaceCount = 0;
    for (let i = 0; i < trimmedMessage.length; i++) {
        if (trimmedMessage[i] === ' ') {
            spaceCount++;
        }
    }
    const wordCount = spaceCount + 1;
    const totalPrice = wordCount * pricePerWord;
    return totalPrice;
}

const userMessage = prompt(`enter message`);
const userPricePerWord = Number(prompt(`enter price per word`));
const funcReturn = calculateEngravingPrice(userMessage, userPricePerWord);
console.log(funcReturn);


const userString = prompt(`enter something with the gap`);
const findLongestWord = (string) => {
    if (!string) {
        return "Ввод отменен";
    }
    const stringSplited = string.split(" ");
    let max = stringSplited[0].length; 
    let maxNotLength = stringSplited[0];
    for (let i = 1; i < stringSplited.length; i++) {
        if (stringSplited[i].length > max) {
            max = stringSplited[i].length;
            maxNotLength = stringSplited[i];
        }
    }
    console.log(maxNotLength);
    return max;
}
if (userString !== null) {
    console.log(findLongestWord(userString));
} else {
    console.log("enter canceled by user");
}


const userInfo = prompt(`enter something with 40 elements`);
const formatString = (string) => {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}
if (userInfo !== null) {
    console.log(formatString(userInfo));
} else {
    console.log("enter canceled");
}


const userStr = prompt(`enter something`);
if (userStr !== null) {
    const lowerUserStr = userStr.toLowerCase();
    const checkForSpam = (message) => {
        const userStrArray = message.split(" ");
        let check = false;
        for (let i = 0; i < userStrArray.length; i++) {
            if (userStrArray[i] === "spam" || userStrArray[i] === "sale") {
                check = true;
                break;
            }
        }
        return check;
    }
    console.log(checkForSpam(lowerUserStr));
} else {
    console.log("enter canceled");
}


const numbers = [];

while (true) {
    const input = prompt(`enter number`);
    if (input === null) {
        break;
    }
    const number = Number(input);
    
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert('будь ласка, введіть коректне число');
    }
}
if (numbers.length > 0) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    console.log(`загальна сума чисел дорівнює ${total}`);
} else {
    console.log(`масив порожній, немає чого сумувати`);
}


const logins = ['admin', '111', 'zonkee'];
const userLogin = prompt(`enter unique login`); 

function isLoginValid(login) {
    if (!login) return false;
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!login) return 'Відказано';
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            return 'Логін успішно доданий!'; 
        } else {
            return 'Такий логін уже використовується!';
        }
    } else {
        return 'Помилка! Логін повинен бути від 4 до 16 символів'; 
    }
}
console.log(addLogin(logins, userLogin));