function escalamento() {
    let sectionescala = document.querySelector('.hide-escalamento');
    let sectionremocao = document.querySelector('.hide-remocao');
    let areajogadores = document.querySelector('.info-jogadores')

    sectionescala.style.display = 'block';
    sectionremocao.style.display = 'none';
    areajogadores.style.display = 'block';
    

    let butaoesc = document.querySelector('.button-escala')

    butaoesc.addEventListener('click', function escala(ev) {
        // impede que o console carregue rapido e suma
        ev.preventDefault()

        let nomej = document.querySelector('#name').value
        let numj = document.querySelector('#number').value
        let posj = document.querySelector('#pos').value
        let nav = document.querySelector('.info-jogadores')
        let ul = document.querySelector('.lista-jogadores')
        let li = document.createElement('li')
        li.style.listStyleType = 'none'

        li.innerText = `Jogador ${nomej} N°(${numj}) ${posj}`
        // li.innerText = `${nomej} ${numj} ${posj}` 
        li.id = 'player-' + numj
        ul.appendChild(li)
        nav.appendChild(ul)

        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('pos').value = '';
    });
}

function remocao() {
    let sectionescala = document.querySelector('.hide-escalamento');
    let sectionremocao = document.querySelector('.hide-remocao');
    let areajogadores = document.querySelector('.info-jogadores')

    sectionescala.style.display = 'none';
    sectionremocao.style.display = 'block';
    areajogadores.style.display = 'block';

    let butaoremove = document.querySelector('#button-remocao')

    butaoremove.addEventListener('click', function remocao(){
        //nó pai
        let nopai = document.querySelector('.lista-jogadores')
        let numinput = document.querySelector('#num').value 
        filhotoremove = document.getElementById('player-' + numinput)
        
        let confirma = confirm(`Deseja realmente remover o jogador?`)

        if(confirma == true){
            nopai.removeChild(filhotoremove)
            alert(`Jogador removido com Sucesso!`)
        } 
        else if(confirma == false) {
            alert(`Cancelado`)
        } 
    });
}