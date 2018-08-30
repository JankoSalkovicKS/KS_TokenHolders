import * as testData  from './testData';

// interface
var getTokenHolderEmploymentsById = (id) => {
    return testData.TOKEN_HOLDERS_EMPLOYMENT_STATUS_MAP.get(id);
};
var getTokenHolderIncomesById = (id) => {
    return testData.TOKEN_HOLDERS_INCOMES_MAP.get(id);
};
var getTokenHolderById = (id) => {
    return testData.TOKEN_HOLDERS_MAP.get(id);
}
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
var getSeniorityLevelByName = (name) => {
    return testData.SENIORTY_LEVELS_MAP.get(name);
};
export {
    getTokenHolderEmploymentsById,
    getTokenHolderIncomesById,
    getTokenHolderById,
    getTokenHoldersList,
    getSeniorityLevelsCount,
    getSeniorityLevels,
    getTokenHoldersCount,
    getOverallTokensAmount,
    getBaseTokenAmount,
    getIncomeTokenAmount,
    getBaseTokenDistributionDate,
    getSeniorityLevelByName
};