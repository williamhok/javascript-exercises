const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedStr = str
        .toLowerCase()
        .split('')
        .filter(char => alphanumerical.includes(char))
        .join('')

    const reverse = cleanedStr
        .split('')
        .reverse()
        .join('')

    return cleanedStr === reverse
};

// Do not edit below this line
module.exports = palindromes;
