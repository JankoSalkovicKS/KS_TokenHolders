import { TokenHolder } from './TokenHolder';
const path = require('path');

console.log(path.resolve(__dirname, "web/dist/img/profilnaKS-smanjena"));

const SENIORITY_LEVELS_COUNT = 3;
const SENIORITY_LEVELS = [
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
const TOKEN_HOLDERS = [
    new TokenHolder("Janko", "Šalković", 300000, 300000, 0, "Junior", "Employed", "/web/dist/img/profilnaKS-smanjena"),
    new TokenHolder("Miroslav", "Šalković", 200000, 200000, 0, "Senior", "Employed", "/web/dist/img/profilnaKS-smanjena"),
    new TokenHolder("Stephen", "Walsh", 700000, 700000, 0, "Senior", "Employed", "/web/dist/img/profilnaKS-smanjena"),
];
const TOKEN_HOLDERS_COUNT = TOKEN_HOLDERS.length;
const OVERALL_TOKENS = 1200000;
const BASE_TOKEN_AMOUNT = 1200000;
const BASE_TOKEN_AMOUNT_DATE = "12.07.2018";

export { 
    TOKEN_HOLDERS,
    SENIORITY_LEVELS_COUNT, 
    SENIORITY_LEVELS, 
    TOKEN_HOLDERS_COUNT, 
    OVERALL_TOKENS, 
    BASE_TOKEN_AMOUNT, 
    BASE_TOKEN_AMOUNT_DATE 
};