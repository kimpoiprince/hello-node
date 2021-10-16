let doWork = function (job, timer, cb) {
  // 模擬非同步
  setTimeout(() => {
    let dt = new Date();
    // callback 在慣例上：
    // 第一個參數是:「錯誤」
    // 第二個參數是: 要回覆的資料/訊息
    cb(null, `完成工作 ${job} at ${dt.toISOString()}`);
  }, timer);
};

let dt = new Date();
console.log(`開始工作 at ${dt.toISOString()}`);

// 刷牙(3000) --> 吃早餐(5000) --> 寫功課(3000)
doWork("刷牙", 3000, function (err, data) {
  // 錯誤習慣的參數名稱 err, error, e
  // err = null 代表沒有錯誤
  // err = '' 代表沒有錯誤
  // err = 0 代表沒有錯誤
  if (err) {
    // 有錯誤的情況
    console.error(err);
    // 下一件事要做什麼事？
  } else {
    // 正確的情況
    console.log(data);
    doWork("吃早餐", 5000, function (err, data) {
      if (err) {
        // 有錯誤的情況
        // 怎麼處理錯誤
        console.error(err);
      } else {
        // 正確的情況
        console.log(data);
        doWork("寫功課", 3000, function (err, data) {
          if (err) {
            // 有錯誤的情況
            console.error(err);
          } else {
            // 正確的情況
            console.log(data);
          }
        });
      }
    });
  }
});
