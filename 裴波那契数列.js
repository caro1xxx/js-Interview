function fibonacci(n){
  let arr = [1,1];
  for(let i=2;i<n+1;i++){
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr
}

console.log(fibonacci(40));