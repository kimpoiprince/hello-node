let data = [
  { id: 1, title: "AAAA", price: 100, count: 2 },
  { id: 4, title: "BBBB", price: 200, count: 1 },
  { id: 6, title: "CCCC", price: 300, count: 1 },
  { id: 2, title: "DDDD", price: 500, count: 2 },
];

let result = data.reduce((acc, item) => acc + item.price * item.count, 0);
console.log(result);
