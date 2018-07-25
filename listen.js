chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("listen");
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(request)
        if (request.greeting == "hello") {
            console.log("hi");
            console.log(chrome.notifications);
            chrome.notifications.create('reminder', {
                type: 'basic',
                iconUrl: 'icon.png',
                title: 'Asana Plus',
                message: 'Welcome to Asana Plus!'
            }, function () { });
        }

    }
);