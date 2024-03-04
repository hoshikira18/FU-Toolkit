const data = document.querySelectorAll("table")[2].outerHTML

console.log(data)

chrome.storage.local.set({ 'calenderTable': data }, () => {
    console.log("Đã lấy được data!")
})
