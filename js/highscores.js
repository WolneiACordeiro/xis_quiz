const bestUsers = document.getElementById('bestUsers');

// const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

bestUsers.innerHTML = highScores
    .map(score => {
        // return (`<li class="high-score">${score.name} - ${score.score} - ${score.title}</li>`);

        return (`
        <div class="user" id="user">
            <div class="nameUser" id="nameUser">${score.name}</div>
            <div class="test" id="test">${score.title}</div>
            <div class="note" id="note">${score.score}.0</div>
        </div>
        `);

}).join("");