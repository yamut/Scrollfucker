var fucker = null;
document.addEventListener('mousedown', function (e) {
    if (e.button == 2) {
        fucker = e.target;
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "scrollfucker") {
        document.body.style.overflow = "scroll";
    }
});
