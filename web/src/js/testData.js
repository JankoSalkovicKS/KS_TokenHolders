import { TokenHolder } from './models/TokenHolder';

let SENIORITY_LEVELS = [
    {
        level: "Junior",
        income: 1,
        halflife: 1
    },
    {
        level: "Mid-level",
        income: 2.5,
        halflife: 3
    },
    {
        level: "Senior",
        income: 3.5,
        halflife: 5
    }
];
let SENIORITY_LEVELS_COUNT = SENIORITY_LEVELS.length;
let TOKEN_HOLDERS = [
    new TokenHolder(1, "Janko", "Šalković", 350000, 300000, 50000, "Junior", "Unemployed", "./img/profilna_Janko.jpg", "July 2018."),
    new TokenHolder(2, "Miroslav", "Šalković", 230000, 200000, 30000, "Mid-level", "Employed", "./img/profilna_Miro.jpg", "February 2017."),
    new TokenHolder(3, "Stephen", "Walsh", 800000, 700000, 100000, "Senior", "Employed", "./img/profilna_Stephen.jpg", "August 2010."),
    new TokenHolder(4, "Magdalena", "Radman", 270000, 250000, 20000, "Senior", "Employed", "./img/profilna_Maggy.jpg", "June 2016.")
];
let TOKEN_HOLDERS_MAP = (() => {
    var map = new Map();
    for(let th of TOKEN_HOLDERS){
        map.set(th.id, th);
    }
    return map;
})();
//console.log(TOKEN_HOLDERS_MAP);
let TOKEN_HOLDERS_COUNT = TOKEN_HOLDERS.length;
let calculation = (() => {
    let sumBase = 0;
    let sumIncome = 0;
    for(let el of TOKEN_HOLDERS){
        sumBase += el.baseTokens;
        sumIncome += el.incomeTokens;
    }
    return {
        base: sumBase,
        income: sumIncome
    };
})();
let INCOME_TOKEN_AMOUNT = calculation.income;
let BASE_TOKEN_AMOUNT = calculation.base;
let OVERALL_TOKENS = BASE_TOKEN_AMOUNT + INCOME_TOKEN_AMOUNT;
let BASE_TOKEN_AMOUNT_DATE = "12.07.2018";

export { 
    TOKEN_HOLDERS,
    TOKEN_HOLDERS_MAP,
    SENIORITY_LEVELS_COUNT, 
    SENIORITY_LEVELS, 
    TOKEN_HOLDERS_COUNT, 
    OVERALL_TOKENS, 
    INCOME_TOKEN_AMOUNT,
    BASE_TOKEN_AMOUNT, 
    BASE_TOKEN_AMOUNT_DATE 
};