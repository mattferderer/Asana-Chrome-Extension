(function () {
    var element = document.createElement('style'),
        sheet;
    document.head.appendChild(element);
    sheet = element.sheet;
    sheet.insertRule(".SubtaskTaskRow-detailsButton.SubtaskTaskRow-detailsButton--hasMetadata {color: #ec840d; fill: #ec840d; background: #25e8c8}", 0);

    console.log("send");
    chrome.runtime.sendMessage({ greeting: "hello" }, function () { });

})();