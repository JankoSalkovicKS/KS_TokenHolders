import * as testData  from './testData';

    // TOKEN_HOLDERS,
    // TOKEN_HOLDERS_MAP,
    // SENIORITY_LEVELS_COUNT, 
    // SENIORITY_LEVELS, 
    // TOKEN_HOLDERS_COUNT, 
    // OVERALL_TOKENS, 
    // INCOME_TOKEN_AMOUNT,
    // BASE_TOKEN_AMOUNT, 
    // BASE_TOKEN_AMOUNT_DATE  

// interface
var getTokenHoldersList = () => {
    return testData.TOKEN_HOLDERS;
};
var getTokenHoldersMap = () => {
    return testData.TOKEN_HOLDERS_MAP;
};
var getSeniorityLevelsCount = () => {
    return testData.SENIORITY_LEVELS_COUNT;
};
var getSeniorityLevels = () => {
    return testData.SENIORITY_LEVELS
};
var getTokenHoldersCount = () => {
    return testData.TOKEN_HOLDERS_COUNT;
};
var getOverallTokensAmount = () => {
    return testData.OVERALL_TOKENS;
};
var getBaseTokenAmount = () => {
return testData.BASE_TOKEN_AMOUNT;
};
var getIncomeTokenAmount = () => {
    return testData.INCOME_TOKEN_AMOUNT;
};
var getBaseTokenDistributionDate = () => {
    return testData.BASE_TOKEN_AMOUNT_DATE;
};

export {
    getTokenHoldersList,
    getTokenHoldersMap,
    getSeniorityLevelsCount,
    getSeniorityLevels,
    getTokenHoldersCount,
    getOverallTokensAmount,
    getBaseTokenAmount,
    getIncomeTokenAmount,
    getBaseTokenDistributionDate
};