const passwordEl = document.getElementById("password")
const copyBtn = document.getElementById("copy")
const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")

const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

const generateBtn = document.getElementById("generate")
const strengthText = document.getElementById("strengthText")

lengthSlider.oninput = () => {
lengthValue.textContent = lengthSlider.value
}

function generatePassword(){

let chars = ""

if(uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz"
if(numbers.checked) chars += "0123456789"
if(symbols.checked) chars += "!@#$%^&*()_+[]{}"

let password = ""

for(let i=0;i<lengthSlider.value;i++){
const randomIndex = Math.floor(Math.random()*chars.length)
password += chars[randomIndex]
}

passwordEl.value = password

checkStrength(password)

}

function checkStrength(password){

let strength = "Weak"

if(password.length > 12) strength = "Medium"
if(password.length > 18) strength = "Strong"

strengthText.textContent = strength

}

generateBtn.onclick = generatePassword

copyBtn.onclick = () => {
navigator.clipboard.writeText(passwordEl.value)
copyBtn.textContent = "Copied!"
setTimeout(()=>copyBtn.textContent="Copy",1500)
}