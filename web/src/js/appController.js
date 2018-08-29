//imports
import * as UIController from './viewController';
import * as dataRepo from './dataRepository';

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
                    initTokenHolderDetailsScreen(1);
                    break;
                case "loginCardBtn":
                    initLoginScreen();
                    break;
                case "userCardBtn":
                    initUserMainScreen(1);
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
            const id = parseInt(document.getElementById('employmentStatus').getAttribute('value'));
            let holder = dataRepo.getTokenHolderById(id);
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
var initLoginScreen = () => {
    UIController.hideAllCards();

    

    UIController.showCard('cardLogin');
};
var initUserMainScreen = (holderId) => {
    UIController.hideAllCards();

    let holder = dataRepo.getTokenHolderById(holderId);

    UIController.showCard('cardUserMain');
}
var initTokenDistributionScreen = () => {
    //hide everything
    UIController.hideAllCards();
    //show distribution pie chart
    let labels = [];
    let data = [];
    for(let user of dataRepo.getTokenHoldersList()){
        labels.push(user.firstName + " " + user.lastName);
        data.push(user.overallTokens);
    }
    UIController.showOverallTokensPieChart(labels, data)
    //show right column info
    UIController.setOverallTokens(dataRepo.getOverallTokensAmount());
    UIController.setBaseTokenAmount(dataRepo.getBaseTokenAmount());
    UIController.setBaseTokenAmountDate(dataRepo.getBaseTokenDistributionDate());
    UIController.setTokenHoldersCount(dataRepo.getTokenHoldersCount());
    UIController.fillTokenHoldersList(dataRepo.getTokenHoldersList(), dataRepo.getOverallTokensAmount());
    //show card
    UIController.showCard('cardTokenDistribution');
};
var initTokenHolderDetailsScreen = (id) => {
    UIController.hideAllCards();

    let holder = dataRepo.getTokenHolderById(parseInt(id));

    UIController.setHoldersProfilePic(holder.imageURL);
    UIController.setHoldersName(holder.firstName + " " + holder.lastName);
    UIController.setHoldersTokenAmount(holder.overallTokens);
    UIController.setHoldersTokenStake( Math.round((100 *holder.overallTokens / dataRepo.getOverallTokensAmount())));
    UIController.showBadgeGlobalStatus(dataRepo.getTokenHoldersCount(), dataRepo.getOverallTokensAmount());
    UIController.showHolderTokensPieChart(holder.baseTokens, holder.incomeTokens);
    UIController.showHoldersJoinDate(holder.joinDate);
    //seniority level - init
    UIController.initSenioritySelectList(dataRepo.getSeniorityLevels());
    //seniority level - set
    setSeniorityLevel(holder.seniorityLevel);
    UIController.setEmploymentStatus(holder.employmentStatus, holder.id);

    //not implemented
    let incomesList = dataRepo.getTokenHolderIncomesById(holder.id);
    let employmentList = dataRepo.getTokenHolderEmploymentsById(holder.id);
    let pastMonthsList = getPastMonths(6);
    UIController.showHolderIncomeGraph(pastMonthsList, incomesList);
    UIController.showHolderEmploymentGraph(pastMonthsList, employmentList);

    UIController.showCard('cardHolderDetails');
};
var getPastMonths = (count) => {
    let monthNames = ['January', 'February', 'March', 'April', 'May','June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    var today = new Date();
    var currentMonth = today.getMonth();
    let months = [];

    months.unshift(monthNames[currentMonth]);
    count--;

    while(count > 0){
        currentMonth --;
        if(currentMonth === -1){
            currentMonth = 11;
        }
        months.unshift(monthNames[currentMonth]);
        count--;
    }
    return months;
};
var setSeniorityLevel = (seniority) => {
    UIController.setSeniorityLevel(seniority);

    for(let s of dataRepo.getSeniorityLevels()){
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