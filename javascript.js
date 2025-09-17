const add_tarefa = document.getElementById('addTarefa');
const addbotao = document.getElementById('botaoAdicionar');
const ListaTarefas = document.getElementById('Lista');

// Função para adicionar uma nova tarefa
function adicionar_tarefa() {
    // Pega o valor do input e remove espaços em branco
    const taskText = add_tarefa.value.trim();

    // Verifica se o input não está vazio
    if (taskText !== '') {
        // Cria um novo item de lista (<li>)
        const listaItem = document.createElement('li');
        listaItem.textContent = taskText;

        // Adiciona um botão de remover
        const botaoremover = document.createElement('button');
        botaoremover.textContent = 'Remover';
        botaoremover.style.marginLeft = '10px';
        botaoremover.style.cursor = 'pointer';
        
        botaoremover.style.border = 'none';
        botaoremover.style.backgroundColor = '#7e002f';
        botaoremover.style.color = 'white';
        botaoremover.style.padding = '5px 10px';
        botaoremover.style.borderRadius = '4px';

        // Adiciona um evento de clique para remover a tarefa
        botaoremover.onclick = function() {
            ListaTarefas.removeChild(listaItem);
        };

        // Adiciona o botão ao item de lista
        listaItem.appendChild(botaoremover);

        // Adiciona o novo item à lista de tarefas
        ListaTarefas.appendChild(listaItem);

        // Limpa o input
        add_tarefa.value = '';
    }
}

// Adiciona um evento de clique ao botão de adicionar
addbotao.addEventListener('click', adicionar_tarefa);

// Adiciona a funcionalidade de adicionar a tarefa com a tecla "Enter"
add_tarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionar_tarefa();
    }
});