let inputText=document.querySelector("textarea");
let translateBtn=document.querySelector("#translate-btn");
let output=document.querySelector("#output");
// console.log(output);
var serverURL="https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function translate(){
    // console.log(text.value);
    // output.innerHTML=text.value;
    var txtInput=inputText.value
    fetch(getTranslationURL(txtInput))
    .then(res=>res.json())
    .then(data=>output.innerHTML=data.contents.translated)
    .catch(err=>{
        output.innerHTML="Oops! Something went wrong :(";
        console.log("Error:"+err);
        })

}
translateBtn.addEventListener("click",translate);
