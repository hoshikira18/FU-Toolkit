chrome.runtime.onMessage.addListener(gotMessage)
const isBlock = localStorage.getItem("isBlock");
console.log(isBlock);

function gotMessage (message) {
    if(message) {
        console.log(message)
        localStorage.setItem("isBlock", message.isBlock)
    }
}

if(isBlock == 'true') {
    document.body.innerHTML = `<div></div>`
    alert("Bỏ đi mà làm người")
}
else {
    alert("Bỏ đi mà làm người")
}

