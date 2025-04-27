function capWord(word){
    if(word.length === 0) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
} console.log(capWord("shawal"))
