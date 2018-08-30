import { TokenHolder } from './models/TokenHolder';
import { IncomeRecord } from './models/IncomeRecord';
import { EmploymentRecord } from './models/EmploymentRecord';

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
let SENIORTY_LEVELS_MAP = (() => {
    let map = new Map();

    for(let l of SENIORITY_LEVELS){
        map.set(l.level, l);
    }

    return map;
})();
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
//incomes for the past 6 months
const TOKEN_HOLDERS_INCOMES_MAP_LIMIT = 6;
let TOKEN_HOLDERS_INCOMES_MAP = (() => {
    let map = new Map();
    // map.set(1, [new IncomeRecord('8.2018', 2.5), new IncomeRecord('7.2018', 1)]);
    // map.set(2, [new IncomeRecord('8.2018', 3.5), new IncomeRecord('7.2018', 3.5), new IncomeRecord('6.2018', 3.5),
    //     new IncomeRecord('5.2018', 3.5), new IncomeRecord('4.2018', 2.5), new IncomeRecord('3.2018', 2.5)]);
    // map.set(3, [new IncomeRecord('8.2018', 3.5), new IncomeRecord('7.2018', 3.5), new IncomeRecord('6.2018', 3.5),
    //     new IncomeRecord('5.2018', 3.5), new IncomeRecord('4.2018', 3.5), new IncomeRecord('3.2018', 3.5)]);
    // map.set(4, [new IncomeRecord('8.2018', 3.5), new IncomeRecord('7.2018', 2.5), new IncomeRecord('6.2018', 2.5),
    // new IncomeRecord('5.2018', 2.5), new IncomeRecord('4.2018', 2.5), new IncomeRecord('3.2018', 1)]);
    map.set(1, [0, 0, 0, 0, 1, 1]);
    map.set(2, [2.5, 2.5, 2.5, 2.5, 2.5, 3.5]);
    map.set(3, [3.5, 3.5, 3.5, 3.5, 3.5, 3.5]);
    map.set(4, [1, 1, 2.5, 2.5, 2.5, 2.5]);
    
    return map;
})();
//employment status for the past 6 months
const TOKEN_HOLDERS_EMPLOYMENT_STATUS_MAP_LIMIT = 6;
let TOKEN_HOLDERS_EMPLOYMENT_STATUS_MAP = (() => {
    let map = new Map();
    // map.set(1, [new EmploymentRecord('8.2018', "Employed"), new EmploymentRecord('7.2018', "Employed")]);
    // map.set(2, [new EmploymentRecord('8.2018', "Employed"), new EmploymentRecord('7.2018', "Employed"), new EmploymentRecord('6.2018', "Unemployed"),
    //     new EmploymentRecord('5.2018', "Employed"), new EmploymentRecord('4.2018', "Employed"), new EmploymentRecord('3.2018', "Employed")]);
    // map.set(3, [new EmploymentRecord('8.2018', "Employed"), new EmploymentRecord('7.2018', "Employed"), new EmploymentRecord('6.2018', "Employed"),
    //     new EmploymentRecord('5.2018', "Employed"), new EmploymentRecord('4.2018', "Employed"), new EmploymentRecord('3.2018', "Employed")]);
    // map.set(4, [new EmploymentRecord('8.2018', "Employed"), new EmploymentRecord('7.2018', "Employed"), new EmploymentRecord('6.2018', "Employed"),
    // new EmploymentRecord('5.2018', "Employed"), new EmploymentRecord('4.2018', "Unemployed"), new EmploymentRecord('3.2018', "Employed")]);
    map.set(1, ["Unemployed", "Unemployed", "Unemployed", "Unemployed", "Employed", "Employed"]);
    map.set(2, ["Employed", "Employed", "Unemployed", "Employed", "Employed", "Employed"]);
    map.set(3, ["Employed", "Employed", "Employed", "Employed", "Employed", "Employed"]);
    map.set(4, ["Employed", "Unemployed", "Employed", "Employed", "Employed", "Employed"]);
    return map;
})();
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
    SENIORTY_LEVELS_MAP,
    TOKEN_HOLDERS_COUNT, 
    OVERALL_TOKENS, 
    INCOME_TOKEN_AMOUNT,
    BASE_TOKEN_AMOUNT, 
    BASE_TOKEN_AMOUNT_DATE,
    TOKEN_HOLDERS_INCOMES_MAP_LIMIT,
    TOKEN_HOLDERS_INCOMES_MAP,
    TOKEN_HOLDERS_EMPLOYMENT_STATUS_MAP_LIMIT,
    TOKEN_HOLDERS_EMPLOYMENT_STATUS_MAP
};