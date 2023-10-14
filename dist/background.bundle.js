/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
chrome.action.onClicked.addListener(function(tab) {
    chrome.windows.create({ 
        url: "index.html", 
        type: "popup", 
        width: 400, 
        height: 250 
    });
});
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map