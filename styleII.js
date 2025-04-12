
function buscarDados() {
    const nome = document.getElementById('nome').value;
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    if (!nome) {
        alert("Digite um nome.");
        return;
    }


    fetch(`https://api.agify.io?name=${nome}`)
    .then(res => res.json())
    .then(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<strong>Idade:</strong> A média de idade para o nome "${data.name}" é ${data.age} anos.`;
        resultados.appendChild(card);
    })
    .catch(() => {
        const erro = document.createElement('div');
        erro.className = 'card';
        erro.innerText = 'Erro ao buscar a idade.';
        resultados.appendChild(erro);
    });

    fetch(`https://api.genderize.io?name=${nome}`)
    .then(res => res.json())
    .then(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<strong>Gênero:</strong> O nome "${data.name}" é mais associado ao gênero ${data.gender || "desconhecido"}.`;
        resultados.appendChild(card);
    })
    .catch(() => {
        const erro = document.createElement('div');
        erro.className = 'card';
        erro.innerText = 'Erro ao buscar o gênero.';
        resultados.appendChild(erro);
    });
}