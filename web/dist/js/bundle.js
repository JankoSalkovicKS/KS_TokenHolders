/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/src/js/app.js":
/*!***************************!*\
  !*** ./web/src/js/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_TokenHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/TokenHolder */ \"./web/src/js/models/TokenHolder.js\");\n//imports\r\n\r\n\r\n\r\n/* DOCUMENT LOADED */\r\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\r\n\r\n    // holder employment status manipulation\r\n    document.getElementById('changeEmplBtn').addEventListener('click', (event) => {\r\n        if(confirm(\"You are about to change Token Holders employment status. Want to proceed?\")){\r\n        \r\n            let employmentStatus = document.getElementById('employmentStatus');\r\n\r\n            let status = employmentStatus.getAttribute('value');\r\n            if(status === '1'){\r\n                employmentStatus.setAttribute('value', '2');\r\n                employmentStatus.textContent = \"Unemployed\";\r\n            }\r\n            else if(status === '2'){\r\n                employmentStatus.setAttribute('value', '1');\r\n                employmentStatus.textContent = \"Employed\";\r\n            }\r\n            else{\r\n                console.log(\"Employment status. Smth went wrong.\");\r\n            }\r\n        }\r\n    });\r\n    // holder seniority manipulation\r\n    document.getElementById('sel1').addEventListener('change', (event) => {\r\n        let element = event.target;\r\n        let text = element.options[element.selectedIndex].value;\r\n        document.getElementById('seniority').textContent = text;\r\n\r\n        switch(text){\r\n            case 'Junior':\r\n                document.getElementById('income').textContent = \"3\";\r\n                document.getElementById('halfLife').textContent = \"1\";\r\n                break;\r\n            case 'Mid-level':\r\n                document.getElementById('income').textContent = \"5\";\r\n                document.getElementById('halfLife').textContent = \"2.5\";\r\n                break;\r\n            case 'Senior':\r\n                document.getElementById('income').textContent = \"7\";\r\n                document.getElementById('halfLife').textContent = \"3.5\";\r\n                break;\r\n        }\r\n\r\n    });\r\n    document.getElementById('seniorityLevel').addEventListener('mouseover', () => {\r\n        document.getElementById('seniorityPicker').hidden = false;\r\n        document.getElementById('seniority').hidden = true;\r\n        \r\n    });\r\n    document.getElementById('seniorityLevel').addEventListener('mouseout', () => {\r\n        document.getElementById('seniorityPicker').hidden = true;\r\n        document.getElementById('seniority').hidden = false;\r\n    });\r\n\r\n    //cards\r\n    document.getElementById('loginCardBtn').addEventListener('click', (event) => {\r\n        resetCards();\r\n        document.getElementById('cardLogin').hidden = false;\r\n    });\r\n    document.getElementById('tokensCardBtn').addEventListener('click', (event) => {\r\n        resetCards();\r\n        document.getElementById('cardTokens').hidden = false;\r\n    });\r\n    document.getElementById('detailsCardBtn').addEventListener('click', (event) => {\r\n        resetCards();\r\n        document.getElementById('cardDetails').hidden = false;\r\n    });\r\n    document.getElementById('userCardBtn').addEventListener('click', (event) => {\r\n        resetCards();\r\n        document.getElementById('cardUser').hidden = false;\r\n    });\r\n    function resetCards(){\r\n        var children = document.getElementById('cards').childNodes;\r\n        for(var child of children) {\r\n            if(child.nodeType == Node.ELEMENT_NODE){\r\n                child.hidden = true;\r\n            }\r\n        }\r\n    }\r\n    //\r\n\r\n    // token distribution PieChart\r\n    var showOverallTokensPieChart = () => {\r\n        var ctxP = document.getElementById(\"pieChart\");\r\n        var myPieChart = new Chart(ctxP, {\r\n            type: 'pie',\r\n            data: {\r\n                labels: [\"Jane\", \"Stephen\", \"Janko\", \"Max\", \"Miro\"],\r\n                datasets: [\r\n                    {\r\n                        data: [350000, 200000, 400000, 100000, 70000],\r\n                        backgroundColor: [\"#F7464A\", \"#46BFBD\", \"#FDB45C\", \"#949FB1\", \"#4D5360\"],\r\n                        hoverBackgroundColor: [\"#FF5A5E\", \"#5AD3D1\", \"#FFC870\", \"#A8B3C5\", \"#616774\"]\r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                responsive: true\r\n            }\r\n        });\r\n    };\r\n    showOverallTokensPieChart();\r\n\r\n    // particular holder token PieChart\r\n    var showHolderTokensPieChart = () => {\r\n        \r\n        var ctxP = document.getElementById(\"pieChartHolder\");\r\n        var myPieChart = new Chart(ctxP, {\r\n            type: 'pie',\r\n            data: {\r\n                labels: [\"Base tokens\", \"Daily income tokens\"],\r\n                datasets: [\r\n                    {\r\n                        data: [110000, 10300],\r\n                        backgroundColor: [\"#F7464A\", \"#46BFBD\"],\r\n                        hoverBackgroundColor: [\"#FF5A5E\", \"#5AD3D1\"]\r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                responsive: true\r\n            }\r\n        });\r\n    };\r\n    showHolderTokensPieChart();\r\n\r\n    // particular holder income graph\r\n    var showHolderIncomeGraph = () => {\r\n        var ctx = document.getElementById(\"graphIncome\");\r\n        var incomeGraph = new Chart(ctx, {\r\n            type: 'line',\r\n            data: {\r\n                labels: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"],\r\n                datasets: [\r\n                    {\r\n                        data: [3, 2.8, 3, 2.75, 3, 3.5, 3.5],\r\n                        label: \"Average daily income per month\",\r\n                        backgroundColor: \"rgba(151,187,205,0.2)\",\r\n                        borderColor: \"#5AD3D1\",\r\n                        borderWidth: \"3\",\r\n                        pointBackgroundColor: \"#46BFBD\",\r\n                        pointHoverBorderColor: \"#FF5A5E\",\r\n                        pointHoverBackgroundColor: \"#FF5A5E\",\r\n\r\n\r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                responsive: true,\r\n                scales: {\r\n                    yAxes: [{\r\n                      scaleLabel: {\r\n                        display: true,\r\n                        labelString: 'token/day'\r\n                      }\r\n                    }],\r\n                    xAxes: [{\r\n                        scaleLabel: {\r\n                          display: true,\r\n                          labelString: 'month'\r\n                        }\r\n                      }]\r\n                  }\r\n            }\r\n        });\r\n    };\r\n    showHolderIncomeGraph();\r\n    // particular holder employment graph\r\n    var showHolderEmploymentGraph = () => {\r\n        var ctx = document.getElementById(\"graphEmployment\");\r\n        var employmentGraph = new Chart(ctx, {\r\n            type: 'line',\r\n            data: {\r\n                labels: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"],\r\n                datasets: [\r\n                    {\r\n                        label: \"Employment status through months\",\r\n                        backgroundColor: \"#FFC870\",\r\n                        data: ['unemployed', \"employed\", 'unemployed', \"employed\", \"employed\", \"employed\", 'unemployed']\r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                responsive: true,\r\n                scales: {\r\n                    xAxes: [{\r\n                        barPercentage: 1,\r\n                        categoryPercentage: 1\r\n                    }],\r\n                    yAxes: [{\r\n                        type: 'category',\r\n                        labels: ['employed', 'unemployed']\r\n                    }]\r\n                }\r\n            },\r\n            \r\n        });\r\n    };\r\n    showHolderEmploymentGraph();\r\n})\r\n\r\n//for popovers to work\r\n$(function () {\r\n    $('[data-toggle=\"popover\"]').popover()\r\n});\n\n//# sourceURL=webpack:///./web/src/js/app.js?");

/***/ }),

