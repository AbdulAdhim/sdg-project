// TODO: show "How-to-Play" text when mouse hovered over qmark

const bodyTag = document.getElementById("bodyclick");

bodyTag.addEventListener("click", event => {


    if (event.target.id == 'qmark') {
        console.log("Clicked on htp");
        $('#htpModal').modal({show: true})
    } else if (event.target.id == 'bodyclick') {
        console.log("Clicked on body");
        $('#RoomModal').modal({show: true})
    } else {
        console.log("Nothing");
    }
    
})


function launchGameScreen() {
    document.getElementById("mainscreenbg").style.height = "100%";
    // Countdown Timer
    var minutes = 9;
    var seconds = 60;

    var interval = setInterval(function() {
        if (minutes + seconds > 0){
            if(seconds == 0){
                minutes--;
                seconds = 60;
            }
            seconds--;
            $('#timer_minutes').text(minutes);
            if (seconds < 10){
                seconds = `0${seconds}`
            }
            $('#timer_seconds').text(seconds);
        }

    }, 1000);

    setTimeout(launchLastScreen, 600000);
}

function quitGameScreen() {
    document.getElementById("mainscreenbg").style.height = "0%";
}

function launchLastScreen() {
    getPlayerFinalStat();
    getAllInvestedName();
    leaveRoom();
    quitGameScreen();
    document.getElementById("lastscreenbg").style.height = "100%";
}

function quitLastScreen() {
    quitGameScreen();
    document.getElementById("lastscreenbg").style.height = "0%";
    location.reload();
}

function getPlayerFinalStat() {

    // Main player
    p1_econSI = document.getElementById('p1_econSI').innerHTML;
    p1_socSI = document.getElementById('p1_socSI').innerHTML;
    p1_envSI = document.getElementById('p1_envSI').innerHTML;

    p1_final_econSI = document.getElementById('p1_econSI_final');
    p1_final_envSI = document.getElementById('p1_envSI_final');
    p1_final_socSI = document.getElementById('p1_socSI_final');

    p1_final_econSI.innerHTML = p1_econSI;
    p1_final_socSI.innerHTML = p1_socSI;
    p1_final_envSI.innerHTML = p1_envSI;

    p1_final_econSI.style.width = p1_econSI + '%';
    p1_final_envSI.style.width = p1_envSI + '%';
    p1_final_socSI.style.width = p1_socSI + '%';

    // Player 2
    p2_econSI = document.getElementById(`others1_econSI`).style.width;
    p2_socSI = document.getElementById(`others1_socSI`).style.width;
    p2_envSI = document.getElementById(`others1_envSI`).style.width;

    p2_final_econSI = document.getElementById('others1_econSI_final');
    p2_final_envSI = document.getElementById('others1_envSI_final');
    p2_final_socSI = document.getElementById('others1_socSI_final');

    p2_final_econSI.innerHTML = p2_econSI.slice(0, -1);
    p2_final_socSI.innerHTML = p2_socSI.slice(0, -1);
    p2_final_envSI.innerHTML = p2_envSI.slice(0, -1);

    p2_final_econSI.style.width = p2_econSI;
    p2_final_envSI.style.width = p2_envSI;
    p2_final_socSI.style.width = p2_socSI;

    // Player 3
    p3_econSI = document.getElementById(`others2_econSI`).style.width;
    p3_socSI = document.getElementById(`others2_socSI`).style.width;
    p3_envSI = document.getElementById(`others2_envSI`).style.width;

    p3_final_econSI = document.getElementById('others2_econSI_final');
    p3_final_envSI = document.getElementById('others2_envSI_final');
    p3_final_socSI = document.getElementById('others2_socSI_final');

    p3_final_econSI.innerHTML = p3_econSI.slice(0, -1);
    p3_final_socSI.innerHTML = p3_socSI.slice(0, -1);
    p3_final_envSI.innerHTML = p3_envSI.slice(0, -1);

    p3_final_econSI.style.width = p3_econSI;
    p3_final_envSI.style.width = p3_envSI;
    p3_final_socSI.style.width = p3_socSI;

    // Player 4
    p4_econSI = document.getElementById(`others3_econSI`).style.width;
    p4_socSI = document.getElementById(`others3_socSI`).style.width;
    p4_envSI = document.getElementById(`others3_envSI`).style.width;

    p4_final_econSI = document.getElementById('others3_econSI_final');
    p4_final_envSI = document.getElementById('others3_envSI_final');
    p4_final_socSI = document.getElementById('others3_socSI_final');

    p4_final_econSI.innerHTML = p4_econSI.slice(0, -1);
    p4_final_socSI.innerHTML = p4_socSI.slice(0, -1);
    p4_final_envSI.innerHTML = p4_envSI.slice(0, -1);

    p4_final_econSI.style.width = p4_econSI;
    p4_final_envSI.style.width = p4_envSI;
    p4_final_socSI.style.width = p4_socSI;
}


