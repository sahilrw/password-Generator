const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passLength = 15
let passwordEl = document.getElementById("password-El") 
let passwordElOne = document.getElementById("password-ElOne")
let generatedPass = ""
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length) 
    return characters[randomChar]
}
function generateRandomPass(){
    let generatedPass = ""
    for (let i = 0; i < passLength; i++ ){
        generatedPass += getRandomCharacter()
    }
    passwordEl.innerText = generatedPass 
    return generatedPass
}
generateRandomPass()
