let perguntas = [
    {
        identificador: "sabe-ligar-pc",
        pergunta: "Você sabe ligar o computador?",
        respostas: [
            {
                respostaPossivel: "sim"
            },
            {
                respostaPossivel: "nao",
                redireciona: "precisa-mais-conhecimento"
            }
        ]
    },
    {
        identificador: "liga-ou-da-tela-azul",
        pergunta: "Ele liga normalmente e dá tela azul ou reinicia inesperadamente?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "cabo-de-video"
            },
            {
                respostaPossivel: "nao",
                redireciona: "testou-placa-video"
            }
        ]
    },
    {
        identificador: "verifica-pc-liga",
        pergunta: "O computador liga ou dá algum sinal que está ligado?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "fonte",
                redireciona: "testar-botao-power"
            },
            {
                respostaPossivel: "nao",
                diagnostico: "cabo-alimentacao",
                redireciona: "verificar-pc-liga"
            },
            {
                respostaPossivel: "não tem certeza",
                redireciona: "sabe-ligar-pc"
            }
        ]
    },
    {
        identificador: "testou-placa-video",
        pergunta: "Você testou a placa de vídeo separadamente e ela apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "placa-de-video"
            },
            {
                respostaPossivel: "nao",
                redireciona: "testou-processador"
            }
        ]
    },
    {
        identificador: "testou-processador",
        pergunta: "Você verificou o processador separadamente e ele apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "processador"
            },
            {
                respostaPossivel: "nao",
                redireciona: "verificou-cabo-video"
            }
        ]
    },
    {
        identificador: "verificou-cabo-video",
        pergunta: "Você verificou o cabo de vídeo (HDMI ou flat) separadamente e ele apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "cabo-de-video"
            },
            {
                respostaPossivel: "nao",
                redireciona: "liga-ou-da-tela-azul"
            }
        ]
    },
    {
        identificador: "testar-botao-power",
        pergunta: "Após testar o botão power separadamente, você identificou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "botao-power"
            },
            {
                respostaPossivel: "nao",
                redireciona: "testa-cabo-alimentacao"
            }
        ]
    },
    {
        identificador: "testa-cabo-alimentacao",
        pergunta: "Você testou o cabo de alimentação e apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "cabo-de-alimentacao"
            },
            {
                respostaPossivel: "nao",
                redireciona: "testando-fonte-separada"
            }
        ]
    },
    {
        identificador: "testando-fonte-separada",
        pergunta: "Após testar a fonte separadamente, ela apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "sim",
                diagnostico: "fonte"
            },
            {
                respostaPossivel: "nao",
                redireciona: "testa-cabo-alimentacao"
            }
        ]
    },
    {
        identificador: "precisa-mais-conhecimento",
        pergunta: "Precisa ser uma pessoa com mais conhecimento para realizar o teste."
    }
];

