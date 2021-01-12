var userId;

socket.on('userInfo', function (userInfo) {
    console.log(userInfo.id);
    userId = userInfo.id;
});

var plan;

socket.on('roomStat', function (roomStat) {
    roomStat.gameStatus.forEach((userStat, index) => {
        if (userStat.user.id == userId) {

            if (index == 0) {
                plan = 'a';
            } else if (index == 1) {
                plan = 'b';
            } else if (index == 2) {
                plan = 'c';
            } else {
                plan = 'd';
            }

            p1_econSI = document.getElementById('p1_econSI');
            p1_socSI = document.getElementById('p1_socSI');
            p1_envSI = document.getElementById('p1_envSI');
            p1_moneyI = document.getElementById('p1_moneyI');

            newEcon = Math.min(100, Math.floor(userStat.status.economy));
            newEnv = Math.min(100, Math.floor(userStat.status.environment));
            newSoc = Math.min(100, Math.floor(userStat.status.society));
            newMoney = Math.ceil(userStat.status.money/1000);

            p1_econSI.innerHTML = newEcon;
            p1_socSI.innerHTML = newSoc;
            p1_envSI.innerHTML = newEnv;
            p1_moneyI.innerHTML = newMoney;

            var econBar = document.getElementById('p1_econSI');
            econBar.style.width = newEcon + '%';

            var envBar = document.getElementById('p1_envSI');
            envBar.style.width = newEnv + '%';

            var socBar = document.getElementById('p1_socSI');
            socBar.style.width = newSoc + '%';
        } else {
            if (plan == 'a') {
                econSI = document.getElementById(`others${index}_econSI`);
                socSI = document.getElementById(`others${index}_socSI`);
                envSI = document.getElementById(`others${index}_envSI`);
    
                newEcon = Math.min(100, Math.floor(userStat.status.economy));
                newEnv = Math.min(100, Math.floor(userStat.status.environment));
                newSoc = Math.min(100, Math.floor(userStat.status.society));
    
                var econBar = document.getElementById(`others${index}_econSI`);
                econBar.style.width = newEcon + '%';
    
                var envBar = document.getElementById(`others${index}_envSI`);
                envBar.style.width = newEnv + '%';
    
                var socBar = document.getElementById(`others${index}_socSI`);
                socBar.style.width = newSoc + '%';
            } else if (plan == 'b') {
                if (index == 0) {
                    econSI = document.getElementById(`others${index + 1}_econSI`);
                    socSI = document.getElementById(`others${index + 1}_socSI`);
                    envSI = document.getElementById(`others${index + 1}_envSI`);
        
                    newEcon = Math.min(100, Math.floor(userStat.status.economy));
                    newEnv = Math.min(100, Math.floor(userStat.status.environment));
                    newSoc = Math.min(100, Math.floor(userStat.status.society));
        
                    var econBar = document.getElementById(`others${index + 1}_econSI`);
                    econBar.style.width = newEcon + '%';
        
                    var envBar = document.getElementById(`others${index + 1}_envSI`);
                    envBar.style.width = newEnv + '%';
        
                    var socBar = document.getElementById(`others${index + 1}_socSI`);
                    socBar.style.width = newSoc + '%';
                } else {
                    econSI = document.getElementById(`others${index}_econSI`);
                    socSI = document.getElementById(`others${index}_socSI`);
                    envSI = document.getElementById(`others${index}_envSI`);
        
                    newEcon = Math.min(100, Math.floor(userStat.status.economy));
                    newEnv = Math.min(100, Math.floor(userStat.status.environment));
                    newSoc = Math.min(100, Math.floor(userStat.status.society));
        
                    var econBar = document.getElementById(`others${index}_econSI`);
                    econBar.style.width = newEcon + '%';
        
                    var envBar = document.getElementById(`others${index}_envSI`);
                    envBar.style.width = newEnv + '%';
        
                    var socBar = document.getElementById(`others${index}_socSI`);
                    socBar.style.width = newSoc + '%';
                }
            } else if (plan == 'c') {
                if (index == 0 || index == 1) {
                    econSI = document.getElementById(`others${index + 1}_econSI`);
                    socSI = document.getElementById(`others${index + 1}_socSI`);
                    envSI = document.getElementById(`others${index + 1}_envSI`);
        
                    newEcon = Math.min(100, Math.floor(userStat.status.economy));
                    newEnv = Math.min(100, Math.floor(userStat.status.environment));
                    newSoc = Math.min(100, Math.floor(userStat.status.society));
        
                    var econBar = document.getElementById(`others${index + 1}_econSI`);
                    econBar.style.width = newEcon + '%';
        
                    var envBar = document.getElementById(`others${index + 1}_envSI`);
                    envBar.style.width = newEnv + '%';
        
                    var socBar = document.getElementById(`others${index + 1}_socSI`);
                    socBar.style.width = newSoc + '%';
                } else {
                    econSI = document.getElementById(`others${index}_econSI`);
                    socSI = document.getElementById(`others${index}_socSI`);
                    envSI = document.getElementById(`others${index}_envSI`);
        
                    newEcon = Math.min(100, Math.floor(userStat.status.economy));
                    newEnv = Math.min(100, Math.floor(userStat.status.environment));
                    newSoc = Math.min(100, Math.floor(userStat.status.society));
        
                    var econBar = document.getElementById(`others${index}_econSI`);
                    econBar.style.width = newEcon + '%';
        
                    var envBar = document.getElementById(`others${index}_envSI`);
                    envBar.style.width = newEnv + '%';
        
                    var socBar = document.getElementById(`others${index}_socSI`);
                    socBar.style.width = newSoc + '%';
                }
            } else {
                econSI = document.getElementById(`others${index + 1}_econSI`);
                socSI = document.getElementById(`others${index + 1}_socSI`);
                envSI = document.getElementById(`others${index + 1}_envSI`);
    
                newEcon = Math.min(100, Math.floor(userStat.status.economy));
                newEnv = Math.min(100, Math.floor(userStat.status.environment));
                newSoc = Math.min(100, Math.floor(userStat.status.society));
    
                var econBar = document.getElementById(`others${index + 1}_econSI`);
                econBar.style.width = newEcon + '%';
    
                var envBar = document.getElementById(`others${index + 1}_envSI`);
                envBar.style.width = newEnv + '%';
    
                var socBar = document.getElementById(`others${index + 1}_socSI`);
                socBar.style.width = newSoc + '%';
            }
        }
    });
})
