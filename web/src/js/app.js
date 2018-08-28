//imports
import * as UIController from './UIController';
import * as testData from './modules/testData';

/* DOCUMENT LOADED */
document.addEventListener("DOMContentLoaded", function(event) {

    initTokenDistributionScreen();

    // change card
    document.getElementById('navbar').addEventListener('click', (event) => {
        if(event.target.className === 'nav-link'){
            switch(event.target.getAttribute('id')){
                case "tokensCardBtn":
                    initTokenDistributionScreen();
                    break;
                case "detailsCardBtn":
                    initTokenHolderDetailsScreen();
                    break;
                case "loginCardBtn":
                    console.log("Not implemented!");
                    break;
                case "userCardBtn":
                    console.log("Not implemented!");
                    break;
            }
        }
    });
    // go to holder's details
    document.getElementById('tokenHoldersList').addEventListener('click', (event) => {
        if(event.target.className === 'btn btn-primary'){
            initTokenHolderDetailsScreen(event.target.getAttribute('id'));
        }
    });

    // token holder details
    // holder employment status change
    document.getElementById('changeEmplBtn').addEventListener('click', (event) => {
        if(confirm("You are about to change Token Holders employment status. Want to proceed?")){
            let holder = testData.TOKEN_HOLDERS_MAP.get(parseInt(document.getElementById('employmentStatus').getAttribute('value')));
            if(holder.employmentStatus === "Employed"){
                holder.employmentStatus = "Unemployed";
            }
            else{
                holder.employmentStatus = "Employed";
            }
            UIController.changeEmploymentStatus();
        }
    });
    // holder seniority manipulation
    document.getElementById('sel1').addEventListener('change', (event) => {
        
        let seniority = extractPickedSenioritiyLevel(event);
        
        setSeniorityLevel(seniority);

    });
    document.getElementById('seniorityLevel').addEventListener('mouseover', () => {
        document.getElementById('seniorityPicker').hidden = false;
        document.getElementById('seniority').hidden = true;
        
    });
    document.getElementById('seniorityLevel').addEventListener('mouseout', () => {
        document.getElementById('seniorityPicker').hidden = true;
        document.getElementById('seniority').hidden = false;
    });
})
/* */

/* HELPER FUNCTIONS */
var initTokenDistributionScreen = () => {
    //hide everything
    UIController.hideAllCards();
    //show distribution pie chart
    let labels = [];
    let data = [];
    for(let user of testData.TOKEN_HOLDERS){
        labels.push(user.firstName + " " + user.lastName);
        data.push(user.overallTokens);
    }
    UIController.showOverallTokensPieChart(labels, data)
    //show right column info
    UIController.setOverallTokens(testData.OVERALL_TOKENS);
    UIController.setBaseTokenAmount(testData.BASE_TOKEN_AMOUNT);
    UIController.setBaseTokenAmountDate(testData.BASE_TOKEN_AMOUNT_DATE);
    UIController.setTokenHoldersCount(testData.TOKEN_HOLDERS_COUNT);
    UIController.fillTokenHoldersList(testData.TOKEN_HOLDERS);
    //show card
    UIController.showCard('cardTokenDistribution');
};
var initTokenHolderDetailsScreen = (id) => {
    UIController.hideAllCards();

    let holder = testData.TOKEN_HOLDERS_MAP.get(parseInt(id));

    UIController.setHoldersProfilePic(holder.imageURL);
    UIController.setHoldersName(holder.firstName + " " + holder.lastName);
    UIController.setHoldersTokenAmount(holder.overallTokens);
    UIController.setHoldersTokenStake(100 * Math.floor(holder.overallTokens / testData.OVERALL_TOKENS));
    UIController.showHolderTokensPieChart(holder.baseTokens, holder.incomeTokens);
    UIController.showHoldersJoinDate(holder.joinDate);
    //seniority level - init
    UIController.initSenioritySelectList(testData.SENIORITY_LEVELS);
    //seniority level - set
    setSeniorityLevel(holder.seniorityLevel);
    UIController.setEmploymentStatus(holder.employmentStatus, holder.id);

    UIController.showCard('cardHolderDetails');
};
var setSeniorityLevel = (seniority) => {
    UIController.setSeniorityLevel(seniority);

    for(let s of testData.SENIORITY_LEVELS){
        if(seniority === s.level){
            UIController.updateHolderTokenFactors(s.income, s.halflife);
            break;
        }
    }
}

// extracts seniority level from event object
var extractPickedSenioritiyLevel = (event) => {
    let element = event.target;
    return element.options[element.selectedIndex].value;
};

//for popovers to work
$(function () {
    $('[data-toggle="popover"]').popover()
});