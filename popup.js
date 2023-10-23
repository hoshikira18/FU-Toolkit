const btnVote = document.querySelector(".btn-vote");
const btnCheat = document.querySelector(".btn-cheat");
const inputCheckBlock = document.querySelector(".input-checkbox-block");

btnVote.addEventListener("click", vote);
btnCheat.addEventListener("click", cheat);


inputCheckBlock.addEventListener("change", blockSocialMedia);

let isBlock = localStorage.getItem("isBlock");

inputCheckBlock.checked = isBlock == "true" ? true : false;

function blockSocialMedia(e) {
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, (tab) => {
        console.log(tab[0].title)
        if(tab[0].title === "Facebook") {
            isBlock = e.target.checked;
            localStorage.setItem("isBlock", e.target.checked);
            sendMessage({ action: "blockSocialMedia", isBlock: isBlock })
        }
        else {
            const para = document.createElement("p");
            const node = document.createTextNode("Failed: Truy cập Facebook trước khi click!");

            para.appendChild(node);
            document.querySelector(".fb-block").appendChild(para);
        }
    })

}

function sendMessage(msg) {
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, send)

    function send(tab) {
        chrome.tabs.sendMessage(tab[0].id, msg)
    }
}

function vote() {
    console.log("Vote");
    sendMessage({ action: "vote"});    
}

function cheat() {
    console.log("Cheat");
    const input = document.querySelector(".pin");
    const type = document.querySelector("#type").value;
    sendMessage({ pin: input.value, type: type });
}
