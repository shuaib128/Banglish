chrome.action.onClicked.addListener(function(tab) {
    chrome.windows.create({ 
        url: "index.html", 
        type: "popup", 
        width: 400, 
        height: 250 
    });
});