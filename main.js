
//to count. The function should return the number of times the specified character appears in the string.

const  countChar = (str, char) =>{
   str = str.toLowerCase()
    char = char.toLowerCase()
//    word = str.split("").reduce((accum, curChar) => {
//     if (curChar === char) {
//         accum ++ ;
//     }
//     return accum
//    }, 0)
//    return word;
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        count ++;
    }
    
}
return count;

   
}

console.log(countChar("MissIssippi", "I")); // Output: 4
//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).