const TokenHolder = function(
    firstName,
    lastName,
    overallTokens,
    baseTokens,
    incomeTokens,
    seniorityLevel,
    employmentStatus,
    imageURL

){
    this.firstName = firstName;
    this.lastName = lastName;
    this.overallTokens = overallTokens;
    this.baseTokens = baseTokens;
    this.incomeTokens = incomeTokens;
    this.seniorityLevel = seniorityLevel;
    this.employmentStatus = employmentStatus;
    this.imageURL = imageURL
};

export { TokenHolder };