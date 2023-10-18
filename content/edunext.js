console.log("Chrome extension ready to go!")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    console.log(message);
    if(message.action === "vote") {
        const list = document.querySelectorAll('.MuiRating-visuallyHidden')
        for(let i = 0; i < list.length; i++) {
            if(list[i].textContent == '5 Stars') {
                list[i].click();
            }
        }
    }
}