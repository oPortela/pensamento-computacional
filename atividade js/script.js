document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var matricula = parseInt(document.getElementById('matricula').value)
    var nome = document.getElementById('name').value
    var opcaoMateria = document.getElementById('imateria');
    var materia = opcaoMateria.options[opcaoMateria.selectedIndex].text;
    var nota1 = parseInt(document.getElementById('nota1').value)
    var nota2 = parseInt(document.getElementById('nota2').value)
    var nota3 = parseInt(document.getElementById('nota3').value)

    var media = Math.round((nota1 + nota2 + nota3)/ 3)

    var resultado = document.getElementById('resultado')
    var mensagem = document.getElementById('mensagem')

    if (media >= 60) {
        var status = 'Aprovado'
    } else{
        var status = 'Reprovado'
    }

    mensagem.innerText = 
        `Matricula: ${matricula} 
        Nome completo: ${nome}
        Materia: ${materia}
        Média: ${media}
        Status: ${status}`;

    /*if (media >= 60) {
        mensagem.innerText = 
        `Matricula: ${matricula} 
        Nome completo: ${nome}
        Materia: 
        Média: ${media}
        Status: ${status}`;
    } else {
        mensagem.innerText = `Infelizmente ${nome} você está reprovado! Sua média foi de ${media}.`;
    }*/

    resultado.style.display = 'block';
})