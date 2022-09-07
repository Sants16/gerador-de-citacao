const botaoGerar = document.querySelector('#gerador')
botaoGerar.addEventListener('click', () => gerar())

const gerar = () => {
    let citacoes = {
        "- Machado de Assis": 'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.',
        "- Antoine de Saint-Exupéry": 'Um monte de pedras deixa de ser um monte de pedras no momento em que um único homem o contempla, nascendo dentro dele a imagem de uma catedral.',
        "- Vinicius de Moraes": 'O uísque é o melhor amigo do homem: é um cachorro engarrafado.',
        "- Mario Quintana": 'Tão bom morrer de amor! E continuar vivendo...',
        "- Aristóteles": 'Sócrates é meu amigo, mas sou mais amigo da verdade.'
    }

    let autores = Object.keys(citacoes) //assim pegamos só as keys do nosso objeto, que nosso caso é o 'citacoes'
    let autor = autores[Math.floor(Math.random() * autores.length)] //ira selecionar um autor aleatorio dentro da lista de autores que já temos
    let citacao = citacoes[autor] //seleciona uma citacao do object de citacoes com base no autor seleciona aleatoriamente

    document.querySelector('#citacao').textContent = citacao //muda o texto da tag p do html para a 'citacao'
    document. querySelector('#autor').textContent = autor //muda o texto da tag h3 do html para o 'autor'
}