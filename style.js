function buscarIdade() {
    const nome = document.getElementById('nome').value;
    fetch(`https://api.agify.io?name=${nome}`)
    .then(r => r.json())
    .then(d => {
        document.getElementById('resultado1').innerText = `O nome ${d.name} tem em média ${d.age} anos.`;
    });
    fetch(`https://api.genderize.io?name=${nome}`)
    .then(r => r.json())
    .then(d => {
        document.getElementById('resultado2').innerText = `O nome ${d.name} tem um genero ${d.gender}`
    });

    fetch(`https://api.nationalize.io?name=${nome}`)
    .then(r => r.json())
    .then(d => {
        const paises = d.country.map(p => p.country_id).join(', ');
        document.getElementById('resultado3').innerText = `O nome ${d.name} está mais associado aos países: ${paises}`;

        document.getElementById('item1').style.display = 'list-item';
        document.getElementById('item2').style.display = 'list-item';
        document.getElementById('item3').style.display = 'list-item';
    })
}