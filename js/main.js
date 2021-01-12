var investCount = 0;
var timePassed = 0;

var i = 0;
var txt = null;
var speed = 30;

var selectedRandomEvent;

var randomEventsDict = {
    're1' : {
        eventName: 'Locust Swarm',
        eventDes: 'The locust swarm had just destroyed the crops in the your community farming area.',
        dcs1: {
            dcsDes1: 'Track the swarm and spray insecticide',
            dcsMoneyCost1: -500,
            dcsTimeCost1: -16,
            dcsEcon1: -20,
            dcsEnv1: -8,
            dcsSoc1: -10
        },
        dcs2: {
            dcsDes2: 'Find a group of scientist to research on biological method to solve the swarm issue',
            dcsMoneyCost2: -1000,
            dcsTimeCost2: -50,
            dcsEcon2: -10,
            dcsEnv2: -4,
            dcsSoc2: -5
        }
    },

    're2' : {
        eventName: 'Flooding',
        eventDes: 'It\'s been raining heavily these days, some of your community areas are experiencing flooding ',
        dcs1: {
            dcsDes1: 'Build Water Flow control system',
            dcsMoneyCost1: -1000,
            dcsTimeCost1: -50,
            dcsEcon1: -10,
            dcsEnv1: -6,
            dcsSoc1: -10
        },
        dcs2: {
            dcsDes2: 'Secure basic supply for needy',
            dcsMoneyCost2: -500,
            dcsTimeCost2: -16,
            dcsEcon2: -20,
            dcsEnv2: -10,
            dcsSoc2: -8
        }
    },

}

var investDict = {

    'i1' : {
        investName: 'Public Transportation',
        investDes: 'Improve the facilities of public transporation',
        investTimeCost: -30,
        investMoneyCost: -100,
        econChange: 5,
        envChange: 7,
        socChange: 3,
        investMoneyReward: 300,
        investTimeReward: 10
    },

    'i2' : {
        investName: 'Community Recovery Fund',
        investDes: 'Establish a community fund which can be used to response to pandemic or emergency situation',
        investTimeCost: -8,
        investMoneyCost: -1000,
        econChange: 15,
        envChange: 0,
        socChange: 5,
        investMoneyReward: 0,
        investTimeReward: 4
    },

    'i3' : {
        investName: 'Social Protection',
        investDes: 'Improve workers’ benefits and guarantee their rights (such as Unemployment insurance)',
        investTimeCost: -16,
        investMoneyCost: -500,
        econChange: 2,
        envChange: 0,
        socChange: 8,
        investMoneyReward: 0,
        investTimeReward: 8
    },

    'i4' : {
        investName: 'Study Grants and Loans',
        investDes: 'Provide study grants and loan to workers to sharpen their skills, which can help them in finding a better job, and increase job opportunities',
        investTimeCost: -30,
        investMoneyCost: -3000,
        econChange: 15,
        envChange: 0,
        socChange: 15,
        investMoneyReward: 700,
        investTimeReward: 15
    },

    'i5' : {
        investName: 'Telework Support',
        investDes: 'Invest to upgrade digital equipment of workers and enhance experience of remote working',
        investTimeCost: -16,
        investMoneyCost: -2500,
        econChange: 10,
        envChange: -2,
        socChange: 10,
        investMoneyReward: 500,
        investTimeReward: 8
    },

    'i6' : {
        investName: 'Food Stamps',
        investDes: 'Food Voucher to needy, which can be used to exchange food and necessary ingredients',
        investTimeCost: -4,
        investMoneyCost: -200,
        econChange: 5,
        envChange: 2,
        socChange: 10,
        investMoneyReward: 10,
        investTimeReward: 2
    },

    'i7' : {
        investName: 'Meal for School Children',
        investDes: 'Provide free nutritous meal (breakfast and lunch) to school children',
        investTimeCost: -8,
        investMoneyCost: -300,
        econChange: -3,
        envChange: 0,
        socChange: 8,
        investMoneyReward: 0,
        investTimeReward: 4
    },

    'i8' : {
        investName: 'Housing Subsidy',
        investDes: 'Provide housing subsidy (on rent or buying new house) for low-income family to improve their living environment',
        investTimeCost: -40,
        investMoneyCost: -3000,
        econChange: 5,
        envChange: -3,
        socChange: 15,
        investMoneyReward: 200,
        investTimeReward: 15
    },

    'i9' : {
        investName: 'Schools\' facilities',
        investDes: 'Improve the facilities and equipments to be used in schools',
        investTimeCost: -50,
        investMoneyCost: -2000,
        econChange: -5,
        envChange: 0,
        socChange: 15,
        investMoneyReward: 100,
        investTimeReward: 30
    },

    'i10' : {
        investName: 'Organic Farming',
        investDes: 'Encourage farmers to practice organic farming, invest to provide them related equipments and skills',
        investTimeCost: -50,
        investMoneyCost: -1500,
        econChange: 2,
        envChange: 10,
        socChange: 2,
        investMoneyReward: 500,
        investTimeReward: 20
    },


}

