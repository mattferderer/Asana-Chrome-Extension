chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("listen");
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(request)
        //TODO - Use Asana's API to request tasks. Check their times & alert user if one is due today or in X minutes. Need to store state & the task ID somehow & offer a snooze feature. For now, this is just a test to try notifications.
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