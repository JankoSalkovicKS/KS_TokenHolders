const TokenHolder = function(
    id,
    firstName,
    lastName,
    overallTokens,
    baseTokens,
    incomeTokens,
    seniorityLevel,
    employmentStatus,
    imageURL,
    joinDate

){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.overallTokens = overallTokens;
    this.baseTokens = baseTokens;
    this.incomeTokens = incomeTokens;
    this.seniorityLevel = seniorityLevel;
    this.employmentStatus = employmentStatus;
    this.imageURL = imageURL;
    this.joinDate = joinDate;
};

export { TokenHolder };