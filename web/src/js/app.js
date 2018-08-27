//imports
import * as UIController from './UIController';
import * as testData from './models/testData';

/* DOCUMENT LOADED */
document.addEventListener("DOMContentLoaded", function(event) {

    initTokenDistributionScreen();


    // holder employment status change
    document.getElementById('changeEmplBtn').addEventListener('click', (event) => {
        if(confirm("You are about to change Token Holders employment status. Want to proceed?")){
            UIController.changeEmploymentStatus();
        }
    });
    // holder seniority manipulation
    document.getElementById('sel1').addEventListener('change', (event) => {
        
        let seniority = extractPickedSenioritiyLevel(event);
        
        updateSeniorityLevel(seniority);

    });
    document.getElementById('seniorityLevel').addEventListener('mouseover', () => {
        document.getElementById('seniorityPicker').hidden = false;
        document.getElementById('seniority').hidden = true;
        
    });
    document.getElementById('seniorityLevel').addEventListener('mouseout', () => {
        document.getElementById('seniorityPicker').hidden = true;
        document.getElementById('seniority').hidden = false;
    });

    //cards
    document.getElementById('tokensCardBtn').addEventListener('click', (event) => {
        initTokenDistributionScreen();
    });
    document.getElementById('detailsCardBtn').addEventListener('click', (event) => {
        initTokenHolderDetailsScreen();
    });
    document.getElementById('loginCardBtn').addEventListener('click', (event) => {
        console.log("Not implemented!");
    });
    document.getElementById('userCardBtn').addEventListener('click', (event) => {
        console.log("Not implemented!");
    });
    
})

/* HELPER FUNCTIONS */
var initTokenDistributionScreen = () => {
    hideAllCards();

    let labels = [];
    let data = [];
    for(let user of testData.TOKEN_HOLDERS){
        labels.push(user.firstName + " " + user.lastName);
        data.push(user.overallTokens);
    }
    UIController.showOverallTokensPieChart(labels, data)

    UIController.setOverallTokens(testData.OVERALL_TOKENS);
    UIController.setBaseTokenAmount(testData.BASE_TOKEN_AMOUNT);
    UIController.setBaseTokenAmountDate(testData.BASE_TOKEN_AMOUNT_DATE);
    UIController.setTokenHoldersCount(testData.TOKEN_HOLDERS_COUNT);
    UIController.fillTokenHoldersList(testData.TOKEN_HOLDERS);

    UIController.showCard('cardTokenDistribution');
};
var initTokenHolderDetailsScreen = () => {
    hideAllCards();



    UIController.showCard('cardHolderDetails');
};
function hideAllCards(){
    var children = document.getElementById('cards').childNodes;
    for(var child of children) {
        if(child.nodeType == Node.ELEMENT_NODE){
            child.hidden = true;
        }
    }
}
var updateSeniorityLevel = (seniority) => {
    UIController.displayNewSeniorityLevel(seniority);

    for(let s of testData.SENIORITY_LEVELS){
        if(seniority === s.level){
            UIController.updateHolderTokenFactors(s.income, s.halflife);
            break;
        }
    }
}

var initializeSeniorityLevels = (seniorityLevels) => {
    UIController.displayOptionsSenioritySelectList(seniorityLevels);
};
// extracts seniority level from event object
var extractPickedSenioritiyLevel = (event) => {
    let element = event.target;
    return element.options[element.selectedIndex].value;
};
//initializes graphs
var initializeGraphs = () => {
    UIController.showHolderEmploymentGraph();
    UIController.showHolderIncomeGraph();
    UIController.showHolderTokensPieChart();
    UIController.showOverallTokensPieChart();
};

//for popovers to work
$(function () {
    $('[data-toggle="popover"]').popover()
});