const username = document.getElementById('username');
const userTopic = document.getElementById('topic');
const userTopicTitle = document.getElementById('topic');
const saveUserBtn = document.getElementById('saveUserBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');

username.addEventListener('keyup', () => {
    saveUserBtn.disabled = !username.value;
});

/*LOAD INFOS*/
let infos = [
    {
        "id": 0,
        "refName": "Banco de Dados não Relacional",
        "refDescricao": "Banco de dados não relacional (NoSQL) é um tipo de banco de dados que difere dos tradicionais bancos de dados relacionais, pois não utilizam o modelo de dados tabular comum aos bancos relacionais. Em vez disso, os bancos de dados NoSQL usam uma variedade de modelos de dados, como documentos, grafos, colunas ou chave-valor, que são adequados para diferentes tipos de dados e casos de uso. Os bancos de dados NoSQL geralmente são escaláveis e de alta disponibilidade, permitindo que grandes quantidades de dados sejam armazenadas e acessadas de forma rápida e eficiente.",
        "linkUm": "<a href='https://www.youtube.com/watch?v=1B64oqE8PLs' target='_blank'><img src='./imgs/bd_1.jpg' alt=''></a>",
        "linkDois": "<a href='https://www.youtube.com/watch?v=pgPqKd5HYaM' target='_blank'><img src='./imgs/bd_2.jpg' alt=''></a>",
        "linkTres": "<a href='https://www.youtube.com/watch?v=DnfcIuqa0xo' target='_blank'><img src='./imgs/bd_3.jpg' alt=''></a>",
        "refUm": "'Bancos de Dados NoSQL' por Fábio H. R. Monteiro.",
        "refDois": "'NoSQL Essencial' por Pramod J. Sadalage.",
        "refTres": "'Bancos de Dados Não-Relacionais: Introdução ao MongoDB' por Luciano Alves e Renato Souza.",
        "refQuatro": "'NoSQL - Guia Prático para Banco de Dados Não-Relacionais' por Ricardo Ferreira."
    },
    {
        "id": 1,
        "refName": "Álgebra Linear",
        "refDescricao": "Álgebra Linear é uma área da matemática que se preocupa com o estudo de vetores, matrizes e sistemas de equações lineares. Envolve a manipulação e resolução de equações lineares em um espaço vetorial, bem como a análise de transformações lineares e suas propriedades. Esses conceitos são amplamente aplicados em áreas como engenharia, física, ciência da computação, economia e estatística, tornando a Álgebra Linear uma ferramenta importante para modelar e resolver problemas do mundo real.",
        "linkUm": "<a href='https://www.youtube.com/watch?v=TP2o31y5_GU' target='_blank'><img src='./imgs/al_1.jpg' alt=''></a>",
        "linkDois": "<a href='https://www.youtube.com/watch?v=S9zlJFg7pZY&list=PLa_2246N48_raWBtO-QGc3Xgdd4AXIaib' target='_blank'><img src='./imgs/al_2.jpg' alt=''></a>",
        "linkTres": "<a href='https://www.youtube.com/watch?v=GS_ZH1CQ0SY&list=PLmtT_GZAQdt-9QNWJw1vzJldnuyGmdidq' target='_blank'><img src='./imgs/al_3.jpg' alt=''></a>",
        "refUm": "'Álgebra Linear com Aplicações' por Howard Anton e Chris Rorres.",
        "refDois": "'Álgebra Linear e suas Aplicações' por Gilbert Strang.",
        "refTres": "'Linear Algebra Done Right' por Sheldon Axler",
        "refQuatro": "'Introdução à Álgebra Linear' por Fernando Gouvêa."
    },
    {
        "id": 2,
        "refName": "Técnicas de Programação",
        "refDescricao": "Técnicas de programação em Python referem-se ao conjunto de práticas, metodologias e abordagens utilizadas pelos programadores ao escrever código em Python para desenvolver aplicações de software. Isso inclui técnicas para escrever código legível e manutenível, como a utilização de comentários, documentação, convenções de nomenclatura e padrões de projeto. Além disso, as técnicas de programação em Python também envolvem a utilização de bibliotecas e frameworks específicos para tarefas comuns, como manipulação de dados, processamento de texto, desenvolvimento web e machine learning, entre outras. O conhecimento e aplicação de técnicas de programação em Python são essenciais para escrever código eficiente e de alta qualidade.",
        "linkUm": "<a href='https://www.youtube.com/watch?v=DXmCU7v9glM' target='_blank'><img src='./imgs/tp_1.jpg' alt=''></a>",
        "linkDois": "<a href='https://www.youtube.com/watch?v=ZtMzB5CoekE' target='_blank'><img src='./imgs/tp_2.jpg' alt=''></a>",
        "linkTres": "<a href='https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0' target='_blank'><img src='./imgs/tp_3.jpg' alt=''></a>",
        "refUm": "'Padrões de Projeto: Soluções Reutilizáveis de Software Orientado a Objetos' de Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides.",
        "refDois": "'Código Limpo: Habilidades Práticas do Agile Software' de Robert C. Martin.",
        "refTres": "'Aprenda Python 3 do Jeito Certo' por Zed A. Shaw.",
        "refQuatro": "'Learning Python, 5th Edition' de Mark Lutz."
    }
]

