document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var matricula = parseInt(document.getElementById('matricula').value)
    var nome = document.getElementById('name').value
    var materia = document.getElementById('materia').value
    var nota1 = parseInt(document.getElementById('nota1').value)
    var nota2 = parseInt(document.getElementById('nota2').value)
    var nota3 = parseInt(document.getElementById('nota3').value)

    var media = Math.round((nota1 + nota2 + nota3)/ 3)

    var resultado = document.getElementById('resultado')
    var mensagem = document.getElementById('mensagem')

    if (media >= 60) {
        mensagem.innerText = `Matricula: ${matricula} 
        ${nome}, você está aprovado! Sua média é ${media}.`;
    } else {
        mensagem.innerText = `Infelizmente ${nome} você está reprovado! Sua média foi de ${media}.`;
    }

    resultado.style.display = 'block';
})

console.log(nome)
console.log(media)