function myFunction(text)
{
console.log("The Caption from speak is",capField.innerHTML)
var msg = new SpeechSynthesisUtterance( capField.innerHTML);
window.speechSynthesis.speak(msg)
}
