const Form1 = document.getElementById("Form1");
const Form2 = document.getElementById("Form2");
const Form3 = document.getElementById("Form3");

const Next1 = document.getElementById("Next1");
const Next2 = document.getElementById("Next2");
const Back1 = document.getElementById("Back1");
const Back2 = document.getElementById("Back2");

const Step1 = document.getElementById("Step1");
const Step2 = document.getElementById("Step2");
const Step3 = document.getElementById("Step3");

const progress = document.getElementById("progress");

let currColor = Step1.style.color;
let compcolor = "#AFE1AF";

Step2.style.color = Step3.style.color = "transparent";

Next1.onclick = () => {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
    Step1.style.color = compcolor;
    Step2.style.color = currColor;
    Step3.style.color = "transparent";
};

Back1.onclick = () => {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
    Step1.style.color = currColor;
    Step2.style.color = Step3.style.color = "transparent";
};

Next2.onclick = () => {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
    Step1.style.color = Step2.style.color = compcolor;
    Step3.style.color = currColor;
};

Back2.onclick = () => {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";
    Step1.style.color = compcolor;
    Step2.style.color = currColor;
    Step3.style.color = "transparent";
};