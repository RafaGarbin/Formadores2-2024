const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");


const perguntas =[
    {
        enunciado:"Um vírus está deixando muitos doentes e a organização de saude indica que para minimizar o contágio seja necessário diminuir o contato entre as pessoas. O que você faz ao ouvir estas recomendaçãoes?"
        alternativas:[
            " Evito ao máximo contato com pessoas, me restringindo ao contato somente com os familiares que moram em minha casa.",
            " Acredito que isso não é nada sério afinal não tem nada comprovado e me reuno com diversas pessoas em local público"
        ] 
    },
    {
        enunciado: "Assim que o primeiro caso desse vírus é detectado em seu estado, a organização de saúde recomenda o uso de máscara para minimizar o contágio. O que você faria neste caso?",
        alternativas: [
            "Uso máscara sempre que tenha mais alguem comigo no mesmo ambiente para evitar contágio.", 
            "Continuaria me reunindo sem preocupações pois só estou com pessoas que confio e conheço."
        ]
    }
];
caixaPerguntas.textContent = "Eu consigo voarrrrr"