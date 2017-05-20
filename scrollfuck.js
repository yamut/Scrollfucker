chrome.contextMenus.create({
    "title": "Fuck the scrollbar",
    "id": "scrollfucker",
    "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "scrollfucker") {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "scrollfucker");
        });
    }
});

