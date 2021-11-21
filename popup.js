var initialize = true;

var getSelectedTab = (tab) => {
    var isEnable = document.getElementById('checkboxOfEnable');

    if (initialize) {
        chrome.storage.sync.get(["isEnable"], function (items) {
            isEnable.checked = items.isEnable;
        });
        initialize = false;
    }


    isEnable.addEventListener('change', function () {
        if (isEnable.checked) {
            chrome.storage.sync.set({ "isEnable": true }, () => {
            });
        } else {
            chrome.storage.sync.set({ "isEnable": false }, () => {
            });
        }
    }, { once: false });
}



chrome.tabs.getSelected(null, getSelectedTab);