//for popovers to work
$(function () {
    $('[data-toggle="popover"]').popover()
})

document.addEventListener("DOMContentLoaded", function(event) {

    // holder employment status manipulation
    document.getElementById('changeEmplBtn').addEventListener('click', (event) => {
        if(confirm("You are about to change Token Holders employment status. Want to proceed?")){
        
            let employmentStatus = document.getElementById('employmentStatus');

            let status = employmentStatus.getAttribute('value');
            if(status === '1'){
                employmentStatus.setAttribute('value', '2');
                employmentStatus.textContent = "Unemployed";
            }
            else if(status === '2'){
                employmentStatus.setAttribute('value', '1');
                employmentStatus.textContent = "Employed";
            }
            else{
                console.log("Employment status. Smth went wrong.");
            }
        }
    });
    // holder seniority manipulation
    document.getElementById('sel1').addEventListener('change', (event) => {
        let element = event.target;
        let text = element.options[element.selectedIndex].value;
        document.getElementById('seniority').textContent = text;

        switch(text){
            case 'Junior':
                document.getElementById('income').textContent = "3";
                document.getElementById('halfLife').textContent = "1";
                break;
            case 'Mid-level':
                document.getElementById('income').textContent = "5";
                document.getElementById('halfLife').textContent = "2.5";
                break;
            case 'Senior':
                document.getElementById('income').textContent = "7";
                document.getElementById('halfLife').textContent = "3.5";
                break;
        }

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
    document.getElementById('loginCardBtn').addEventListener('click', (event) => {
        resetCards();
        document.getElementById('cardLogin').hidden = false;
    });
    document.getElementById('tokensCardBtn').addEventListener('click', (event) => {
        resetCards();
        document.getElementById('cardTokens').hidden = false;
    });
    document.getElementById('detailsCardBtn').addEventListener('click', (event) => {
        resetCards();
        document.getElementById('cardDetails').hidden = false;
    });
    document.getElementById('userCardBtn').addEventListener('click', (event) => {
        resetCards();
        document.getElementById('cardUser').hidden = false;
    });
    function resetCards(){
        var children = document.getElementById('cards').childNodes;
        for(var child of children) {
            if(child.nodeType == Node.ELEMENT_NODE){
                child.hidden = true;
            }
        }
    }
    //

    // token distribution PieChart
    var showOverallTokensPieChart = () => {
        var ctxP = document.getElementById("pieChart");
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Jane", "Stephen", "Janko", "Max", "Miro"],
                datasets: [
                    {
                        data: [350000, 200000, 400000, 100000, 70000],
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
    showOverallTokensPieChart();

    // particular holder token PieChart
    var showHolderTokensPieChart = () => {
        
        var ctxP = document.getElementById("pieChartHolder");
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Base tokens", "Daily income tokens"],
                datasets: [
                    {
                        data: [110000, 10300],
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
    showHolderTokensPieChart();

    // particular holder income graph
    var showHolderIncomeGraph = () => {
        var ctx = document.getElementById("graphIncome");
        var incomeGraph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        data: [3, 2.8, 3, 2.75, 3, 3.5, 3.5],
                        label: "Average daily income per month",
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
    showHolderIncomeGraph();
    // particular holder employment graph
    var showHolderEmploymentGraph = () => {
        var ctx = document.getElementById("graphEmployment");
        var employmentGraph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Employment status through months",
                        backgroundColor: "#FFC870",
                        data: ['unemployed', "employed", 'unemployed', "employed", "employed", "employed", 'unemployed']
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
                        labels: ['employed', 'unemployed']
                    }]
                }
            },
            
        });
    };
    showHolderEmploymentGraph();
})


