let elementosForm = document.querySelectorAll("input");
let verifier = document.querySelector("#validar");
var form = document.querySelector("#Form2");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});

const validateForm = () => {
    let valid = true;
    Array.from(elementosForm).some((element) => {
    if(element.value.length === 0){
        register(null, element);
        verifier.style.visibility = "visible";
        verifier.innerHTML = "Campos obrigatórios não registrados.";
        valid = false;
    }})
    if(valid) success();
}

let register = (event = null, element = null) => {
    const target = event? event.target : element; 
    if (target.value.trim().length === 0) fail(target);
    else cleanParagraph(target);
};

let fail = (element) => {
    var elementoP = element.parentNode.children[2];
    elementoP.innerHTML = "*Campo Obrigatório*";
    elementoP.style.visibility = "visible";
};

let success = () => {
    verifier.style.visibility = "visible";
    verifier.innerHTML = `<p class="success">Sucesso!</p>`;
    form.reset();
    reloadPage();
};

let cleanParagraph = (element) => {
    var elementP = element.parentNode.children[2];
    element.innerHTML = "";
    elementP.style.visibility = "hidden";
    verifier.style.visibility = "hidden";
    verifier.innerHTML = "";
};

reloadPage = () => {
    setTimeout(() => {
    window.location.reload();
}, 3000);
};




const cpf = document.querySelector("#document");

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if (cpflength === 3 || cpflength === 7) {
        cpf.value += "."
    }else if (cpflength === 11) {
        cpf.value += "-"
    }
})

const tel = document.querySelector("#phone");

tel.addEventListener('keypress', () => {
    let tellength = tel.value.length

    if (tellength === 0) {
        tel.value += "("
    }else if (tellength === 3) {
        tel.value += ")"
    }else if (tellength === 9) {
        tel.value += "-"
    }
})