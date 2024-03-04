chrome.storage.local.get(['calenderTable'], function(result) {
    if (result.calenderTable) {
    const container = document.querySelector(".calender")
    container.innerHTML += result.calenderTable
    }
    else
        alert("err")
})

getNote()

function getNote () {
        const inputNote = document.querySelector("#input")
        inputNote.value = localStorage.getItem('noteValue')
}


        const inputNote = document.querySelector("#input")

        inputNote.addEventListener('input', () => {
                console.log(inputNote.value);
                localStorage.setItem('noteValue', inputNote.value)
        })
