try {
    chrome.runtime.onInstalled.addListener(function (details) {
      if (details.reason === "install") {
        // Extension has been installed
        const url = `chrome-extension://${chrome.runtime.id}/index.html`;
        chrome.tabs.create({ url: url });
      }
    });
  
    chrome.runtime.onStartup.addListener(function() {})
  
    chrome.runtime.onMessage.addListener(function (
      { command, data },
      sendResponse
    ) {
      try {
        switch (command) {
          case "HELLO_WORLD":
            console.log("Hello World", data)
            sendResponse
            return true;
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
  