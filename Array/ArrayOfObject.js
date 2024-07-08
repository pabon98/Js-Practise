const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

// const ArrayList = kvArray.map((value, key)=> console.log(value, key))

const reformattedArray = kvArray.map(({key, value})=> ({[key]: value}))

console.log(reformattedArray);

