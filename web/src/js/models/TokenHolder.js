
const SeniorityLevels = {
    junior: "Junior",
    midLevel: "Mid-level",
    senior: "Senior"
};
const IncomeLevels = {
    junior: 1,
    midLevel: 2.5,
    senior: 3.5
}

const TokenHolder = function(
    firstName,
    lastName,
    overallTokens,
    baseTokens,
    incomeTokens,
    employmentStatus,

){
    this.firstName = firstName;
    this.lastName = lastName;
    this.overallTokens = overallTokens;
    this.baseTokens = baseTokens;
    this.incomeTokens = incomeTokens;
    this.employmentStatus = employmentStatus;
};

export { SeniorityLevels, IncomeLevels, TokenHolder };