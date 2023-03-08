const username = document.getElementById('username');
const userTopic = document.getElementById('topic');
const userTopicTitle = document.getElementById('topic');
const saveUserBtn = document.getElementById('saveUserBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');

username.addEventListener('keyup', () => {
    saveUserBtn.disabled = !username.value;
});

function saveTopicName() {
    const userTopic = document.getElementById('topic');
};

/*LOAD INFOS*/
    let infos = [
        {
            "id": 0,
            "refName": "Banco de Dados não Relacional",
            "refDescricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet alias beatae, corporis minima asperiores, earum sint error sit quaerat voluptatibus molestias suscipit impedit fugiat, illo temporibus consequuntur neque esse.",
            "linkUm": "<a href='#'><img src='./img/al_1.jpg' alt=''></a>",
            "linkDois": "<a href='#'><img src='./img/al_2.jpg' alt=''></a>",
            "linkTres": "<a href='#'><img src='./img/al_3.jpg' alt=''></a>",
            "refUm": "Referência A",
            "refDois": "Referência B",
            "refTres": "Referência C",
            "refQuatro": "Referência D"
        },
        {
            "id": 1,
            "refName": "Álgebra Linear",
            "refDescricao": " A Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet alias beatae, corporis minima asperiores, earum sint error sit quaerat voluptatibus molestias suscipit impedit fugiat, illo temporibus consequuntur neque esse.",
            "linkUm": "<a href='#'><img src='./img/al_1.jpg' alt=''></a>",
            "linkDois": "<a href='#'><img src='./img/al_2.jpg' alt=''></a>",
            "linkTres": "<a href='#'><img src='./img/al_3.jpg' alt=''></a>",
            "refUm": "Referência A",
            "refDois": "Referência B",
            "refTres": "Referência C",
            "refQuatro": "Referência D"
        },
        {
            "id": 2,
            "refName": "Técnicas de Programação",
            "refDescricao": "C Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet alias beatae, corporis minima asperiores, earum sint error sit quaerat voluptatibus molestias suscipit impedit fugiat, illo temporibus consequuntur neque esse.",
            "linkUm": "<a href='#'><img src='./img/al_1.jpg' alt=''></a>",
            "linkDois": "<a href='#'><img src='./img/al_2.jpg' alt=''></a>",
            "linkTres": "<a href='#'><img src='./img/al_3.jpg' alt=''></a>",
            "refUm": "Referência A",
            "refDois": "Referência B",
            "refTres": "Referência C",
            "refQuatro": "Referência D"
        }
    ]

    const selectElem = document.getElementById('topic');

    window.addEventListener('load', (event) => {
        const index = selectElem.selectedIndex;

        document.getElementById("topicInfos").innerHTML = `
                <h4>${infos[index].refName}</h4>
                <p>${infos[index].refDescricao}</p>
                <div class="img-links">
                ${infos[index].linkUm}
                ${infos[index].linkDois}
                ${infos[index].linkTres}
                </div>
                <ul>
                <h4>Referências</h4>
                <li>${infos[index].refUm}</li>
                <li>${infos[index].refDois}</li>
                <li>${infos[index].refTres}</li>
                <li>${infos[index].refQuatro}</li>
                </ul>
         `
    });

    selectElem.addEventListener("change", () => {
        
        const index = selectElem.selectedIndex;

        document.getElementById("topicInfos").innerHTML = `
                <h4>${infos[index].refName}</h4>
                <p>${infos[index].refDescricao}</p>
                <div class="img-links">
                ${infos[index].linkUm}
                ${infos[index].linkDois}
                ${infos[index].linkTres}
                </div>
                <ul>
                <h4>Referências</h4>
                <li>${infos[index].refUm}</li>
                <li>${infos[index].refDois}</li>
                <li>${infos[index].refTres}</li>
                <li>${infos[index].refQuatro}</li>
                </ul>
         `
    });
/*END LOAD INFOS*/

saveUserName = (e) => {
    e.preventDefault();

    const name = username.value;
    const utopic = userTopic.value;
    const title = userTopicTitle.options[topic.selectedIndex].text;

    localStorage.setItem('name', name);
    localStorage.setItem('utopic', utopic);
    localStorage.setItem('title', title);

    window.location.assign('./game.html');

};
