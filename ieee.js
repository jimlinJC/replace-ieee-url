function doReplace() {
    let current_url = new URL(document.URL);
    let protocal = current_url.protocol
    let replaceHost = "ieeexplore-ieee-org.ezproxy.lib.ntust.edu.tw"
    let path = current_url.pathname

    window.location.href = `${protocal}//${replaceHost}${path}`;
}

chrome.storage.sync.get(["isEnable"], function (items) {
    if (items.isEnable) { doReplace(); }
});

chrome.storage.onChanged.addListener(function ({ isEnable }) {
    if (isEnable.newValue) {
        doReplace();
        return;
    }
})