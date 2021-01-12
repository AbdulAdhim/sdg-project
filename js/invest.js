const investments = [{
        id: 0,
        name: 'Emergency Recovery Fund',
        des: 'Establish a community fund which can be used to response to pandemic or emergency situation',
        cost: 1000000,
        require: [], 
        time: 30,
        affect: {
            economy: 10,
            society: 10,
            environment: 5,
            income: 5,
        },
    },
    {
        id: 1,
        name: 'Natural hazards Mitigation Program',
        des: 'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all regions',
        cost: 1000000,
        require: [], 
        time: 20,
        affect: {
            economy: 10,
            society: 5,
            environment: 15,
            income: 5,
        },
    },
    {
        id: 2,
        name: 'Social Protection for employee',
        des: "Improve workers' benefits and guarantee their rights (such as Unemployment insurance)",
        cost: 1000000,
        require: [], 
        time: 16,
        affect: {
            economy: 10,
            society: 10,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 3,
        name: 'Study Grants and Loans',
        // eslint-disable-next-line max-len
        des: 'Provide study grants and loan to workers to sharpen their skills, which can help them in finding a better job, and increase job opportunities',
        cost: 2000000,
        require: [],
        time: 30,
        affect: {
            economy: 15,
            society: 15,
            environment: 5,
            income: 10,
        },
    },
    {
        id: 4,
        name: 'Telework and Digital Support',
        des: 'Invest to upgrade digital equipment of workers and enhance experience of remote working',
        cost: 1500000,
        require: [],
        time: 16,
        affect: {
            economy: 10,
            society: 10,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 5,
        name: 'Food Stamps',
        des: 'Food Voucher to needy, which can be used to exchange food and necessary ingredients',
        cost: 1000000,
        require: [],
        time: 4,
        affect: {
            economy: 5,
            society: 15,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 6,
        name: 'Meal for School Children',
        des: 'Provide free nutritious meal (breakfast and lunch) to school children',
        cost: 1500000,
        require: [],
        time: 8,
        affect: {
            economy: 5,
            society: 15,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 7,
        name: 'Housing Subsidy',
        des: 'Provide housing subsidy (on rent or buying new house) for low-income family to improve their living environment',
        cost: 1500000,
        require: [],
        time: 40,
        affect: {
            economy: 5,
            society: 15,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 8,
        name: 'Organic Farming',
        des: 'Encourage farmers to practice organic farming, invest to provide them related equipments and skills',
        cost: 500000,
        require: [],
        time: 50,
        affect: {
            economy: 5,
            society: 5,
            environment: 10,
            income: 0,
        },
    },
    {
        id: 9,
        name: 'Conduct a system for Life Cycle Analysis of Food',
        des: '',
        cost: 1000000,
        require: [],
        time: 30,
        affect: {
            economy: 5,
            society: 10,
            environment: 15,
            income: 0,
        },
    },

    {
        id: 10,
        name: 'Healthcare Improvement',
        des: 'Promote Disease Management System such as Internet-based medical service, remote surgery and patient monitoring etc',
        cost: 1500000,
        require: [],
        time: 20,
        affect: {
            economy: 5,
            society: 20,
            environment: 5,
            income: 5,
        },
    },

    {
        id: 11,
        name: 'Multi-stakeholder and participatory approaches development',
        des: 'Promote multi-stakeholder and participatory approaches through  workshop and online training courses',
        cost: 1000000,
        require: [],
        time: 20,
        affect: {
            economy: 10,
            society: 10,
            environment: 0,
            income: 5,
        },
    },

    {
        id: 12,
        name: 'Assisting developing country with debt handling',
        des: 'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress ',
        cost: 1500000,
        require: [],
        time: 40,
        affect: {
            economy: 10,
            society: 20,
            environment: 0,
            income: 5,
        },
    },

    {
        id: 13,
        name: 'Improve multi stakeholder partnerships',
        des: 'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships ',
        cost: 1000000,
        require: [],
        time: 30,
        affect: {
            economy: 10,
            society: 10,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 14,
        name: 'Children Supporting Program ',
        des: 'Investigate all facilities to end abuse, exploitation, trafficking and all forms of violence against and torture of children',
        cost: 1500000,
        require: [],
        time: 40,
        affect: {
            economy: 5,
            society: 20,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 15,
        name: 'Corruption Prevention',
        des: 'Substantially reduce corruption and bribery in all their forms by strengthening punishment',
        cost: 2000000,
        require: [],
        time: 40,
        affect: {
            economy: 15,
            society: 15,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 16,
        name: 'Stronger laws executing institution',
        des: 'Develop effective, accountable and transparent institutions at all levels by providing information on official platforms ',
        cost: 500000,
        require: [],
        time: 50,
        affect: {
            economy: 5,
            society: 10,
            environment: 0,
            income: 0,
        },
    },

    {
        id: 17,
        name: 'Transparency Enhancement',
        des: 'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements',
        cost: 2000000,
        require: [],
        time: 50,
        affect: {
            economy: 20,
            society: 20,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 18,
        name: 'Peace Keeping Policy',
        des: 'Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime',
        cost: 4000000,
        require: [],
        time: 25,
        affect: {
            economy: 20,
            society: 20,
            environment: 0,
            income: 10,
        },
    },
    {
        id: 19,
        name: 'Combat poaching and trafficking of protected species',
        des: 'Gather support from global organizations and local communities to restore the number of endangered animals, flora and fauna. Address both demand and supply of illegal wildlife products  ',
        cost: 1500000,
        require: [],
        time: 15,
        affect: {
            economy: 5,
            society: 10,
            environment: 15,
            income: 5,
        },
    },

    {
        id: 20,
        name: 'Protect Natural Habitats',
        des: 'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species',
        cost: 1000000,
        require: [],
        time: 30,
        affect: {
            economy: 5,
            society: 20,
            environment: 15,
            income: 5,
        },
    },
    {
        id: 21,
        name: 'Increase Green Coverage',
        des: 'Promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation ',
        cost: 3000000,
        require: [],
        time: 50,
        affect: {
            economy: 20,
            society: 10,
            environment: 20,
            income: 5,
        },
    },
    {
        id: 22,
        name: 'Education Projects on invasive alien species',
        des: 'Create programs to introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species',
        cost: 2500000,
        require: [],
        time: 45,
        affect: {
            economy: 5,
            society: 15,
            environment: 15,
            income: 5,
        },
    },
    {
        id: 23,
        name: 'Sustainable fishing ',
        des: 'effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics',
        cost: 2000000,
        require: [],
        time: 35,
        affect: {
            economy: 20,
            society: 5,
            environment: 10,
            income: 5,
        },
    },
    {
        id: 24,
        name: 'Sustainable tourism',
        des: 'Conduct tourism activities and, at the same time, use the profit to protect and maintain the state of the ocean and coastal area',
        cost: 3000000,
        require: [],
        time: 50,
        affect: {
            economy: 20,
            society: 15,
            environment: 20,
            income: 5,
        },
    },

    {
        id: 25,
        name: 'Planning with Climate Change',
        des: 'Integrate climate change measures into national policies, strategies and planning',
        cost: 2500000,
        require: [],
        time: 25,
        affect: {
            economy: 15,
            society: 15,
            environment: 10,
            income: 5,
        },
    },
    {
        id: 26,
        name: 'Education Programme',
        des: 'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning',
        cost: 1500000,
        require: [],
        time: 10,
        affect: {
            economy: 5,
            society: 5,
            environment: 10,
            income: 5,
        },
    },
    {
        id: 27,
        name: 'Exporting/ Importing policy',
        des: 'Prohibit exporting hazardous wastes to other countries',
        cost: 2500000,
        require: [],
        time: 40,
        affect: {
            economy: 10,
            society: 10,
            environment: 25,
            income: 5,
        },
    },

    {
        id: 28,
        name: 'Promote 3R: Reduction, Recycling and Reuse to reduce waste generation',
        des: 'Collaborate with NGOs, enterprise to integrate 3R promotion with their activities',
        cost: 2500000,
        require: [],
        time: 45,
        affect: {
            economy: 10,
            society: 20,
            environment: 20,
            income: 5,
        },
    },

    {
        id: 29,
        name: 'Fossil-fuel subsidies Enhancement',
        des: 'Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies',
        cost: 4000000,
        require: [],
        time: 50,
        affect: {
            economy: 20,
            society: 20,
            environment: 20,
            income: 5,
        },
    },
    {
        id: 30,
        name: 'Upgrade slums',
        des: 'Ensure access for all to adequate, safe and affordable housing and basic services',
        cost: 3500000,
        require: [],
        time: 30,
        affect: {
            economy: 20,
            society: 15,
            environment: 10,
            income: 5,
        },
    },
    {
        id: 31,
        name: 'Accessible and sustainable transport systems',
        des: 'Special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons',
        cost: 4500000,
        require: [],
        time: 45,
        affect: {
            economy: 20,
            society: 20,
            environment: 15,
            income: 5,
        },
    },

    {
        id: 32,
        name: 'Sustainable Strategy and  Planning ',
        des: 'Support positive economic, social and environmental links between urban, per-urban and rural areas by strengthening national and regional development planning',
        cost: 3500000,
        require: [],
        time: 50,
        affect: {
            economy: 20,
            society: 15,
            environment: 10,
            income: 5,
        },
    },

    {
        id: 33,
        name: 'Subsidise school fees',
        des: 'Use government grants to subsidies school fees to make it cheaper',
        cost: 2000000,
        require: [],
        time: 50,
        affect: {
            economy: 15,
            society: 10,
            environment: 0,
            income: 5,
        },
    },
    {
        id: 34,
        name: 'Grants for potential R&D projects',
        des: '',
        cost: 1500000,
        require: [],
        time: 10,
        affect: {
            economy: 5,
            society: 10,
            environment: 0,
            income: 0,
        },
    },
];


var showingInvestmentList = [];
var i_count = 0;

var app = angular.module("gameInvestment", []);
app.controller("gameInvestmentCtrl", function ($scope) {
    while (showingInvestmentList.length < 12) {
        showingInvestmentList.push(investments[i_count]);
        i_count++;
    }

    $scope.investmentList = showingInvestmentList;
});


function triggerInvestmentModal(inv_num) {
    setInvestmentContent(inv_num);
    $('#InvestmentModal').modal({
        show: true
    });
}

function setInvestmentContent(inv_num) {
    selectedInv = investments[inv_num];

    invId = selectedInv.id;

    invName = selectedInv.name;
    invDes = selectedInv.des;
    invTimeCost = selectedInv.time;
    invMoneyCost = selectedInv.cost / 1000;
    invEconChange = selectedInv.affect.economy;
    invEnvChange = selectedInv.affect.environment;
    invSocChange = selectedInv.affect.society;
    invMoneyReward = selectedInv.affect.income;

    document.getElementById('inv_title').innerHTML = invName;
    document.getElementById('inv_des').innerHTML = invDes;
    document.getElementById('cost_time').innerHTML = invTimeCost;
    document.getElementById('cost_money').innerHTML = invMoneyCost;
    document.getElementById('reward_econ').innerHTML = invEconChange;
    document.getElementById('reward_env').innerHTML = invEnvChange;
    document.getElementById('reward_society').innerHTML = invSocChange;

    investButton = document.getElementById('invest_button');
    strName = "makeInvestment(" + invId + ")";
    investButton.setAttribute("onclick", strName);
}

