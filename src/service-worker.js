chrome.action.onClicked.addListener((tab) => {

  let url;
  let id;

  // console.log({ tab })
  url = tab.url;
  id = tab.id;

  chrome.tabs.sendMessage(id,
    { // content_script はタブごとに存在するため ID 指定する必要がある
      name: 'copyUrl:contentScripts',
      data: {
        url
      }
    })
});
