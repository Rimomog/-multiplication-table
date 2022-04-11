multiplicationTable = function(size) {
    // insert code here
    let arr = [];
    for(let i = 1; i <= size; i++){
      for(let j= 1; j <= size; j++){
        arr.push(i * j)
      }
    }
    
    let a = [];
    for(let i = 0; i < arr.length; i += size){
      a.push(arr.slice(i, i + size))
    }
    return a;
  }
  