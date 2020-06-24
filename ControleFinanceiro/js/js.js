function cadastrar() {
    if (document.getElementById("usuario").value === "") {
        alert("Preencha o campo usuario");
    } else if (document.getElementById("senha").value === "") {
        alert("Preencha o campo senha");
    } else if (document.getElementById("nome").value === "") {
        alert("Preencha o campo nome");
    } else if (document.getElementById("endereco").value === "") {
        alert("Preencha o campo endereco");
    } else if (document.getElementById("telefone").value === "") {
        alert("Preencha o campo telefone");
    } else if (document.getElementById("email").value === "") {
        alert("Preencha o campo email");
    } else if (document.getElementById("cidade").value === "") {
        alert("Preencha o campo cidade");
    } else {
        alert("Cadastro efetuado com sucesso");
        localStorage.setItem("usuario", document.getElementById("usuario").value);
        localStorage.setItem("senha", document.getElementById('senha').value);
        localStorage.setItem("nome", document.getElementById('nome').value);
        localStorage.setItem("endereco", document.getElementById('endereco').value);
        localStorage.setItem("telefone", document.getElementById('telefone').value);
        localStorage.setItem("email", document.getElementById('email').value);
        localStorage.setItem("cidade", document.getElementById('cidade').value);
        window.location.href = "index.html";
    }
}

function login() {
    if(document.getElementById("login").value === localStorage.getItem("usuario") && document.getElementById("password").value === localStorage.getItem("senha")){
        window.location.href = "usuario.html";
    } else{
        alert("Cadastro não encontrado");
    }
}


const Alunos = {
    nome: 'Thiago',
    sobrenome: 'Silvério',
    email: '11800038@aluno.cotemig.com.br',

    // metodos
    mostrardados(){
        console.log(`${this.nome} ${this.sobrenome} - ${this.email}`);
    }
}

Alunos.mostrardados();

function calculos() {
    debugger;
    let ganhos = document.getElementById("ganhos").value;
    let gastos = document.getElementById("gastos").value;

    let saldo = ganhos - gastos;
    localStorage.setItem("saldo");
    document.getElementById("saldo").innerHTML = saldo;
}