const selectElem = document.getElementById('topic');

window.addEventListener('load', (event) => {
    const index = selectElem.selectedIndex;

    document.getElementById("topicInfos").innerHTML = `
            <section class="about-test">
            <h1 id="nameTest">${infos[index].refName}</h1>
            <p id="descriptionQuestion">${infos[index].refDescricao}</p>
        </section>

        <section class="videos-examples">
            <div class="card-video">${infos[index].linkUm}</div>
            <div class="card-video">${infos[index].linkDois}</div>
            <div class="card-video">${infos[index].linkTres}</div>
        </section>

        <section id="Topic" class="indications">
            <h1 id="titleIndications">Livros indicados</h1>
            <ul>
                <li><hr>${infos[index].refUm}</li>
                <li><hr>${infos[index].refDois}</li>
                <li><hr>${infos[index].refTres}</li>
                <li><hr>${infos[index].refQuatro}<hr></li>
            </ul>
        </section>
     `
});

selectElem.addEventListener("change", () => {
    
    const index = selectElem.selectedIndex;

    document.getElementById("topicInfos").innerHTML = `
    <section class="about-test">
            <h1 id="nameTest">${infos[index].refName}</h1>
            <p id="descriptionQuestion">${infos[index].refDescricao}</p>
        </section>

        <section class="videos-examples">
            <div class="card-video">${infos[index].linkUm}</div>
            <div class="card-video">${infos[index].linkDois}</div>
            <div class="card-video">${infos[index].linkTres}</div>
        </section>

        <section id="Topic" class="indications">
            <h1 id="titleIndications">Livros indicados</h1>
            <ul>
                <li><hr>${infos[index].refUm}</li>
                <li><hr>${infos[index].refDois}</li>
                <li><hr>${infos[index].refTres}</li>
                <li><hr>${infos[index].refQuatro}<hr></li>
            </ul>
        </section>
     `
});
/*END LOAD INFOS*/

function saveTopicName() {
    const userTopic = document.getElementById('topic');
};

// function getSelectText(txt) {
//     var topicText = txt.options[txt.selectedIndex].text; 
// }

saveUserName = (e) => {
    e.preventDefault();

    const name = username.value;
    const utopic = userTopic.value;
    const title = userTopicTitle.options[topic.selectedIndex].text;

    localStorage.setItem('name', name);
    localStorage.setItem('utopic', utopic);
    localStorage.setItem('title', title);

    window.location.assign('./pages/game.html');

};
