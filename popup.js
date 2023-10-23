const btnVote = document.querySelector(".btn-vote");
const btnCheat = document.querySelector(".btn-cheat");
const btnBlockFb = document.querySelector(".fb-block");
btnVote.addEventListener("click", vote);
btnCheat.addEventListener("click", cheat);





btnBlockFb.addEventListener("click", (e) => {

})

function sendMessage(msg) {
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTab)

    function gotTab(tab) {
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
