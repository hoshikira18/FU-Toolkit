const btnVote = document.querySelector(".btn-vote");

btnVote.addEventListener("click", vote);

function vote() {
    console.log("Vote");
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTab)

    function gotTab(tab) {
        chrome.tabs.sendMessage(tab[0].id, { action: "vote"}); 
    }
}