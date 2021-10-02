程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

function readData(idx) {
for (let i = 0; i < 100; i++) {
idx++;
console.log(idx);
}
if (idx < 500) {
readData(idx);
}
}
readData(0);
console.log("after");

輸出順序為 → 0, 1, 2, 3, 4.....,500 , after。

過程分析 → 程式會呼叫 readData，進入迴圈，
idx 會先印出 1 至 100 ，再將數字 100 代入 if 內，
然後將 100 帶回 for，上述流程重複 5 次後直到 idx=500，
最後才印出 after。

<hr>

程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

function readData(idx) {
for (let i = 0; i < 100; i++) {
idx++;
console.log(idx);
}
if (idx < 500) {
setTimeout(function () {
readData(idx);
}, 0);
}
}

readData(0);
console.log("after");

輸出順序為 → 1,2,3,....,100, after
再來是 101,102,103.....500

過程分析 →
