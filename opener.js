chrome.contextMenus.onClicked.addListener(genericOnClick);

function genericOnClick(info) {
  console.log(info);
  switch (info.menuItemId) {
    case "dev":
      // Radio item function
      openUrl("http://stackoverflow.com/");
      break;
    case "localhost":
      // Radio item function
      openUrl("http://stackoverflow.com/");
      break;
    default:
      // Standard context menu item function
      console.log("Error!!!");
  }
}

function openUrl(host) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var newURL = host + tabs[0].url.substr(getPosition(tabs[0].url, "/", 3));
    chrome.tabs.create({ url: newURL });
  });
}

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

chrome.runtime.onInstalled.addListener(function () {
  // Create a parent item and two children.
  chrome.contextMenus.create({
    title: "Open in DEV",
    id: "dev",
  });
  chrome.contextMenus.create(
    {
      title: "Open in localhost",
      id: "localhost",
    },
    function () {
      console.log("localhost");
    }
  );
});