function pickRandomEvent (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function initialScreen() {
    var welcomeText = 'Welcome to the game! \nThe game will start in 3.......2.......1....... \nLet\'s start with investing 4 projects for the community. \nENJOY!\n';
    txt = welcomeText;
    typeWriter();
}


function investProject (projectName) {
    var currentTime = document.getElementById('Time').innerHTML;
    var currentMoney = document.getElementById('Money').innerHTML;
    var currentEcon = document.getElementById('econ_index').innerHTML;
    var currentEnv = document.getElementById('env_index').innerHTML;
    var currentSoc = document.getElementById('society_index').innerHTML;

    var costTime = document.getElementById('cost_time').innerHTML;
    var costMoney = document.getElementById('cost_money').innerHTML;
    var rewardEcon = document.getElementById('reward_econ').innerHTML;
    var rewardEnv = document.getElementById('reward_env').innerHTML;
    var rewardSoc = document.getElementById('reward_society').innerHTML;
    var rewardMoney = document.getElementById('reward_money').innerHTML;
    var rewardTime = document.getElementById('reward_time').innerHTML;

    var newTime = parseInt(currentTime) + parseInt(costTime) + parseInt(rewardTime);
    var newMoney = parseInt(currentMoney) + parseInt(costMoney) + parseInt(rewardMoney);
    var newEcon = parseInt(currentEcon) + parseInt(rewardEcon);
    var newEnv = parseInt(currentEnv) + parseInt(rewardEnv);
    var newSoc = parseInt(currentSoc) + parseInt(rewardSoc);

    if (newEcon > 100) {
        newEcon = 100;
    }

    if (newEnv > 100) {
        newEnv = 100;
    }

    if (newSoc > 100) {
        newSoc = 100;
    }


    document.getElementById('Time').innerHTML = newTime;
    document.getElementById('Money').innerHTML = newMoney;
    document.getElementById('econ_index').innerHTML = newEcon;
    document.getElementById('env_index').innerHTML = newEnv;
    document.getElementById('society_index').innerHTML = newSoc;

    var econBar = document.getElementById('econ_index');
    econBar.style.width = newEcon + '%';

    var envBar = document.getElementById('env_index');
    envBar.style.width = newEnv + '%';

    var socBar = document.getElementById('society_index');
    socBar.style.width = newSoc + '%';

    investCount += 1;
    timePassed += Math.abs(parseInt(costTime));
    console.log(investCount);
    console.log(timePassed);

    if (investCount > 4 || timePassed > 100) {
        selectedRandomEvent = setRandomEventContent();
    }

    timelineAnimation();
    clearScreenTxt();
    txt = `You have just invested a project: ${projectName}\n`;
    typeWriter();

}

function triggerInvestmentModal (inv_num) {
    var invNum = `i${inv_num}`;
    setInvestmentContent(invNum);

    $('#InvestmentModal').modal({ show: true})
}

function setInvestmentContent (inv_num) {
    selectedInv = investDict[inv_num];

    invName = selectedInv.investName;
    invDes = selectedInv.investDes;
    invTimeCost = selectedInv.investTimeCost;
    invMoneyCost = selectedInv.investMoneyCost;
    invEconChange = selectedInv.econChange;
    invEnvChange = selectedInv.envChange;
    invSocChange = selectedInv.socChange;
    invTimeReward = selectedInv.investTimeReward;
    invMoneyReward = selectedInv.investMoneyReward;

    document.getElementById('inv_title').innerHTML = invName;
    document.getElementById('inv_des').innerHTML = invDes;
    document.getElementById('cost_time').innerHTML = invTimeCost;
    document.getElementById('cost_money').innerHTML = invMoneyCost;
    document.getElementById('reward_econ').innerHTML = invEconChange;
    document.getElementById('reward_env').innerHTML = invEnvChange;
    document.getElementById('reward_society').innerHTML = invSocChange;
    document.getElementById('reward_time').innerHTML = invTimeReward;
    document.getElementById('reward_money').innerHTML = invMoneyReward;

    investButton = document.getElementById('invest_button');
    strName = "investProject(\"" + invName + "\")";
    investButton.setAttribute("onclick", strName);

}

function triggerRandomEvent () {
    $('#RandomEventModal').modal({ show: true})
    investCount = 0;
    timePassed = 0;
}

function setRandomEventContent () {
    var randomEvent = pickRandomEvent(randomEventsDict);
    var rEventName = randomEvent.eventName;
    var rEventDes = randomEvent.eventDes;

    var dcs1Des = randomEvent.dcs1.dcsDes1;
    var dcs1TimeCost = randomEvent.dcs1.dcsTimeCost1;
    var dcs1MoneyCost = randomEvent.dcs1.dcsMoneyCost1;

    var dcs2Des = randomEvent.dcs2.dcsDes2;
    var dcs2TimeCost = randomEvent.dcs2.dcsTimeCost2;
    var dcs2MoneyCost = randomEvent.dcs2.dcsMoneyCost2;


    document.getElementById('re_title').innerHTML = rEventName;
    document.getElementById('re_des').innerHTML = rEventDes;
    document.getElementById('re_dcs1').innerHTML = dcs1Des;
    document.getElementById('re_dcs1_timecost').innerHTML = dcs1TimeCost;
    document.getElementById('re_dcs1_moneycost').innerHTML = dcs1MoneyCost;
    document.getElementById('re_dcs2').innerHTML = dcs2Des;
    document.getElementById('re_dcs2_timecost').innerHTML = dcs2TimeCost;
    document.getElementById('re_dcs2_moneycost').innerHTML = dcs2MoneyCost;

    console.log(randomEvent);
    triggerRandomEvent();
    return randomEvent;
}

function effectOfRandomEvent(decision) {
    var currentMoney = document.getElementById('Money').innerHTML;
    var currentTime = document.getElementById('Time').innerHTML;
    var currentEcon = document.getElementById('econ_index').innerHTML;
    var currentEnv = document.getElementById('env_index').innerHTML;
    var currentSoc = document.getElementById('society_index').innerHTML;

    if (decision == 1) {
        var costMoney = selectedRandomEvent.dcs1.dcsMoneyCost1;
        var costTime = selectedRandomEvent.dcs1.dcsTimeCost1;
        var EconChange = selectedRandomEvent.dcs1.dcsEcon1;
        var EnvChange = selectedRandomEvent.dcs1.dcsEnv1;
        var SocChange = selectedRandomEvent.dcs1.dcsSoc1;

        var newMoney = parseInt(currentMoney) + costMoney;
        var newTime = parseInt(currentTime) + costTime;
        var newEcon = parseInt(currentEcon) + EconChange;
        var newEnv = parseInt(currentEnv) + EnvChange;
        var newSoc = parseInt(currentSoc) + SocChange;

        if (newEcon > 100) {
            newEcon = 100;
        }
    
        if (newEnv > 100) {
            newEnv = 100;
        }
    
        if (newSoc > 100) {
            newSoc = 100;
        }

    } else if (decision == 2) {
        var costMoney = selectedRandomEvent.dcs2.dcsMoneyCost2;
        var costTime = selectedRandomEvent.dcs2.dcsTimeCost2;
        var EconChange = selectedRandomEvent.dcs2.dcsEcon2;
        var EnvChange = selectedRandomEvent.dcs2.dcsEnv2;
        var SocChange = selectedRandomEvent.dcs2.dcsSoc2;

        var newMoney = parseInt(currentMoney) + costMoney;
        var newTime = parseInt(currentTime) + costTime;
        var newEcon = parseInt(currentEcon) + EconChange;
        var newEnv = parseInt(currentEnv) + EnvChange;
        var newSoc = parseInt(currentSoc) + SocChange;

        if (newEcon > 100) {
            newEcon = 100;
        }
    
        if (newEnv > 100) {
            newEnv = 100;
        }
    
        if (newSoc > 100) {
            newSoc = 100;
        }

    }

    document.getElementById('Money').innerHTML = newMoney;
    document.getElementById('Time').innerHTML = newTime;
    document.getElementById('econ_index').innerHTML = newEcon;
    document.getElementById('env_index').innerHTML = newEnv;
    document.getElementById('society_index').innerHTML = newSoc;

    var econBar = document.getElementById('econ_index');
    econBar.style.width = newEcon + '%';

    var envBar = document.getElementById('env_index');
    envBar.style.width = newEnv + '%';

    var socBar = document.getElementById('society_index');
    socBar.style.width = newSoc + '%';

    clearScreenTxt();
    txt = 'Something just happened in your community!\nPay attention to your sustainable index';
    typeWriter();

    selectedRandomEvent = null;

}

function clearScreenTxt() {
    if ($('#screen_text').text().length >= 130) {
        document.getElementById("screen_text").innerHTML = '';
    }
    i = 0;
}

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("screen_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);}
}

function pageRedirect(nextURL) {
    location.href = nextURL;
}

function timelineAnimation() {
    var timelineBar = document.getElementById('timeline_bar');
    var currentTime = document.getElementById('Time').innerHTML;
    var totalTimePassed = 1000 - parseInt(currentTime);

    timelineBar.style.width =  totalTimePassed/10 + '%';
}



