const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"];

function getRandom(arr) {
    let result = [];
    for (let i = 0; i < 13; i++) {
        let random = Math.random(Math.floor(arr.length + 1))
        result.push(random)
    }
    return result;
}
console.log("pie")
function generatePassword(arr) {
    let randomPassword = getRandom(arr);
    let result = randomPassword.join()
    return result;

}

console.log(generatePassword(characters))



