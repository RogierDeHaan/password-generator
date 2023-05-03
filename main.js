const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// getting html elements
const generate = document.querySelector("#generate")
const setPasswordLength = document.querySelector("#set-length")
const generatedPassword1 = document.querySelector("#generated-password1")
const generatedPassword2 = document.querySelector("#generated-password2")
const copyPassword1 = document.querySelector("#copy-password1")
const copyPassword2 = document.querySelector("#copy-password2")

//make random password
function randomPassword(){    
    let randomWord = []
    for (i = 0; i < setPasswordLength.value; i++){
        randomWord.push(characters[(Math.floor(Math.random()* characters.length))])
    }
    return randomWord.join("")
}

// put random passord inside html textfields
generate.addEventListener("click", ()=> {
    generatedPassword1.value = randomPassword()
    generatedPassword2.value = randomPassword()
})

copyPassword1.addEventListener('click', () => {
	let text = generatedPassword1.value;	
	navigator.clipboard.writeText(`${text}`);

	alert(`${text} copied to clipboard!`);
});
copyPassword2.addEventListener('click', () => {
	let text = generatedPassword2.value;	
	navigator.clipboard.writeText(`${text}`);

	alert(`${text} copied to clipboard!`);
});

