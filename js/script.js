
function Salvar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const lista = document.getElementById('lista')

    const user = {
        nome: nome,
        idade: idade
    }

    localStorage.setItem('user', JSON.stringify(user))


    const li = document.createElement("li");
    li.textContent = `nome: ${nome} idade: ${idade}`;
    lista.appendChild(li);
    document.getElementById("nome").value='';
    document.getElementById("idade").value='';
}