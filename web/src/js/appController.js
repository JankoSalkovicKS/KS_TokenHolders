//imports
import * as UIController from './viewController';
import * as dataRepo from './dataRepository';

document.addEventListener("DOMContentLoaded", function(event) {

    initUserMainScreen(3);

    //////////////////////////////////
    /*
        Navigation
    */
    // change card
    document.getElementById('navbar').addEventListener('click', (event) => {
        if(event.target.className === 'nav-link'){
            //make all links unactive
            //UIController.deactivateAllNavbarLinks();
            switch(event.target.getAttribute('id')){
                case "tokensCardBtn":
                    initTokenDistributionScreen();
                    //UIController.activateNavbarLink("tokensCardBtn");
                    break;
                case "detailsCardBtn":
                    initTokenHolderDetailsScreen(1);
                    //UIController.activateNavbarLink("detailsCardBtn");
                    break;
                case "loginCardBtn":
                    initLoginScreen();
                    //UIController.activateNavbarLink("loginCardBtn");
                    break;
                case "userCardBtn":
                    initUserMainScreen(1);
                    //UIController.activateNavbarLink("userCardBtn");
                    break;
            }
        }
    });
    //////////////////////////////////
    /*
        Global token distribution
    */
    // go to holder's details
    document.getElementById('tokenHoldersList').addEventListener('click', (event) => {
        if(event.target.className === 'btn btn-primary'){
            initTokenHolderDetailsScreen(event.target.getAttribute('id'));
        }
    });
    //////////////////////////////////
    /*
        Holder details
    */
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
    // holder seniority change
    document.getElementById('sel1').addEventListener('change', (event) => {
        let seniority = extractPickedSenioritiyLevel(event);
        setSeniorityLevel(seniority);
    });
    // fancy select list display
    document.getElementById('seniorityLevel').addEventListener('mouseover', () => {
        document.getElementById('seniorityPicker').hidden = false;
        document.getElementById('seniority').hidden = true;
        
    });
    document.getElementById('seniorityLevel').addEventListener('mouseout', () => {
        document.getElementById('seniorityPicker').hidden = true;
        document.getElementById('seniority').hidden = false;
    });
    //////////////////////////////////
    /*
        Registered user
    */
    document.getElementById('btnChangePic').addEventListener('click', (event) => {
        document.getElementById('btnChangePic').hidden = true;
        document.getElementById('inputGroupNewPic').hidden = false;
        document.getElementById('btnChangePicApprove').hidden = false;
        document.getElementById('btnDiscardChangePic').hidden = false;
    });
    document.getElementById('btnDiscardChangePic').addEventListener('click', closeChangePicForm);
    function closeChangePicForm() {
        document.getElementById('btnChangePic').hidden = false;
        document.getElementById('inputGroupNewPic').value = "";
        document.getElementById('inputGroupNewPic').hidden = true;
        document.getElementById('btnChangePicApprove').hidden = true;
        document.getElementById('btnDiscardChangePic').hidden = true;
    };
    document.getElementById('btnChangePicApprove').addEventListener('click', (event) => {
        console.log("Picture change not implemented jet...");
    });
    
    
});

//////////////////////////////////
/*
    Init Functions
*/
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
    UIController.showHolderTokensPieChart(holder.baseTokens, holder.incomeTokens, "holderPieChart");
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
    UIController.showHolderIncomeGraph(pastMonthsList, incomesList, "graphIncome");
    UIController.showHolderEmploymentGraph(pastMonthsList, employmentList, "graphEmployment");

    UIController.showCard('cardHolderDetails');
};
var initUserMainScreen = (holderId) => {
    UIController.hideAllCards();
    let holder = dataRepo.getTokenHolderById(holderId);

    document.getElementById("userProfilePic").setAttribute("src", holder.imageURL);

    document.getElementById("userName").textContent = holder.firstName + " " + holder.lastName;
    document.getElementById("userTokenAmount").textContent = numberWithCommas(holder.overallTokens);
    document.getElementById("globalTokenAmount").textContent = numberWithCommas(dataRepo.getOverallTokensAmount());
    document.getElementById("userJoinDate").textContent = holder.joinDate;
    document.getElementById("userSeniority").textContent = holder.seniorityLevel;
    let seniority = dataRepo.getSeniorityLevelByName(holder.seniorityLevel);
    document.getElementById("userIncomePerDay").textContent = seniority.income;
    document.getElementById("userTokenHalfLife").textContent = seniority.halflife;
    document.getElementById("userEmploymentStatus").textContent = holder.employmentStatus;

    let myStake = Math.round((100 *holder.overallTokens / dataRepo.getOverallTokensAmount()));
    UIController.showGlobalStakePercentagePieChart(100 - myStake, myStake);
    UIController.showHolderTokensPieChart(holder.baseTokens, holder.incomeTokens, "userTokenDistPieChart");

    let incomesList = dataRepo.getTokenHolderIncomesById(holder.id);
    let employmentList = dataRepo.getTokenHolderEmploymentsById(holder.id);
    let pastMonthsList = getPastMonths(6);
    UIController.showHolderIncomeGraph(pastMonthsList, incomesList, "userGraphIncome");
    UIController.showHolderEmploymentGraph(pastMonthsList, employmentList, "userGraphEmployment");

    UIController.showCard('cardUserMain');
}
//////////////////////////////////
/*
    HELPER FUNCTIONS
*/
/* Cards Initialization */
var initLoginScreen = () => {
    UIController.hideAllCards();

    UIController.showCard('cardLogin');
};

// returns list of past number of months names
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

// pogledati ovo !!!
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
//number formating
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//for popovers to work
$(function () {
    $('[data-toggle="popover"]').popover()
});