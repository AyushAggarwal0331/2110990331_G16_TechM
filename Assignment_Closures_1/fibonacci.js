function memoizedFibonacci(){
    let cache={};
    return function fibonacci(n){
      if(n<=1)return n;
      if(n in cache) return cache[n];          
      return cache[n]=fibonacci(n-1)+fibonacci(n-2);
    };
  }
  
  const ans=memoizedFibonacci();
  
  console.log(ans(2));    
  console.log(ans(4));    
