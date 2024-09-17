function add(x, y) {
    return x + y;
  }
  
  let boundAdd = add.bind(null, 3);
  let result = boundAdd(5);
  console.log(result);