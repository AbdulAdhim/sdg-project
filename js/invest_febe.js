const investments = [
    {
        id: 0,
        name: 'YOLO',
        cost: 0,
        require: [], // Might be too hard to implement
        time: 0,
        affect: {
            economy: -100, society: -100, environment: -100, income: -100,
        },
    },
    {
        id: 1,
        name: 'Invent Plastic Bag',
        cost: 50,
        require: [],
        time: 0,
        affect: {
            economy: 5, society: -1, environment: -5, income: 7,
        },
    },
    {
        id: 2,
        name: 'Invent Better Plastic Bag',
        cost: 200,
        require: ['1'], // Might be too hard to implement
        time: 0,
        affect: {
            economy: 2, society: -1, environment: -2, income: 5,
        },
    },
    {
        id: 3,
        name: 'Get Educated',
        cost: 500,
        require: [],
        time: 0,
        affect: {
            economy: 2, society: 10, environment: 1, income: 7,
        },
    },
];
