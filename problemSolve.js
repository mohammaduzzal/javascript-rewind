const str = "The target attribute specifies where to open the linked document";

const result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log(result);

const sentence = "The target attribute specifies where to open the linked document";
const vowels ="aeiouAEIOU";
for(const letter of sentence){
    if(vowels.includes(letter)){
        // console.log(letter);
    }
}
const sentences = "The target attribute specifies where to open the linked document";
const vowel ="aeiouAEIOU";
let vowelCount = 0;
for(let i=0;i<sentences.length;i++){
    if(vowel.includes(sentences[i])){
        vowelCount++
    }
}
for(const char of sentences){
    if(vowel.includes(char)){
        vowelCount++
    }
}
// console.log(vowelCount);

const sentences1 = "The target attribute specifies where to open the linked document";
const vowel1 ="aeiouAEIOU";

let vowelArray = []
for(const char of sentences1){
    if(vowel1.includes(char)){
        vowelArray.push(char)
    }
}
// console.log(vowelArray);
const uniqueVowel = [...new Set(vowelArray)]
// console.log(uniqueVowel);

// -------------------------------------------------
let arr3 = ["t", "e", "s", "t"];
// console.log(arr3.slice(0,2));

// const numbers1 = [5, 12, 8, 25, 17, 30, 9, 42, 15, 21];
// const rev_arr = numbers1.reverse()
// console.log(rev_arr);

const numbers1 = [5, 12, 8, 25, 17, 30, 9, 42, 15, 21];
const rev_arr = []
// for(const num of numbers1){
//     rev_arr.unshift(num)
// }
// for(let i =0; i<numbers1.length;i++){
//     const num = numbers1[i]
//     rev_arr.unshift(num)
// }

for(let i = numbers1.length-1;i>=0;i--){
    const num = numbers1[i]
    rev_arr.push(num)
}


console.log(rev_arr);