
let startButton = document.querySelector(".buttonContainer");
startButton.addEventListener("click", next);

function next(){
    let radioInputs = document.querySelectorAll("input[name='radio']");
    if(radioInputs[0].checked) window.location.href = "html/questions.html?q=programmers";
    else if(radioInputs[1].checked) window.location.href = "html/questions.html?q=media"
}