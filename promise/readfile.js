let p = new Promise((resolve, reject) => {
    fs.readFile("input.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  console.log(p);

  p.then((data) => {
    console.log("promise讀檔正確", data);
  }).catch((err) => {
    console.error("promise讀檔失敗", err);
  });