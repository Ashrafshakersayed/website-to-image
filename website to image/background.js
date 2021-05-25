

chrome.browserAction.onClicked.addListener(buttonClicked);


function buttonClicked(){


    chrome.tabs.captureVisibleTab(
    null,
    {
        format : 'png'
    },
    function(dataUrl)
    {

        var today = new Date();
        
        console.log(today)
       var a = document.createElement("a")
       a.href = dataUrl
       a.innerText ="click me"
       a.download = "screen " + today;
       a.click()
    })


}