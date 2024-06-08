const data = document.querySelectorAll(".app-page")[0].outerHTML;

console.log(data);

chrome.storage.local.set({ calenderTable: data }, () => {
  console.log("Đã lấy được data!");
});