/***/ "./web/src/js/models/TokenHolder.js":
/*!******************************************!*\
  !*** ./web/src/js/models/TokenHolder.js ***!
  \******************************************/
/*! exports provided: SeniorityLevels, IncomeLevels, TokenHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SeniorityLevels\", function() { return SeniorityLevels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IncomeLevels\", function() { return IncomeLevels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TokenHolder\", function() { return TokenHolder; });\n\r\nconst SeniorityLevels = {\r\n    junior: \"Junior\",\r\n    midLevel: \"Mid-level\",\r\n    senior: \"Senior\"\r\n};\r\nconst IncomeLevels = {\r\n    junior: 1,\r\n    midLevel: 2.5,\r\n    senior: 3.5\r\n}\r\n\r\nconst TokenHolder = function(\r\n    firstName,\r\n    lastName,\r\n    overallTokens,\r\n    baseTokens,\r\n    incomeTokens,\r\n    employmentStatus,\r\n\r\n){\r\n    this.firstName = firstName;\r\n    this.lastName = lastName;\r\n    this.overallTokens = overallTokens;\r\n    this.baseTokens = baseTokens;\r\n    this.incomeTokens = incomeTokens;\r\n    this.employmentStatus = employmentStatus;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./web/src/js/models/TokenHolder.js?");

/***/ })

/******/ });