document.addEventListener("DOMContentLoaded", function () {
    let playerName = localStorage.getItem('name');
    let writtenName = "";
    
    if (playerName == null) {
        //start game with new name
        document.getElementById("submit").addEventListener("click", StartGame);
        document.getElementById("name").addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                StartGame();
            }
        });

    } else {
        //start game with old info
        window.location = 'game.html';
    }

    function StartGame() {
        writtenName = document.getElementById('name').value;
        localStorage.setItem('name', writtenName);
        window.location = 'game.html';  
    }
});
