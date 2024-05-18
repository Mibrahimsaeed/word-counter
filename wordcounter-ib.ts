#!/usr/bin/env node
function count(paragraph:string, usrinp?: any) {
    
    const WithoutSpaces = paragraph.replace(/\s/g, '');
    const characterCount = WithoutSpaces.length;
    const wordCount = WithoutSpaces.split(/\s+/).filter(word => word !== '').length;
    return { characters: characterCount, words: wordCount };
}
// const paragraph = "This is a sample paragraph. It contains several words and spaces.";
// const counts = count(paragraph);
// console.log("Character count:", counts.characters);
// console.log("Word count:", counts.words);
import inquirer from'inquirer';
const wordcounter=await inquirer.prompt([{
    "type":"input",
    "name":"usrinp",
    "message":"Enter a paragraph"
}])
const counts=count(wordcounter.usrinp);
console.log("Your counts are ", counts)

