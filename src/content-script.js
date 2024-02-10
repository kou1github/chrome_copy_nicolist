chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request.name);
  if (request.name === 'copyUrl:contentScripts') {
    // console.log(request.data.url);
    navigator.clipboard.writeText(request.data.url).then(function () {
      /* clipboard successfully set */
      alert("Copy Done.");
    }, function () {
      /* clipboard write failed */
      console.log("Copy faled.");
    });
  }
});
