function removeVowels(str) {
    if (!str && str === "") {
        return '';
    }
    let char = str.charAt(0);
    if (str.length > 0 && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' )) {
        return "" + removeVowels(str.substring(1));
    }
     return char + removeVowels(str.substring(1));
 }
 
 console.log(removeVowels('horse'));
 console.log(removeVowels('robot'));
 console.log(removeVowels(''));
 console.log(removeVowels('bcd'));
