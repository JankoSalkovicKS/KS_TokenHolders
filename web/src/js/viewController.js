////////////////////////////////////////////////////
/* Token distribution DOM */
var setOverallTokens = (amount) => {
    document.getElementById('totalTokenAmount').textContent = numberWithCommas(amount);
};
var setBaseTokenAmount = (amount) => {
    document.getElementById('baseTokenAmount').textContent = numberWithCommas(amount);
};
var setBaseTokenAmountDate = (date) => {
    document.getElementById('baseTokenAmountDate').textContent = date;
};
var setTokenHoldersCount = (holdersCount) => {
    document.getElementById('tokenHoldersCount').textContent = holdersCount;
};

var fillTokenHoldersList = (tokenHoldersList, overallTokens) => {
    let DOMList = document.getElementById('tokenHoldersList');
    DOMList.innerHTML = "";

    for(let holder of tokenHoldersList){
        let htmlCode = 
        `<tr>
            <td class="text-center"><img src="${holder.imageURL}" style="height: 30px;" /></td>
            <td>${holder.firstName}</td>
            <td>${holder.lastName}</td>
            <td class="text-right">${numberWithCommas(holder.baseTokens)}</td>
            <td class="text-right">${numberWithCommas(holder.incomeTokens)}</td>
            <td class="text-right">${Math.round((100 *holder.overallTokens / overallTokens))} %</td>
            <td class="text-right"><button class="btn btn-primary" id="${holder.id}">Details</button></td>
        </tr>`;

        DOMList.insertAdjacentHTML('beforeend', htmlCode);
    }
};
var showOverallTokensPieChart = (labels, data) => {
    var ctxP = document.getElementById("pieChart");
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: labels, //labels
            datasets: [
                {   
                    data: data, //data
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
};

////////////////////////////////////////////////////
/* Cards */
var showCard = (cardID) => {
    document.getElementById(cardID).hidden = false;
}; 
var hideAllCards = () => {
    var children = document.getElementById('cards').childNodes;
    for(var child of children) {
        if(child.nodeType == Node.ELEMENT_NODE){
            child.hidden = true;
        }
    }
}
var deactivateAllNavbarLinks = () => {
    var children = document.getElementById('navbar').childNodes;
    for(var child of children) {
        if(child.nodeType == Node.ELEMENT_NODE){
            child.classList.remove("act");
        }
    }
};
var activateNavbarLink = (id) => {
    document.getElementById(id).classList.add("act");
};

////////////////////////////////////////////////////
/* Token holder details */
var setHoldersProfilePic = (imageUrl) => {
    document.getElementById('holderProfilePic').setAttribute('src', imageUrl);
};
var setHoldersName = (name) => {
    document.getElementById('holderName').textContent = name;
};
var setHoldersTokenAmount = (amount) => {
    document.getElementById('holderTokenAmount').textContent = numberWithCommas(amount);
};
var setHoldersTokenStake = (percentage) => {
    document.getElementById('holderStakePercentage').textContent = percentage + " %";
};
var showBadgeGlobalStatus = (holdersCount, overallTokens) => {
    document.getElementById('globalInfo').setAttribute(
        'data-content',
        `Token holders count: ${holdersCount}. Overall token amount: ${overallTokens}.`
    );
}
var showHoldersJoinDate = (joinDate) => {
    document.getElementById('joinDate').textContent = joinDate;
};
var setEmploymentStatus = (employmentStatus, holderId) => {
    document.getElementById('employmentStatus').textContent = employmentStatus;
    document.getElementById('employmentStatus').setAttribute('value', holderId);
};

var initSenioritySelectList = (seniorityLevels) => {
    var selectList = document.getElementById('sel1');
    selectList.innerHTML = '';
    for(let s of seniorityLevels){
        let newOption = document.createElement('option');
        newOption.value = s.level;
        newOption.text = s.level;
        selectList.add(newOption);
    }
};
var updateHolderTokenFactors = (income, halfLife) => {
    document.getElementById('income').textContent = income;
    document.getElementById('halfLife').textContent = halfLife;
};
var setSeniorityLevel = (seniority) => {
    document.getElementById('seniority').textContent = seniority;
};
var changeEmploymentStatus = () => {
    let employmentStatus = document.getElementById('employmentStatus');

    let status = employmentStatus.textContent;
    if(status === 'Employed'){
        employmentStatus.textContent = "Unemployed";
    }
    else if(status === 'Unemployed'){
        employmentStatus.textContent = "Employed";
    }
    else{
        console.log("Employment status. Smth went wrong.");
    }
}

/* Render Charts */
var showGlobalStakePercentagePieChart = (rest, myStake) => {
    
    var ctxP = document.getElementById("globalStakePercPieChart");
    var pieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Other holders", "My stake"],
            datasets: [
                {
                    data: [rest, myStake],
                    backgroundColor: ["#949FB1", "#FDB45C"],
                    hoverBackgroundColor: ["#A8B3C5", "#FFC870"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
};
var showHolderTokensPieChart = (baseTokens, incomeTokens, graphId) => {

    var ctxP = document.getElementById(graphId);//holderPieChart
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Base tokens", "Daily income tokens"],
            datasets: [
                {
                    data: [baseTokens, incomeTokens],
                    backgroundColor: ["#F7464A", "#46BFBD"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
};
var showHolderIncomeGraph = (labels, data, graphId) => {
    var ctx = document.getElementById(graphId);//"graphIncome"
    var incomeGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    label: "Daily token incomes per months",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "#5AD3D1",
                    borderWidth: "3",
                    pointBackgroundColor: "#46BFBD",
                    pointHoverBorderColor: "#FF5A5E",
                    pointHoverBackgroundColor: "#FF5A5E",


                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'token/day'
                  }
                }],
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'month'
                    }
                  }]
              }
        }
    });
};
var showHolderEmploymentGraph = (labels, data, graphId) => {
    var ctx = document.getElementById(graphId);//graphEmployment
    var employmentGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Employment status through months",
                    backgroundColor: "#FFC870",
                    data: data
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1
                }],
                yAxes: [{
                    type: 'category',
                    labels: ['Employed', 'Unemployed']
                }]
            }
        },
        
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { 
    showGlobalStakePercentagePieChart,
    showHolderEmploymentGraph,
    showHolderIncomeGraph,
    showHolderTokensPieChart,
    showOverallTokensPieChart,
    changeEmploymentStatus,
    setSeniorityLevel,
    updateHolderTokenFactors,
    initSenioritySelectList,
    showCard,
    deactivateAllNavbarLinks,
    activateNavbarLink,
    hideAllCards,
    setOverallTokens,
    setBaseTokenAmount,
    setBaseTokenAmountDate,
    setTokenHoldersCount,
    fillTokenHoldersList,
    setHoldersProfilePic,
    setHoldersName,
    setHoldersTokenAmount,
    setHoldersTokenStake,
    showBadgeGlobalStatus,
    showHoldersJoinDate,
    setEmploymentStatus
 };