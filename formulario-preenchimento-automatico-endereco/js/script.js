document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');

    // Função para limpar os campos de endereço
    const limparCampos = () => {
        ruaInput.value = '';
        bairroInput.value = '';
        cidadeInput.value = '';
        estadoInput.value = '';
    };

    // Função para preencher os campos com os dados da API
    const preencherCampos = (dados) => {
        ruaInput.value = dados.logradouro || '';
        bairroInput.value = dados.bairro || '';
        cidadeInput.value = dados.localidade || '';
        estadoInput.value = dados.uf || '';
    };

    // Adiciona o evento de input para o campo de CEP
    cepInput.addEventListener('input', (evento) => {
        let cep = evento.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        // Limita o CEP a 8 dígitos
        if (cep.length > 8) {
            cep = cep.substring(0, 8);
            evento.target.value = cep;
        }

        // Formata o CEP com o hífen
        if (cep.length > 5) {
            evento.target.value = `${cep.substring(0, 5)}-${cep.substring(5)}`;
        } else {
            evento.target.value = cep;
        }

        // Se o CEP tiver 8 dígitos válidos, faz a busca
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(dados => {
                    if (!dados.erro) {
                        preencherCampos(dados);
                    } else {
                        limparCampos();
                        alert('CEP não encontrado.');
                    }
                })
                .catch(erro => {
                    limparCampos();
                    alert('Erro ao buscar o CEP.');
                    console.error('Erro:', erro);
                });
        } else {
            limparCampos();
        }
    });
});
